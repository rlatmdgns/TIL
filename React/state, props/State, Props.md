# State, Props

## **1. State**

**컴포넌트 안에서 우리가 정의한 컴포넌트의 state 오브젝트 입니다.**

컴포넌트 UI를 위한 데이터를 보관하는 오브젝트로, **이 state라는 오브젝트를 통해서 데이터에 업데이트가 발생하면 리액트가 자동적으로 우리가 구현한 render 함수를 호출하죠.** 

![State,%20Props%20c418de58b62f4cffb1e693ad6c8a5544/Untitled.png](State,%20Props%20c418de58b62f4cffb1e693ad6c8a5544/Untitled.png)

## **2. Props**

**컴포넌트 밖에서 주어지는 데이터 입니다.**

컴포넌트 안에서 자체적으로 데이터를 정의해서 사용하는 State와는 다르게, **Props은 컴포넌트 외부에서 데이터를 제공받습니다.** 가장 근본적인 이유는 컴포넌트의 재사용을 높이기 위해서죠 :) 상황에 따라 주어진 데이터를 받아서 그 데이터에 맞게 UI를 보여주기 위해서 사용 되어져요.

아래처럼 부모컴포넌트에서 이렇게 LikeButton 컴포넌트를 사용할때 title, onClick과 같은 아이들을 **인자로 전달해 주면 이 아이들이 props 오브젝트로 묶여서** LikeButton 컴포넌트에 전달되어집니다.

![https://s3.amazonaws.com/thinkific/file_uploads/292401/images/3fb/f4a/03a/1601248661740.jpg](https://s3.amazonaws.com/thinkific/file_uploads/292401/images/3fb/f4a/03a/1601248661740.jpg)

그래서 LikeButton안에서 **this.props.title**, **this.props.onClick**으로 각각 전달된 'Like' 와 'this.handleClick' 함수에 접근 할 수가 있어요 :)