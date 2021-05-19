# 공용 컴포넌트 만들기

```jsx
...

const MyApp = ({ Component, pageProps, store }) => {
  return (pageProps && pageProps.pathname) === '/login' ||
    (pageProps && pageProps.pathname) === '/register' ? (
    <Provider store={store}>
      <Component {...pageProps} /> 
    </Provider> // pageProps.pathname === '/login' 일 때는 Layout 없이 렌더링
  ) : (
    <Provider store={store}>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </Provider>
  );
};

MyApp.getInitialProps = async (context) => {
  const { ctx, Component } = context;
  let pageProps = {};

  if (Component.getInitialProps) {
    // Component (pages 폴더에 있는 컴포넌트)에 getInitialProps가 있다면
    pageProps = (await Component.getInitialProps(ctx)) || {};

    return { pageProps };
  }
};

export default withRedux(makeStore)(MyApp);
```

처음에는 블로그 방식에 맞춰서 하였다. 생각을 해보니 다양한 페이지가 생기고 이벤트 페이지 등등이 생기면 저기에다가 조건처리를 다해줘야하나 생각이 들어서  공통레이아웃을 쓰는 페이지만 레이아웃 컴포넌트로 감싸기로 하였다.. 이것또한 또 번거로움이 생기지않을까 ..?

```jsx
const AppLayout = ({ children }) => {
  const router = useRouter();
  return (
    <Wrap>
      <Header />
      <BodyWrap>
        <LeftMenu />
        <Container>
          {router.pathname.indexOf('posts') < 0 && <UserHeader />}
          <Content>{children}</Content>
        </Container>
      </BodyWrap>
    </Wrap>
  );
};

	// main.js
import AppLayout from '../components/layout/AppLayout';

const Main = () => {
return (
    <AppLayout>
      <ProjectGroup projects={projects} favoriteProjects={favoriteProjects} />
      <Modal>
        <ProjectMakeForm />
      </Modal>
    </AppLayout>
  );
};
```

출처 :

[https://velog.io/@bigbrothershin/Next.js-Layout-적용-제외하기#loginjs에서-getinitialprops-작성](https://velog.io/@bigbrothershin/Next.js-Layout-%EC%A0%81%EC%9A%A9-%EC%A0%9C%EC%99%B8%ED%95%98%EA%B8%B0#loginjs%EC%97%90%EC%84%9C-getinitialprops-%EC%9E%91%EC%84%B1)