# discriminated

```tsx
type SuccessState = {
	result: 'success';
	response : {
		body: string:
	}
}
type FailState = {
	result: 'fail';
	reson: string;
}
type LoginState = SucessState | FailState;
function login(id: string, pw:string): LoginState {
	return {
		result : 'success',
		response : {
			body: string:
		}
	}
}

//printLoginState(state)
//success -> body
//fail -> reason
function printLoginState(state : LoginState){
	if(state.result === "success"){
	console.log(state.response.body)
	}else{
		console.log(state.reason);
	}
} 

```