import logo from './logo.svg';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from './component/Box';
import './App.css';

function App() { // react redux => redux가 react에 잘 적용해줄 수 있게 해주는 패키지npm install react-redux
 
  const count = useSelector(state=>state.count)
  let id = useSelector(state => state.id)
  let password = useSelector(state => state.password)
  const dispatch = useDispatch()

  const increase = () => { // action은 object형태 그런데 룰이 존재 반드시 type과 payload라는 키가 있어야 함.
    // type은 action의 이름
    dispatch({type: "INCREMENT", payload:{num:5} })
      
  }

  const login=()=> {
    dispatch({type: "LOGIN", payload: {id : "dong", password :"123"}})
  }

  const decrease=() =>{
    dispatch({type : "DECREMENT", payload:{num:-5}})
  }
  
  return (
    <div>
      <h1>{id}, {password}</h1>
      <h1>{count}</h1>
      <button onClick={increase}>증가!</button>
      <button onClick={login}>Login</button>
      <button onClick={decrease}>감소!</button>
      <Box />
    </div>
  );
}

export default App;
