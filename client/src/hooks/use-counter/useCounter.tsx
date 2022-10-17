import {useState} from "react"
import {useCounterProps} from "./useCounter.types"
export const useCounter=({ initialCount= 0 }:useCounterProps={})=>{
  const[count,setCount]= useState(initialCount);
  const increment = () => setCount(count+1);
  const reset=() => setCount(count*0);
  const decrement = () => setCount(count-1);
  return{increment,reset,decrement,count};
};