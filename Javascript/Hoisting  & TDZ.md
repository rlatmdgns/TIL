# Hoisting(호이스팅)

부끄럽게도 지금까지 필자는 let과 const는 호이스팅이 되지 않는다고 생각하고 있었다. 면접을 통하여 알게되었으며, 면접을 보고 정말 자극을 받았고 좋은 피드백이었다.

# Hoisting ?

함수 안에 있는 선언들을 모두 끌어 올려서 해당 함수 유효 스코프의 최상단에 선언 하는 것을 말합니다.

변수가 끌어올려 지는 현상을 '호이스팅(hoisting)'이라고 부릅니다

자바스크립트는 ES6의 let, const를 포함하여 모든 선언(var, let, const, function, function*, class)을 호이스팅(Hoisting)한다.

예를 들어, 호이스팅을 변수 및 함수 선언이 물리적으로 작성한 코드의 상단으로 옮겨지는 것으로 가르치지만, 실제로는 그렇지 않습니다. 변수 및 함수 선언은 컴파일 단계에서 메모리에 저장되지만, 코드에서 입력한 위치와 정확히 일치한 곳에 있습니다.

## 변수가 어떻게 생성되며 호이스팅은 어떻게 이루어지는지 과정

- **선언 단계(Declaration phase)**

    변수 객체(Variable Object)에 변수를 등록한다. 이 변수 객체는 스코프가 참조하는 대상이 된다.

- **초기화 단계(Initialization phase)**

    변수 객체(Variable Object)에 등록된 변수를 메모리에 할당한다. 이 단계에서 변수는 undefined로 초기화된다.

- **할당 단계(Assignment phase)**

    undefined로 초기화된 변수에 실제값을 할당한다.

1. var로 선언된 변수는 선언 단계와 초기화 단계가 한번에 이루어진다.
2. 스코프에 변수가 등록되고 변수는 메모리 공간을 확보한 후 undefined로 초기화.
3. 따라서 변수 선언분 이전에 변수에 접근하여도 변수는 존재하기 때문에 에러가 발생하지 않고 undefined를 반환 . 이를 호이스팅

var키워드를 사용하면 문제점.

1. [함수 레벨 스코프(Function-level scope)](https://poiemaweb.com/js-scope#3-function-scope)
    - 전역 변수의 남발
    - for loop 초기화식에서 사용한 변수를 for loop 외부 또는 전역에서 참조할 수 있다.
2. var 키워드 생략 허용
    - 의도하지 않은 변수의 전역화
3. 중복 선언 허용
    - 의도하지 않은 변수값 변경
4. 변수 호이스팅
    - 변수를 선언하기 전에 참조가 가능하다

---

## [ES6] let & const

var 키워드로 선언된 변수와는 달리 let 키워드로 선언된 변수를 선언문 이전에 참조하면 참조 에러(ReferenceError)가 발생한다.

let 키워드로 선언된 변수는 스코프의 시작에서 변수의 선언까지 **일시적 사각지대**(Temporal Dead Zone; TDZ)에 빠지기 때문이다.

let과 const 키워드 자체로 모두 호이스팅이 이루어지고 있다. 위와 사항때문에 에러가 발생하는 것이다.

## TDZ?

> TDZ 시맨틱은 선언 전에 변수에 접근하는 것을 금지한다. TDZ는 징계를 내린다: 변수 선언 전에 어떤 것도 사용하지 않는다.

let으로 선언된 변수는 var 키워드와 다르게 선언단계와 초기화 단계가 분리되어 진행된다.

그러므로 실행컨텍스트에 변수 등록을 했지만, 메모리가 할당되지 않아 접근할 수 없어. 참조에러가 발생하는 것이다.

function 키워드는 3단계를 동시에 진행.

참고자료 

[Data type & Variable | PoiemaWeb](https://poiemaweb.com/js-data-type-variable)

[TDZ을 모른 채 자바스크립트 변수를 사용하지 말라](https://ui.toast.com/weekly-pick/ko_20191014?fbclid=IwAR3fiR4wiv8kszL6Fz2KqwHpv-bTL8tNHElRN0q0ky5kpOP5BMqMS0wc-9k)

[TDZ(Temporal Dead Zone)이란?](https://noogoonaa.tistory.com/78)