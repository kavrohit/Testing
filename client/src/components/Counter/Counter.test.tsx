import {render,screen} from '@testing-library/react'
import  user from '@testing-library/user-event';
import Counter from './Counter'

describe('counter test',()=>{
 
  test('renders correctly',() => {
    render(<Counter/>)
    const countElement = screen.getByRole('heading');
    expect(countElement).toBeInTheDocument();

    const IncrementButton = screen.getByRole('button',{
      name:"Increment"
    })
    expect(IncrementButton).toBeInTheDocument();
  })
  
  test("renders a count of 0",()=>{
    render(<Counter/>)
    const countElement = screen.getByRole('heading');
    expect(countElement).toHaveTextContent('0');
  })
  test('renders a count of 1 after cliking the increment button',async() => {
    user.setup();
    render(<Counter/>)
    const IncrementButton = screen.getByRole('button',{
      name:'Increment',
    })
    await user.click(IncrementButton);
    const countElement = screen.getByRole('heading');
    expect(countElement).toHaveTextContent('1');
  })

  test('renders a count of 10 after clicking the set button',async() => {
    user.setup()
    render(<Counter/>)
    const ammountInput = screen.getByRole('spinbutton');
    await user.type(ammountInput,'10');
    expect(ammountInput).toHaveValue(10)
    const ButtonElement = screen.getByRole('button',{
      name:'Set'
    })
    await user.click(ButtonElement);
    
    const countElement = screen.getByRole('heading');
    expect(countElement).toHaveTextContent('10');

  })

  test('elements are focused in the right order',async()=>{
    user.setup()
    render(<Counter/>)
    const ammountInput = screen.getByRole('spinbutton');
    const incrementElement = screen.getByRole('button', {  name: /increment/i});
    const setElement = screen.getByRole('button', {  name: /set/i});
    
    await user.tab()
    expect(incrementElement).toHaveFocus();

    await user.tab()
    expect(ammountInput).toHaveFocus();
    await user.tab()
    expect(setElement).toHaveFocus();
    
     
    
  })

})