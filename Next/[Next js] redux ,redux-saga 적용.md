# [Next.js] redux ,redux-saga 적용

**6버전 이상 ~ !** 

## **next-redux-wrapper가 필요한 이유**

리액트에서는 단 하나의 리덕스 스토어만 존재한다.

하지만, Next를 사용하는 순간 리덕스 스토어가 **여러개**가 될 수 있다. **Next.js는 유저가 요청할때마다 redux store를 새로 생성한다. Next.js가 제공하는 getInitialProps, getServerSideProps등에서 리덕스 스토어에 접근할 수 있어야 한다. next-redux-wrapper가 없다면 이것이 불가능하다.**

1. **redux , next-redux-wrapper 설치**
`npm i next-redux-wrapper react-redux`
`npm install redux-saga next-redux-saga`
2. **store/configureStore.js 파일생성**

**// 1. 스토어를 생성**

const store = createStore(reducer, enhancer);

**// 2. next-redux-wrapper에서 제공하는 createWrapper정의**

const wrapper = createWrapper(configureStore, { debug: process.env.NODE_ENV === 'development' });

```jsx
import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'; // redux-saga를 생성하기 위한 라이브러리
import { createWrapper } from 'next-redux-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension';
 
//import withReduxSaga from 'next-redux-saga'; // next와 redux-saga를 연결하기 위한 라이브러리
//생략 가능 Dependency를 최소화 하기 위해 withReduxSaga 지움.
/*
wrapper(_app.js를 감싸고 있음)로 개별 페이지의 SSR을 적용함. 
기존에 next에서 SSR 렌더링용 메서드를 4가지 정도 지원하고 있는데,
Redux랑 사용할 때는 문제가 있어서 Next-Redux-Wrapper가 제공하는 SSR 렌더링용 메서드와 
같이 사용하려 한다.
*/ 
import reducer from '../reducers';
import rootSaga from '../sagas'; //사가 가져옴 

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const enhancer = process.env.NODE_ENV === 'production'
    ? compose(applyMiddleware(...middlewares))
    : composeWithDevTools(
      applyMiddleware(...middlewares),
    );
  const store = createStore(reducer, enhancer);
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

const wrapper = createWrapper(configureStore, { debug: process.env.NODE_ENV === 'development' });

export default wrapper;
```

next-redux-wrapper는 유저가 페이지를 요청할때마다 리덕스 스토어를 생성해야 하기 때문에 makeStore함수를 정의해서 넘기는것이다.

3. `**_app.js` 파일 수정**

- wrapper 불러오기
- wrapper를 사용해서 내보내기

```jsx
import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import wrapper from '../store/confiureStore';
import { GlobalStyle } from '../styles/global-styles';

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <title>flow</title>
    </Head>
    <GlobalStyle />
    <Component {...pageProps} />
  </>
);

App.propTypes = {
  Component: PropTypes.elementType.isRequired, // elementType  = jsx
};

export default wrapper.withRedux(App);
```

wrapper의 withRedux HOC로 App컴포넌트를 감싸주면 된다. 그럼 이제 각 페이지의 getInitialProps, getServerSideProps, getStaticProps등에서 리덕스 스토어에 접근이 가능해진다.

> _app.js에서 커스텀 getInitialProps를 정의하지마라. 확장하는 순간 next.js의 페이지 최적화 기능을 무효화 시키기 때문이다.

next.js에서 생성한 redux store와 client에서 생성한 redux store는 다르기 때문에 이 둘을 합쳐야 한다.

```jsx
import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';

import user from './user';
import project from './project';
import modal from './modal';

// (이전상태, 액션) => 다음상태
const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      console.log('HYDRATE', action);
      return action.payload;
    default: {
      const combineReducer = combineReducers({
        user,
        project,
        modal,
      });
      return combineReducer(state, action);
    }
  }
};

export default rootReducer;
```

그래서 이렇게 서버에서 생성한 스토어의 상태를 **HYDRATE**라는 액션을 통해서 클라이언트에 합쳐주는 작업이 필요한것이다.

action.payload에는 서버에서 생성한 스토어의 상태가 담겨있다. 이 둘을 합쳐 새로운 클라이언트의 리덕스 스토어의 상태를 만든다.

만약에 순수 next.js만 사용하고 next-redux-wrapper를 사용하지 않는다면 우리는 getInitialProps등에서 리덕스 스토어에 접근할 수 없다. 그런 경우엔 axios나 fetch등의 api 라이브러리를 사용해야한다.

[https://github.com/kirill-konshin/next-redux-wrapper](https://github.com/kirill-konshin/next-redux-wrapper)
[https://velog.io/@jehjong/Next.js에서-Redux사용하기-Redux-wrapper](https://velog.io/@jehjong/Next.js%EC%97%90%EC%84%9C-Redux%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0-Redux-wrapper) -참고 

출처 - [https://simsimjae.medium.com/next-redux-wrapper가-필요한-이유-5d0176209d14](https://simsimjae.medium.com/next-redux-wrapper%EA%B0%80-%ED%95%84%EC%9A%94%ED%95%9C-%EC%9D%B4%EC%9C%A0-5d0176209d14)

## 리덕스 사가

Redux는 동기로 작동하여 비동기적인 작업을 처리하지 못 한다. 그래서 미들웨어를 연결하여 비동기작업 처리를 해야한다. 대표적인 미들웨어로 thunk와 saga가 있는데 saga가 더 기능이 많고 많이 쓰이는 것 같다.

**리덕스 사가 설치
`npm install redux-saga next-redux-saga`**

위 코드에 리덕스랑, 사가랑 같이 적용되어있다.

saga 연결 

[https://redux-saga.js.org/docs/introduction/BeginnerTutorial/](https://redux-saga.js.org/docs/introduction/BeginnerTutorial/)

[https://velog.io/@ansrjsdn/Next.js에-Redux-Saga-연결-해보기](https://velog.io/@ansrjsdn/Next.js%EC%97%90-Redux-Saga-%EC%97%B0%EA%B2%B0-%ED%95%B4%EB%B3%B4%EA%B8%B0)