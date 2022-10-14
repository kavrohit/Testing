import {screen,render} from "@testing-library/react"
import { Skills } from "./Skills"


describe('Skills',()=>{
  const skills =["HTML","JavaScript","CSS"];

  test('renders correctly',()=>{
    render(<Skills skills={skills}/>)
    const listElement = screen.getAllByRole('list')
  })


})