# CSR vs SSR

## CSR 이란 ?

**브라우저  ↔️  프론트서버(SPA React) /
브라우저 → 백엔드 서버 ↔️  데이터 베이스** 

html 다운로드 → js 다운로드 → js 실행 → 서버에서 api 호출 → api결과 데이터 바인딩 → 화면 렌더링 

**Client Side Rendering** 약자로 **자바스크립트 파일을 동적으로 받아와 브라우저에서 해석해 렌더링하는 방식**이다.

1. 장점
    - 컴포넌트의 정의와 재사용이 쉽다.
    - 사용자에게 부드러운 UX를 줄 수 있다.
    - 페이지 구성에 필요한 데이터만 요청하여 서버 부하가 줄어든다.
2. 단점
    - 초기에 js파일을 받고 실행하는 시간이 오래걸린다.
    - SEO 최적화가 쉽지 않다. /  meta태그 정의에 약점이 있다.

첫화면에 들어가면 데이터를 제외한 화면을 그리는 코드들이 브라우저가 프론트 서버에서 다운받아진다.  화면은 그려졌지만 데이터가 없는 상태이다.  클라이언트 요청이 발생하면 필요한 데이터만 백엔드 서버에 요청하고 데이터를 받아온다.

## SSR 이란?

 **브라우저↔️  프론트 서버↔️  백엔드 서버↔️  데이터베이스**

html 다운로드 → 화면 렌더링

**Server Side Rendering 약자로 서버에서 사용자에게 보여줄 페이지를 모두 구성하여 사용자에게 페이지를 보여주는 방식이다.  ( 단어 그대로 서버에서 렌더링 )
- jsp/Servlet의 아키텍처에서 이 방식을 사용했다.**

1. 장점
    - 초기 로딩속도가 빨라서 사용자가 컨텐츠를 빨리 볼 수 있다.
    - 모든 검색엔진에 대한 SEO가 가능하다.
2. 단점
    - 매번 페이지를 요청할 때마다 새로고침 되기 때문에 UX가 다소 떨어진다.
    - 서버에 매번 요청하여 트래픽, 부하가 생긴다.
    - 이후의 랜더링은 서버를 거쳐야 하므로 속도가 느릴 수 있다. (깜빡이는 화면 발생)

브라우저에서 데이터를 요청하면 브라우저 → 프론트 → 백엔드 → 데이터베이스 를 거쳐 데이터 베이스에서 데이터를 가져와 브라우저에 데이터가 그려지는 형식이다. 

> 클라이언트가 페이지를 이동한다든가, 클릭으로 인한 다른 요청이 생길때마다 이 과정을 반복하기 때문에 화면에서 바뀌지 않아도 되는 부분도 계속해서 다시 렌더링되는 단점이 있다. 이는 곧 서버 부하 등의 문제를 일으킬 수 있다.

처음에 CSR이 SPA 이 인줄 알았다 spa 가 csr 방식을 사용하는 것이었다.