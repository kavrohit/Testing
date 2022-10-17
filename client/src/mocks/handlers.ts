import {rest} from 'msw'

export const handlers = [
  rest.get('https://jsonplaceholder.typeicode.com/users',(req,res,ctx)=>{
    return res(ctx.status(200),
    ctx.json([{
      name:"J Cole",
    },
    {
      name:"Jack Harlow",
    },
    {
      name:"Kendrcik Lamar",
    }]))
  })
]
