import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import toast from "react-hot-toast"

export default function LoginPage(){

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const navigate = useNavigate()

        async function login(){
          try{
           const response= await axios.post(import.meta.env.VITE_API_URL + "/users/login",
                {
                    email:email,
                    password:password
                }
            )
            console.log(response)
            toast.success("Login Successfull")
          if(response.data.role=="admin"){

            navigate("/admin/")

          }else{
            //redirect to home page

          }
                
        }catch(error){
                    console.log(error)
                    toast.error("Login failed")
        }}
            
        

    return(
        <div className="w-full h-full bg-[url('/background.jpg')] bg-cover no-repeat flex justify-center items-center">
            <div className="w-[50%] h-full flex justify-center items-center">
                <img src="/logo.png" className="w-[300px] h-[300px] object-cover"/>
                <h1 className="text-4xl font-bold mt-5 text-white">New Tech Computers</h1>
                </div>
            
            
           
                <div className="backdrop-blur-md w-[450px] h-[600px] shadow-2xl rounded-lg flex-col justify-center">
                 <input 
                 type="email" 
                 placeholder="Email" 
                 onChange={
                    (e)=>{
                       setEmail(e.target.value)
                      
                    }
                 }
                 className="m-5 p-3 w-[90%] h-[50px] rounded-lg border border-secondary outline-none " />
                  
                  <input 
                  type="password" 
                  placeholder="Password" 
                  className="m-5 p-3 w-[90%] h-[50px] rounded-lg border border-secondary outline-none text-white"
                   onChange={
                    (e)=>{
                       setPassword(e.target.value)
                      
                    }
                 }
              />
                  <p className="w-full text-right text-white pr-10">Forgot password?<Link to="/forgot-password" className="text-accent">Reset</Link></p>

                  <button onClick ={login} className="m-5 p-3 w-[90%] h-[50px] bg-accent rounded-lg text-white font-bold">Login</button>
                  <button className="m-5 p-3 w-[90%] h-[50px] border border-accent rounded-lg text-white font-bold">Login with google</button>
                  <p className="w-full text-right pr-10">Don't Have an Account?{" "}<Link to="/register" className="text-accent">Register</Link></p>

            </div>
       </div>
    )
}