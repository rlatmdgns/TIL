# Next.js

## next.js란 ?

[https://nextjs.org/](https://nextjs.org/)

React의 SSR(Server Side Rendering)을 쉽게 구현할 수 있게 도와주는 간단한 프레임워크이다.

SSR의 단점 : 불필요한 부분까지 렌더링이 한다.
CSR의 단점 : 초기 진입 속도가 느리고, SEO에 취약하다.

위 두가지 단점을 해결하고 두 방식의 장점을 살리고자.

### Next.js의 작동방식

1. 사용자가 초기에 Server에 페이지 접속을 요청한 경우 **SSR방식**으로 렌더링 될 HTML을 보낸다.
2. 브라우저에서 JS를 다운로드 받고 React를 실행한다.
3. 사용자가 페이지와 상호작용을 하며 다른 페이지로 이동할 경우 **CSR방식**으로 Server가 아닌 브라우저에서 처리한다.