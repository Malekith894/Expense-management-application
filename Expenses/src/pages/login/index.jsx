import * as yup from "yup";
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup";
import { Authcontext } from "../../context/logicon";
import { useContext } from "react";
import { Link } from "react-router-dom";

function Login(){

    const {auth,setauth}=useContext(Authcontext)

    const schema=yup.object({
        username:yup.string().required().min(3),
        password:yup.string().required().min(8).matches(/\d/,"password must contain a number"),
    })

    const{register,handleSubmit,formState:{errors}}=useForm({resolver:yupResolver(schema)})
    function onSubmit(values){
        console.log({values,errors})
    }

    function handlelogin(){
        if(Object.keys(errors).length==0){
            setauth(true)
        } 
    }

    return(
        <div className="h-screen w-full flex flex-col items-center justify-center ">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col bg-gray-200 w-[400px] h-[350px] rounded-2xl justify-evenly p-4">
                        <h2 className="text-emerald-500 ">Manage your income better with Expensify</h2>
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col items-center">
                                <label htmlFor="username" className="pr-26">Username</label>
                                <input {...register("username")} id="username" className="p-1  border rounded-xl"/>
                                {errors.username && <span className="text-red-600">{errors.username.message}</span>}
                            </div>
                            <div className="flex flex-col items-center">
                                <label className="pr-26">Password</label>
                                <input {...register("password")} className="p-1 border rounded-xl w-"/>
                                {errors.password && <span className="text-red-600">{errors.password.message}</span>}
                            </div>
                            <div>
                                <button onClick={handlelogin} className="w-[80px] h-[50px] bg-emerald-300 rounded-xl">Login</button>
                            </div>
                        </div>
                    </div>
                </form>
        </div>
    )
}


export default Login;