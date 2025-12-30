
import { Link } from "react-router-dom"
export default function LoginPage(){
    return(
        <div className="w-full h-full bg-[url('/background.jpg')] bg-cover no-repeat flex justify-center items-center">
            <div className="w-[50%] h-full flex justify-center items-center">
                <img src="/logo.png" className="w-[300px] h-[300px] object-cover"/>
                <h1 className="text-4xl font-bold mt-5 text-white">New Tech Computers</h1>
                </div>
            
            
           
                <div className="backdrop-blur-md w-[450px] h-[600px] shadow-2xl rounded-lg flex-col justify-center">
                 <input type="email" placeholder="Email" className="m-5 p-3 w-[90%] h-[50px] rounded-lg border border-secondary outline-none " />
                  <input type="password" placeholder="Password" className="m-5 p-3 w-[90%] h-[50px] rounded-lg border border-secondary outline-none text-white"/>
                  <p className="w-full text-right text-white pr-10">Forgot password?<Link to="/forgot-password" className="text-accent">Reset</Link></p>

                  <button className="m-5 p-3 w-[90%] h-[50px] bg-accent rounded-lg text-white font-bold">Login</button>
                  <button className="m-5 p-3 w-[90%] h-[50px] border border-accent rounded-lg text-white font-bold">Login with google</button>
                  <p className="w-full text-right pr-10">Don't Have an Account?{" "}<Link to="/register" className="text-accent">Register</Link></p>

            </div>
       </div>
    )
}