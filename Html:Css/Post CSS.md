# Post CSS

PostCSS는 css 전처리기이다.

기본적인 css만으로는 중복적으로 작성해야하고 브라우저 호환성을 위해서 반복적으로 해줘야하는 것들이 많다.

중복되는 코드를 작성하고자 전처리기 나왔습니다.

대표적으로 Less, Sass 가 있다.  or stylus 

 Less, Sass는 제공하는 문법을 공부하고 css를 작성하면 이 전처리기가 우리가 조금 더 새로운 현란한 간편한 문법으로 작성한 코드를 순수 css로 변환해준다.

postCss도 비슷한 개념이지만 플로그인이 다양하다 ~! 

 대표적인 장점  autoprefixer

```css
CSS input

:fullscreen {
}

CSS output
:-webkit-full-screen {
}
:-ms-fullscreen {
}
:fullscreen {
}
브라우저 호환성을 위해 자동적으로 prefix를 붙여준다.
```

css module 

모듈화가  가능하며, id를 붙여 주기 때문에 class 중복 방지가 된다.

```jsx

import styles from 'index.module.css'
<div className={styles.button}></div>
//css 파일명을 index.module.css 작성한다.
```

다운로드 수도 높다.

![PostCSS/Untitled.png](Post%20CSS%202d80828dad8547a88480273d33c73483/Untitled.png)

출처 :

**PostCSS**: [https://postcss.org/](https://postcss.org/)

**PostCSS Plugins**: [https://www.postcss.parts/](https://www.postcss.parts/)