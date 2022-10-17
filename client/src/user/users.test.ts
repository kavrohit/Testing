import { resetClipboardStubOnView } from "@testing-library/user-event/dist/types/utils";
import { setDefaultResultOrder } from "dns";
import {useState,useEffect} from "react"

export const Users = () =>{
  const[user,setUsers] = useState<string[]>([]);
  const[error,setError] = useState<string|null>(null);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typeicode.com/users')
    .then((res)=>res.json())
    .then((data)=>setUsers(data.map((user:{name:string})=>user.name)))
    .catch(() => setError('Error'));
  },[])

}