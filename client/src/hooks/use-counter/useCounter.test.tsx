import { renderHook ,act} from '@testing-library/react'
import {useCounter} from './useCounter';

describe ('useCounter',()=>{
  test('should render the initial count',()=>{
   const { result } = renderHook(useCounter);
   //current is a property which will contain all the values from custom hooks
   expect(result.current.count).toBe(0)
  });

  test('should accept and render the same initial count',() =>{
    const { result } = renderHook(useCounter, {
      initialProps : {
        initialCount:10
      },
    });
    expect(result.current.count).toBe(10);
  })

  test ('should increment the count',()=>{
    const { result } = renderHook(useCounter);
    act(()=>result.current.increment());
    result.current.increment();
    expect(result.current.count).toBe(1);
  })
  
  test ('should decrement the value',()=>{
    const {result} = renderHook(useCounter);
    act(()=>result.current.decrement());
    expect(result.current.count).toBe(-1);
  })
  
})