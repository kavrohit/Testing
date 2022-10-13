
/**
 * greet should render the text hello and if a name is passed into the 
 * component then it should display hello  by the name 
 * */ 
 import React from 'react';
 import { render, screen } from '@testing-library/react';
 
 import Greet from '../components/Greet/Greet'

 
 describe('greet grouping',() =>{

  it('renders correctly',()=> {
    render(<Greet/>)
    const element = screen.getByText(/hello/i)
    expect(element).toBeInTheDocument();
  
  });
  /**
   * for replicating test.only we can use fit
   * for replecationg tes.skip we can use xit
   *   */
  fit('renders a Name',()=>{
    render(<Greet name = 'Bruce Wayne'/>)
    const element = screen.getByText('Hello Bruce Wayne');
    expect(element).toBeInTheDocument();
  })

})

describe('Nested',() => {
  it('renders a Name',()=>{
    render(<Greet name = 'Bruce Wayne'/>)
    const element = screen.getByText('Hello Bruce Wayne');
    expect(element).toBeInTheDocument();
  })
})