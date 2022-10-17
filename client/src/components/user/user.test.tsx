import {render, screen} from "@testing-library/react"
import {rest} from 'msw'
import { server } from "../../mocks/server";

import { Users } from "./users"

describe("Users",() =>{
  test("renders correctly",()=>{
    render(<Users/>);
    const textElement = screen.getByRole("heading",{
      name:"Users"
    });
    expect(textElement).toBeInTheDocument();
  })

  test('renders users',async()=>{
    render(<Users/>)
    const users = await screen.findAllByRole('listitem');
    expect(users).toHaveLength(10);
  })
  
  test('error handling',()=>{
    server.use(
      rest.get('https://jsonplaceholder.typeicode.com/users',(req,res,ctx) =>{
        return res(ctx.status(500))
      })
    );
    render(<Users/>);
  })
})