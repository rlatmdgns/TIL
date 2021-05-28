# React-Router-Dom

라우팅이란? 네트워크상에서 주소를 이용, 목적지까지 경로를 체계적으로 결정하는 경로선택 과정

**리액트 라우터**는 리액트의 **화면 전환**을 도와주는 역할을 한다. 일반적인 웹에서 a태그를 이용해 다른 페이지로 이동했었다. 리액트에서는 React-Router 를 통해 Link 태그를 사용하여 화면을 전환한다.

**리액트는 SPA (Single Page Application) 방식으로써,

여러개의 페이지를 사용하며, 새로운 페이지를 로드하는 기존의 MPA 방식과 달리

새로운 페이지를 로드하지 않고 하나의 페이지 안에서 필요한 데이터만 가져오는 형태를 가집니다.**

[출처] React로 블로그 만들기 14 : 리액트 라우터 (React Router. 1)|작성자 SeJun3278

react-router는 페이스북에서 공식으로 지원하고 있는 라이브러리는 아니지만, 많은 사용자를 보유하고 있다고 합니다.

Dependency 설치 `npm i react-router-dom`

리액트 라우터에서 제공하는 몇 가지 기본 컴포넌트

- `<BrowserRouter />`: HTML5 히스토리 API를 사용하여 주소를 관리하는 라우터(해쉬뱅 모드 사용 안함)
- `<Route />`: 요청 경로와 렌더링할 컴포넌트를 설정한다
- `<Switch />`: 하위에 라우터 중 하나를 선택한다
- `<Redirect />`: 요청 경로를 다른 경로로 리다이렉션한다

```jsx
const Root: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/memo" component={Memo} />
      <Route path="/trash" component={Trash} />
      <Redirect path="*" to="/" />
    </Switch>
  </BrowserRouter>
)
```

**BrowerRouter를 선언**

- **/ 요청으로 들어오면**: Home 컴포넌트를 렌더링 한다
- **/memo 요청으로 들어오면**: Memo 컴포넌트를 렌더링 한다
- **/trash 요청으로 들어오면**: Trash 컴포넌트를 렌더링 한다
- **위 세 개 규칙을 벗어나면**: 루트(/) 요청으로 리다이렉션 한다

출처 : [https://jeonghwan-kim.github.io/dev/2019/07/08/react-router-ts.html](https://jeonghwan-kim.github.io/dev/2019/07/08/react-router-ts.html)

**공부하면서 적용한 방식** 

```jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header } from './components/Header';
import Login from './pages/Login';
import Forum from './pages/Forum';
import ForumDetail from './pages/ForumDetail';
import PrivateRoute from './helpers/PrivateRoute';
function App() {
  return (
    <Router>
      <Route path='/forum' component={Header} />
      <Switch>
        <Route exact path="/" component={Login} />
        <PrivateRoute exact path="/forum" component={Forum} />  
        <Route exact path="/forum/:id" component={ForumDetail} />
      </Switch>
    </Router>
  );
}

export default App;
```

### `<Switch>` 사용하는 이유

Route에 path 속성 값을 전달하지 않았을 경우  test 컴포넌트랑 home 컴포넌트가 둘다 노출하게 됩니다.  path를 전달하지 않으면 항상 노출됩니다. 

about"에 접속하면 우리가 설정한 세 개의 컴포넌트가 다 보이게 됩니다. 이럴 때 스위치를 사용하시면 됩니다.

exact path 를 사용하여 정확히 일치하는, 즉 부분적으로 일치하는 것이 아니라 정확하게 일치하는 URL의 컴포넌트를 렌더링시키는 방법을 사용할 수 있습니다.

```jsx
<Route exact path="/" component={Home} />
<Route exact path="/about" component={About}/>
<Route component={test} />
```

참고자료 : 출처 [https://baeharam.netlify.app/posts/react/why-switch-is-needed](https://baeharam.netlify.app/posts/react/why-switch-is-needed)