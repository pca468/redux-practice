
let initialState = {
    count : 0,
    id:"",
    password:"",
}

function reducer(state = initialState, action){
     console.log(action);

    //  //if문 사용
    // // if(action.type === "INCREMENT"){
    // //     return {...state, count : state.count + action.payload.num}; // reducer는 항상 state한테 return을 해줘야 한다. 
    //     // +1을 적용한 값을 count에 적용해줘 라는 코드
    //     // ... => 기존 객체내용을 복사해 새로운 객체에 전달 가능
    // }

    //if문 대신 swich 문 사용
    switch(action.type){
        case "INCREMENT":
            return{...state, count: state.count + action.payload.num}
        case "LOGIN" :
            return{...state,
                id: action.payload.id, 
                password: action.payload.password}
        case "DECREMENT":
            return{...state, count: state.count + action.payload.num}
        default:
            return {...state}
        } 


}

export default reducer;