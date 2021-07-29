# icon-font 적용기

회사에서 이전에는 http 호출횟수,  페이지 첫 로딩속도 등으로 인하여 Image Sprite기법을 사용하고 있었다. 

디스플레이 레티나, 높은 해상도 들을 지원하기 위해 2배 압축을 하여 적용하고 있었다 하지만 스마트 폰의 활성화와 다양한 DPI를 제공하는 기기들이 늘어나면서 이미지가 강제로 DPI에 맞게 늘어나 뿌옇게 보이거나 깨지는 현상이 발생하여 폰트아이콘을 적용하기로 하였다!

또한 리뉴얼하는 페이지에 아이콘을 많이 사용하고 같은 아이콘에 색상만 다른게 많고 hover 시 에도 아이콘 컬러가 변하는 게 많아서 **유지보수 측면에서 장점**이라고 생각한다.

장점

- 크기가 자유자재로 변형 가능
- 전체 서체보다 적은 문자를 포함하여 파일의 크기가 작고 빠르다.
폰트로 아이콘을 '사용하기 때문에 이미지를 로드하려고 network 비용이 발생하지 않는다.
- CSS로 확장하여 모든 작업이 가능
- 애니메이션 효과 적용 가능

단점

- 일부 플랫폼의 브라우저는 움직이는 아이콘에 떨림현상이 발생함.
- 단색 이미지만 가능
- CSS3 애니메이션은 IE8 - IE9에서 지원되지 않음.
- **bootstrap(부트스트랩)CDN**은 해외에 서버를 두고 있기 때문에 국내에서는 로딩속도가 느려지기도 함.

출처:

[https://velog.io/@kdydesign/Web-Icon-Font-제작-방법을-배워보자#fontagon-사용](https://velog.io/@kdydesign/Web-Icon-Font-%EC%A0%9C%EC%9E%91-%EB%B0%A9%EB%B2%95%EC%9D%84-%EB%B0%B0%EC%9B%8C%EB%B3%B4%EC%9E%90#fontagon-%EC%82%AC%EC%9A%A9)

[https://www.slideshare.net/wsconf/svg-icon-font-wsconfseoul2017-vol2](https://www.slideshare.net/wsconf/svg-icon-font-wsconfseoul2017-vol2)
[https://junojunho.com/front-end/svg-icon](https://junojunho.com/front-end/svg-icon)