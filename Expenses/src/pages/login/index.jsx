import * as yup from "yup";
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup";

function Login(){

    const schema=yup.object({
        username:yup.string().required().min(3),
        password:yup.string().required().min(8).matches(/\d/,"password must contain a number"),
    })

    const{register,handleSubmit,formState:{errors}}=useForm({resolver:yupResolver(schema)})
    function onSubmit(values){
        console.log({values,errors})
    }

    return(
        <div className="h-screen w-full flex flex-col items-center justify-center ">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col bg-gray-200 w-[400px] h-[350px] rounded-2xl justify-evenly p-4">
                        <h2>Manage your income better with Expensify</h2>
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
                                <button className="w-[80px] h-[50px] bg-amber-200 rounded-xl">Login</button>
                            </div>
                        </div>
                    </div>
                </form>
        </div>
    )
}


export default Login;