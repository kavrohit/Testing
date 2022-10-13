
/**
 * greet should render the text hello and if a name is passed into the 
 * component then it should display hello  by the name 
 * */ 
import React from 'react';
import { render, screen } from '@testing-library/react';

import Greet from './Greet';
/** 
 * this is the first test
test('greet', () => {
  render(<Greet />)
  const element = screen.getByText(/hello/i);
  expect(element).toBeInTheDocument();
});
*/

//  test('greet correctly',()=>{
//   render(<Greet/>)
//   const element = screen.getByText(/hello/i)
//   expect(element).toBeInTheDocument();

// })
// /** jest will only pick this test to run
//  * test.skip - jest will skip the test
//  * 
// */
// test.only('greet with the name',()=>{
//   render(<Greet name = 'Bruce Wayne'/>)
//   const element = screen.getByText('Hello Bruce Wayne');
//   expect(element).toBeInTheDocument();
// })

/** Grouping test with jest
 *  
 * 
 */

describe('greet grouping',() =>{

  test('renders correctly',()=> {
    render(<Greet/>)
    const element = screen.getByText(/hello/i)
    expect(element).toBeInTheDocument();
  
  });

  test('renders a Name',()=>{
    render(<Greet name = 'Bruce Wayne'/>)
    const element = screen.getByText('Hello Bruce Wayne');
    expect(element).toBeInTheDocument();
  })

})

describe('Nested',() => {
  test('renders a Name',()=>{
    render(<Greet name = 'Bruce Wayne'/>)
    const element = screen.getByText('Hello Bruce Wayne');
    expect(element).toBeInTheDocument();
  })
})