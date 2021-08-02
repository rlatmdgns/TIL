# Union

```tsx
/*
유니온 타입 가장 많이쓰인다. or 로 이해하면 된다.~
발생할 수 있는 케이스 중에 하나만 할당할 수 있을 때 쓴다.
활용도가 높다
*/
type Direction =  "left" | "right" | "up" | "down";

funtction move(direction:Direction){
	console.log(direction)
}
move('right') // 다양한 인자를 받을 수 있어 4개 중 1개 

type tileiSize = 8 | 16 | 32;
const TileSize 16;

// function: login - success, fail
type SuccessState = {
	response : {
		body: string:
	}
}
type FailState = {
	reson: string;
}
type LoginState = SucessState | FailState;
function login(id: string, pw:string): Promise<LoginState> {
	return {
		response : {
			body: string:
		}
	}
}

//printLoginState(state)
//success -> body
//fail -> reason
function printLoginState(state : LoginState){
	if('response' in state){
	console.log(state.response.body)
	}else{
		console.log(state.reason);
	}
} 
```