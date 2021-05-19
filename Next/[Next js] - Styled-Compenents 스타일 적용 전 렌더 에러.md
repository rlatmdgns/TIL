# [Next.js] - Styled-Compenents  스타일 적용 전에 렌더되는 에러

```jsx
npm i styled-components //스타일 구성 요소 추가 

import styled from 'styled-components';
```

## 바벨 플러그인 및 사용자 정의 .bablerc파일 추가

먼스타일이 지정된 구성 요소 babel 플러그인을 개발 종속성으로 설치한다.

`npm i -D babel-plugin-styled-components`

그런 다음 `.babelrc`프로젝트의 루트에 파일을 만듭니다 .

**바벨 설정** 

```jsx
{
  "presets": [
    "next/babel"
  ],
  "plugins": [
    [
      "styled-components",
			"babel-plugin-styled-components",
      {
        "ssr": true,
        "displayName": true,
        "preprocess": false
      }
    ]
  ]
}
```

## **page/_document.js 만들기**

```jsx
import Document, { Head, Main, NextScript } from 'next/document';
// Import styled components ServerStyleSheet
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    // Step 1: Create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet();

    // Step 2: Retrieve styles from components in the page
    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />),
    );

    // Step 3: Extract the styles as <style> tags
    const styleTags = sheet.getStyleElement();

    // Step 4: Pass styleTags as a prop
    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>
          <title>My page</title>
          {/* Step 5: Output the styles in the head  */}
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
```

출처

[https://styled-components.com/docs/tooling#usage](https://styled-components.com/docs/tooling#usage) - styled-components 바벨옵션

[https://github.com/vercel/next.js/blob/master/examples/with-styled-components/pages/_document.js](https://github.com/vercel/next.js/blob/master/examples/with-styled-components/pages/_document.js)

[https://dev.to/aprietof/nextjs--styled-components-the-really-simple-guide----101c](https://dev.to/aprietof/nextjs--styled-components-the-really-simple-guide----101c)