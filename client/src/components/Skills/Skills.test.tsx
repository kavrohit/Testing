import {screen,render, logRoles} from "@testing-library/react"
import Counter from "../Counter/Counter";
import { Skills } from "./Skills"


describe('Skills',()=>{
  const skills =["HTML","JavaScript","CSS"];

  test('renders correctly',()=>{
    render(<Skills skills={skills}/>)
    const listElement = screen.getByRole('list');
    expect(listElement).toBeInTheDocument();
  })
  test('render list of skills',()=>{
    render(<Skills skills = {skills}/>)
    const listItemElements = screen.getAllByRole('listitem');
    expect(listItemElements).toHaveLength(skills.length);
  })
  
  test('renders Login Button',()=>{
    render(<Skills skills={skills}/>)
    const LoginButton = screen.getByRole("button",{
      name:"Login",
    })
    expect(LoginButton).toBeInTheDocument();

  })

  test('start Learning Button us N0t remdered',()=>{
    render(<Skills skills={skills}/>);
    const startLearningButton = screen.queryByRole("button",{
      name:"Start Learning"
    })
    expect(startLearningButton).not.toBeInTheDocument();
  })

  test('start learning button is eventually displayed',async()=>{
   const view = render(<Skills skills={skills}/>)
  //  logRoles(view.container)
    // screen.debug();
    const DisapperingLoginButton = await screen.findByRole("button",{
      name:"Start Learning"
    },{
      timeout:2000,
    })
    // screen.debug();
    expect(DisapperingLoginButton).toBeInTheDocument();
  })
   
 
 
  
})