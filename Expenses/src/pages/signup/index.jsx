import styles from './signup.module.css'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"


function Signup(){

    const schema=yup.object({

    })

    const {register,handleSubmit,formState:{errors}}=useForm({resolver:yupResolver(schema)})


    return(
        <div className=" bg-amber-100 flex-1 flex items-center justify-center">
            <form >
            <div className={styles.wrapper}>
                <h2>Welcome to Expensify<br></br> you can now trail where your money goes!</h2>
                
                <h3></h3>
                <div className='flex flex-col items-center m-5'>
                    <label className='pr-26' htmlFor='username'>Username</label>
                    <input className='border rounded-xl w-[200px]' {...register("username")} id='username'/>
                </div>
                <div className='flex flex-col items-center m-7'>
                    <label className='pr-26' htmlFor='password'>Password</label>
                    <input className='border rounded-xl w-[200px]' {...register("password")} id='password'/>
                </div>
                <div className='flex flex-col items-center m-7'>
                    <label className='pr-28' htmlFor='country'>Country</label>
                    <input className='border rounded-xl w-[200px]' {...register("country")} id='country'/>
                </div>
                <div className='flex flex-col items-center m-7'>
                    <label className='pr-16' htmlFor='phone'>Phone number</label>
                    <input className='border rounded-xl w-[200px]' {...register("phone")} id='phone'/>
                </div>
                <div className='flex flex-col items-center m-7'>
                    <label className='pr-32' htmlFor='email'>Email</label>
                    <input className='border rounded-xl w-[200px]' {...register("email")} id='email'/>
                </div>
            </div>
            </form>
        </div>
    )
}

export default Signup;