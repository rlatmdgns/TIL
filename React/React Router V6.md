# React Router  V6

[https://github.com/remix-run/react-router](https://github.com/remix-run/react-router)

---

[React Router](https://reactrouter.com/docs/en/v6/getting-started/tutorial)는 사용자 인터페이스를 구축하기 위한 JavaScript 라이브러리인 React를 위한 모든 기능을 갖춘 클라이언트 및 서버 측 라우팅 라이브러리입니다.

**npm outdated 현재 설치된 모듈에서 새로운 버전의 존재여부를 확인하는 명령어입니다~!**

어떻게 바뀌었나 확인을 하고 싶을 때는 공식홈페이지 or github에 [the migration guide](https://github.com/remix-run/react-router/blob/main/docs/upgrading/v5.md), **package.json** 에서 확인 할 수 있습니다 !

## 1. 작아진 번들 사이즈 !

v5 21kb → v6 10kb 로 용량이 많이 작아졌습니다.

[https://bundlephobia.com/](https://bundlephobia.com/) ← 사이즈 비교 

## 2. Switch →Routes 네이밍 변경

`component` 대신 `element` 속성에 `component`를 전달합니다.

`element` v6 에서 `prop` 을 사용하는 또 다른 중요한 이유 `<Route children>`는 중첩 경로를 위해 예약되어 있기 때문입니다

**React Router의 디폴트 매칭 규칙 으로 인해 앞부분만 일치해도 전부 매칭**되기 때문에 정확히 라우트를 일치시키고자 `exact` 속성을 사용하였으나 v6부터 기본적으로 정확히 일치하도록 매칭 규칙이 변하여 **`exact` 의 옵션을 더이상 사용하지 않습니다.**

Before V5

```jsx
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/users" component={<Users />} />
      </Switch>
    </BrowserRouter>

```

After V6

```jsx
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="users/*" element={<Users />} />
      </Routes>
    </BrowserRouter>

```

## 3. react-router-config →useRoutes

v5 react-router-config패키지 의 모든 기능 이 v6의 코어로 이동되었습니다.

```jsx
function App() {
  let element = useRoutes([
// These are the same as the props you provide to <Route>
    { path: "/", element: <Home /> },
    { path: "dashboard", element: <Dashboard /> },
    {
      path: "invoices",
      element: <Invoices />,
// Nested routes use a children property, which is also// the same as <Route>      children: [
        { path: ":id", element: <Invoice /> },
        { path: "sent", element: <SentInvoices /> }
      ]
    },
// Not found routes work as you'd expect
    { path: "*", element: <NotFound /> }
  ]);

// The returned element will render the entire element// hierarchy with all the appropriate context it needsreturn element;
}

```

## 4. useHistory → useNavigate

Before V5

```jsx
const history = useHistory();

history.push('/');
history.goback();
history.go(-2);
history.push(`/user/${user._id}`);

```

After V6

```jsx
const navigate = useNavigate();

navigate('/');
navigate(-1);
navigate(-2);
navigate(`/user/${user._id}`);
```

## <Link to> 참고

v5에서 로 <Link to>시작하지 않는 값 /이 모호했습니다. 현재 URL이 무엇인지에 따라 다릅니다. 예를 들어 현재 URL이 /users인 경우 v5 <Link to="me">는 <a href="/me">. 그러나 현재 URL에 후행 슬래시가 있으면 /users/동일 <Link to="me">하게 렌더링 <a href="/users/me">됩니다. 이로 인해 링크가 어떻게 작동할지 예측하기 어렵습니다. 따라서 v5 match.url에서는 상대 <Link to>값을 사용하지 않고 루트 URL에서 링크를 빌드하는 것이 좋습니다

React Router v6은 이 모호성을 수정합니다. v6에서는 현재 URL에 관계없이 <Link to="me">항상 동일하게 렌더링됩니다

```jsx
//v5
<Link to="/users">Users</Link>

//v6
<Link to="user">Users</Link>

```

출처

[https://reactrouter.com/docs/en/v6/upgrading/v5#advantages-of-route-element](https://reactrouter.com/docs/en/v6/upgrading/v5#advantages-of-route-element)

[https://github.com/remix-run/react-router/blob/main/docs/upgrading/v5.md](https://github.com/remix-run/react-router/blob/main/docs/upgrading/v5.md)