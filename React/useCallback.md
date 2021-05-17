# useCallback

[공식문서](https://ko.reactjs.org/docs/hooks-reference.html#usecallback)

useCallback - React Hooks: 메모이제이션 훅, 함수로 인한 렌더링 성능을 최적화하는 용도로 사용됩니다

함수를 캐싱(또는 **메모이제이션**)할 때 사용하는 훅입니다.

**메모이제이션**이란 계산된 값을 자료구조에 저장하고 이후 같은 계산을 반복하지 않고 자료구조에서 꺼내 재사용하는 것을 말한다. 

`useCallback`은 메모이제이션된 콜백을 반환한다.

```jsx
const [value, setter] = useState(initValue);

const handler = useCallback((e) => {
	setter(e.target.value);
}, []);

const handler = useCallback((e) => {
	setter(e.target.value);
}, [value]);

//배열에 요소들이 없을 시 처음 기억해둔 함수를 끝까지 쓴다는 것.!!!

//한 번만 실행되는 것은 useEffect의 경우고요. 
//다른 것들은 처음 기억해둔 값이나 함수를 끝까지 계속 쓴다.
useCallback(function, deps)
배열 안의 값이 바뀌면 함수를 호출해서 연산하고 값이 바뀌지 않으면 이전에 연산한 값을 재사용한다.
함수 안에서 state나 props가 바뀌면 함수를 호출해서 실행한다.

```

useCallback 함수의 두 번째 인수로 빈 배열이 있다.
캐싱된 함수를 다른 함수로 바꾸고 싶을 때는  빈 배열(deps 배열이라고 부른다)이 사용된다. 빈 배열에 특정한 값을 넣으면, 그 값이 변할 때만 함수를 새로 만듭니다.

위와 같이 value이 들어있다면 value값이 바뀔 때마다 내부 함수를 새로 만들어 캐싱한다. 배열 안에는 하나만 넣어야 하는 것이 아니어서 여러 개의 값을 두어 그 값들이 바뀌는지 추적할 수 있습니다.

**컴포넌트가 렌더링 될 때 마다 함수를 새로 생성한다는 단점이 있습니다. 부모 컴포넌트가 렌더링되거나, 상태(`state`)가 변경되는 경우, React 컴포넌트는 렌더링을 유발합니다** 새로 생성되어야 할 상황이 아니라면 새로 생성되지 않게 막아주어야 합니다
위 방법을 사용하면 리렌더링이 최소화 됩니다.

출처:

[https://www.zerocho.com/category/React/post/5f98e0ba1d7a110004463b7e](https://www.zerocho.com/category/React/post/5f98e0ba1d7a110004463b7e)
[https://thisblogfor.me/react/hooks_memoization/](https://thisblogfor.me/react/hooks_memoization/)
[https://react.vlpt.us/basic/18-useCallback.html](https://react.vlpt.us/basic/18-useCallback.html)