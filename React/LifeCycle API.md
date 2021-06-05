# LifeCycle API

## 변경부분

- `componentWillMount`, `componentWillReceiveProps`, `componentWillUpdate`  17부터 사용불가
- `componentWillReceiveProps` => `getDerivedStateFromProps`
- `componentWillUpdate` => `getSnapshotBeforeUpdate`
- `componentDidCatch` 컴포넌트 에러 핸들링 API추가

**React 17 버전 이후**componentWillMount, componentWillUpdate, componentWillReceiveProps 라이프 사이클이 deprecated 됩니다.

모든 컴포넌트는 초기화, 업데이트, 소멸 단계를 거치게 된다. 각 단계에서 몇 개의 메서드들이 정해진 순서대로 호출되는데, 이때 호출되는 메서드를 생명 주기 메서드라고 부릅니다.

mounting ⇒  updating ⇒ unmounting

앞의 세 단계와 별개로 렌더링 시에 예외가 발생하면 다음 메서드가 호출됩니다.
static getDerivedStateFromError()
componentDidCatch()

## Mounting

초기화 단계 

최초에 컴포넌트 객체가 생성될 때 한 번 수행된다.

1. constructor()
2. static getDerivedStateFromProps()
3. render()
4. componentDidMount()

### consturctor()

'생성자 함수'  가장 먼저 실행되는 함수로 초기 state를 설정합니다. constructor 메서드 내부에 반드시 super 함수를 호출해야 합니다.  super 함수를 호출해야만 React.Component 클래스의 constructor 메서드가 호출됩니다. 따라서 super 함수를 호출하지 않을 시 컴포넌트가 제대로 동작하지 않게 됩니다.

### getDerivedStateFromProps

속성 값을 이용해서 새로운 상태값을 만들어 낼 때 사용한다. getDerivedStateFromProps 는 render() 메서드가 호줄되기 직전에 호출된다. static 메서드이기에 함수 내부에서 this 객체에 접근이 불가능하다. 

getDerivedStateFromProps는 시간에 따라 변하는 속성 값으로부터 상태값을 계산하기 위해 추가되었다고한다. 

### render

컴포넌트 작성 시 반드시 작성해야하는 필수 메서드 render메소드 반환 값에 의해 결정된다. 

수용하는 반환값 목록

- HTML에 정의된 거의 모든 태그
- 문자열과 숫자
- 배열 (이때 각 리액트 요소는 key 속성 값을 가지고 있어야 합니다.)
- null 또는 bool을 반환하면 아무것도 렌더링 되지 않습니다.
- ReactDOM.createPortal()을 사용하여 현재 위치와 관계없는 특정 돔 요소에 렌더링 할 수 있습니다.

### componentDidMount

render 메서드의 첫 번째 반환 값이 실제 돔에 반영된 직후 호출된다. 

componentDidMount는 컴포넌트가 화면에 나타나게 됐을 때 호출 되며 , 즉 render 후에 호출이 됩니다.

**API 호출을 통해 데이터를 가져올 때 적합**

보통 컴포넌트에서 fetch,axios등을 통해 데이터를 받아오는데 사용 합니다.

## Updating

초기화 단계와 소멸 단계 사이에서 반복해서 수행됩니다.  컴포넌트의 속성 값 또는 상태값이 변경되면 호출됩니다.

1. static getDerivedStateFromProps()
2. shouldComponentUpdate()
3. render()
4. getSnapshotBeforeUpdate()
5. componentDidUpdate()

### shouldComponentUpdate(nextProps, nextState)

성능 최적화를 위해 존재합니다.
변수의 비교를 통해 변경된 내용이 없다면 업데이트 라이프사이클을 끝냄으로써 불필요한 연산을 줄일 수 있습니다 

컴포넌트 업데이트 직전에 호출되는 메소드 입니다.
**stata, props**가 변경 되었을 때 리렌더링 여부를 return 값으로 정합니다.

### getSnapshotBeforeUpdate

렌더링 결과가 실제 돔에 반영되기 직접에 호출됩니다.
변화를 감지

### componentDidUpdate(prevProps, prevState)

컴포넌트 업데이트 직후에 호출 되는 함수입니다. 

가상 돔이 실제 돔에 반영된 직후 호출 되기 때문에 새롭게 반영된 돔의 상태 값을 빠르게 가져올수 있다.

## UnMounting

1. componentWillUnmount()

컴포넌트가 DOM에서 삭제된 후 실행되는 함수입니다.

그외 
getDerivedStateFromProps / componentDidCatc

메서드는 생명 주기 메서드에서 발생한 예외를 처리하는 메서드입니다.

### static getDerivedStateFromProps(nextProps, prevState)

`getDerivedStateFromProps`는 `componentWillReceiveProps`의 대체 역할로 ,`props`로 받아온 것을 `state`에 넣어주고 싶을때 사용합니다.여기선 `state`값을 변경하고 싶으면`setState`를 사용하는 것이 아닌 `return`을 사용 해야 합니다. `null`을 반환하게 되면 아무 일도 발생하지 않습니다.

# 요약

최초 : constructor ⇒ getDerivedStateFromProps ⇒ componentDidMount

업데이트 : getDerivedStateFromProps ⇒ componentDidUpdate

언마운트 : componentWillUnmount

출처 : [https://ooeunz.tistory.com/138](https://ooeunz.tistory.com/138)

[https://ko.reactjs.org/docs/state-and-lifecycle.html](https://ko.reactjs.org/docs/state-and-lifecycle.html)

[https://velog.io/@st2702/React-Lifecycle-생명주기#컴포넌트-업데이트](https://velog.io/@st2702/React-Lifecycle-%EC%83%9D%EB%AA%85%EC%A3%BC%EA%B8%B0#%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EC%97%85%EB%8D%B0%EC%9D%B4%ED%8A%B8)

## Hooks

Hook에서는 useEffet()가 위 생명주기 함수들을 대체

- useEffect는 기본적으로 을 모두 합니다.

    **componentDidMount, componentDidUpdate, componentWillUnmount, getDerivedStateFromProps의 역할**

- 때문에 위 코드는 1) 컴포넌트가 마운트 된 후, 2) 컴포넌트가 업데이트되고 난 후 3) 컴포넌트가 언마운트 되기 전 모두 실행됩니다.

useEffect는 아래와 같이 2가지의 인수를 받습니다. 하나는 useEffect가 실행할 함수이며, 두 번째는 이 함수를 실행시킬 조건입니다.

```jsx
useEffect(<function>, <array>);
useEffect(()=>{
	console.log("mount");     
}, [])

useEffect(()=>{
	console.log("ComponentWillUnmount");     
})
```

이 배열을 빈 배열로 전달하면 useEffect는 컴포넌트 마운트시에만 실행

배열에 state가 있으면 state가 변화할때만