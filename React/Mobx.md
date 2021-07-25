# Mobx

MobX는 전역 상태 관리 라이브러리다. 모든 상태변화를 일어나는 부분을 자동 추적해주는 역할을 한다. Redux와 주로 비교 되고는 한다.

## 특징

- React에 종속적인 라이브러리가 아님
- 아키텍처나 상태 컨테이너가 아닌 라이브러리
- redux와 다르게 store에 제한이 없음
- 또한 redux에서 해줘야했던 action 선언, connect, mapStateToProps, mapDispatchToProps등 번거로운 작업들은 데코레이터로 간단하게 대체
- observable을 기본적으로 사용하고 있음
- Mobx는 절대적으로 필요한 경우에만 state 변경
- Typescript를 기반으로 만들어짐

## 핵심개념

- `observable`: 추적 가능한 state 정의
- `action`: state를 변경하는 메소드
- `computed`: state와 캐시로부터 새로운 결과를 반환

### **observable**

observable은 `makeObservable`, `makeAutoObservable` 그리고 `observable` 이 세 가지가 있으며, 모두 추적 가능한 상태의 state로 만들어준다.

`makeObservable`은 주로 **class**의 **this**와 많이 사용된다.

`makeAutoObservable`은 `makeObservable`와 거의 비슷하지만, class에서 super나 subclassed가 있을 경우 사용할 수 없다.

`make(Auto)Observable`와 `observable`의 가장 큰 차이점은 전자는 들어온 인자로 들어온 object를 바로 변경하지만, 후자는 클론을 하고 observable하게 만든다는 점이다. 또한 `observable`는 Proxy object를 생성한다. (추후 보완..ㅠㅠ) 따라서 공식 문서에서도 `make(Auto)Observable` 사용을 권장하고 있다.

### **action**

action은 state를 변경하는 것을 뜻한다. `makeObservable`을 사용하면 action을 따로 작성해줘야 하지만, `makeAutoObservable`은 이를 대신해준다. 밑에 코드에서 두 가지 방식 모두 사용해 볼 것이다.

### **computed**

computed values(계산된 값)는 다른 observable들에서 어떠한 정보를 도출하는데 사용할 수 있다. 이렇게만 봐서는 뭔지 모를 수 있는데 밑의 예시를 통해 같이 살펴보자.

## 장점

- **객체지향적이다.**
  Es6에서 추가된 이름뿐인 class가 아닌 객체지향적으로 사용하고 개발하는 것을 권장.
- **서버개발자**들에게 **친숙한 아키텍처**
- **데코레이터**
  Decorator는 Mobx의 구조를 이루는 것 중 하나라기보다는 일종의 문법적 설탕입니다. Decorator를 사용하여 적은 양의 코드로 store를 컴포넌트에 주입할 수 있고, 감시할 대상 state를 설정할 수도 있습니다.
- **캡슐화**
  Mobx Configuration 설정으로 State를 오직 메소드를 통하여 변경할 수 있도록 Private하게 관리 할 수 있다.

자바스크립트는 접근제어자를 제공하지 않아 데이터 핸들링 비즈니스 로직이 퍼져버리고 사이드 이펙트가 발생할 확률이 높고 관리하지 않으면 번잡스럽 코드가 생산되기 쉽다.

    하지만 접근제어자가 없다고 해도 캡슐화를 구현할 수 있는 방법들이 있긴하지만 잘 활용되어 지지는 않습니다.

    Mobx는 Configuration에서 옵션 한줄로 state의 변경은 해당 클래스의 메소드를 통해서만 변경할 수 있도록 할 수 있고

    도메인 모델간의 message를 통한 상호작용 코드 패턴을 유지해 나갈 수 있도록 해줍니다.

- 불변성 유지를 해주지 않아도된다.

## **redux와 mobx 차이**

### **redux**

- 리엑트스러움 - 불변성 유지가 중요
- flux(먼저 보낸 택배가 먼저 배송지에 도착해야 한다는 규제) 아키텍처를 따름
- 단일 스토어, 함수형 프로그래밍, 미들웨어
- 비동기를 위해 redux-thunk, redux-saga, redux-toolkit 등의 미들웨어가 필수
- action, reducer, dispatch…

### **mobX**

- 객체지향적
- 단일스토어를 강제하지 않음
- 불변성 신경안써도 내부적으로 처리해줌
- 몇가지 규칙인 데코레이터 사용
- 리스트를 렌더링 할 땐 리스트 내용 외의 값이 props 로 들어가는것을 방지하기

## Mobx데이터 흐름

![Mobx/Untitled.png](Mobx%206517361b25fa45b39c86618e1dfd0486/Untitled.png)

[https://ko.mobx.js.org/README.html](https://ko.mobx.js.org/README.html)

### 참고사항

_Mobx의 데코레이터를 사용하기 위해서는 CRA가 지원이 안돼서 따로 설정을 해줘야 한다._

출처

[https://kyounghwan01.github.io/blog/React/mobx/basic/#mobx-overview](https://kyounghwan01.github.io/blog/React/mobx/basic/#mobx-overview)

[https://jeffgukang.github.io/react-native-tutorial/docs/state-tutorial/mobx-tutorial/02-what-is-mobx/what-is-mobx-kr.html](https://jeffgukang.github.io/react-native-tutorial/docs/state-tutorial/mobx-tutorial/02-what-is-mobx/what-is-mobx-kr.html)

[https://www.howdy-mj.me/mobx/mobx6-intro/](https://www.howdy-mj.me/mobx/mobx6-intro/)

[https://techblog.woowahan.com/2599/](https://techblog.woowahan.com/2599/)

[https://velog.io/@dksgyals1/Flux-그리고-Redux와-Mobx](https://velog.io/@dksgyals1/Flux-%EA%B7%B8%EB%A6%AC%EA%B3%A0-Redux%EC%99%80-Mobx)

[https://velog.io/@dongha1992/Mobx-일단-혼내보기-1](https://velog.io/@dongha1992/Mobx-%EC%9D%BC%EB%8B%A8-%ED%98%BC%EB%82%B4%EB%B3%B4%EA%B8%B0-1)
