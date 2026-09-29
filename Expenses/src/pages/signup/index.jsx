import styles from './signup.module.css'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"
import { useContext } from 'react'
import { Authcontext } from '../../context/logicon'
import { useNavigate } from 'react-router-dom';


function Signup(){

    const {auth,setauth}=useContext(Authcontext);
    const navigate=useNavigate();
    const schema=yup.object({
        username:yup.string().required().min(6).max(15),
        password:yup.string().required().min(8),
        country:yup.string().required(),
        phone:yup.string().required().min(13),
        email:yup.string().required().email()
    })

    const {register,handleSubmit,formState:{errors}}=useForm({resolver:yupResolver(schema)})

    function onsubmit(values){
        console.log({values,errors})
        setauth(true)
        navigate("/")

    };
    

    return(
        <div className=" bg-amber-100 flex-1 flex items-center justify-center">
            <form onSubmit={handleSubmit(onsubmit)}>
            <div className={styles.wrapper}>
                <h2>Welcome to Expensify<br></br> you can now trail where your money goes!</h2>
                
                <h3></h3>
                <div className='flex flex-col items-center m-5'>
                    <label className='pr-38' htmlFor='username'>Username</label>
                    <input className='pl-1 border rounded-[6px] w-[250px]' {...register("username")} id='username'/>
                    {errors.username && <span className='text-red-600'>{errors.username.message}</span>}
                </div>
                <div className='flex flex-col items-center m-5'>
                    <label className='pr-38' htmlFor='password'>Password</label>
                    <input className='pl-1 border rounded-[6px] w-[250px]' {...register("password")} id='password'/>
                    {errors.password && <span className='text-red-600'>{errors.password.message}</span>}
                </div>
                <div className='flex flex-col items-center m-5'>
                    <label className='pr-40' htmlFor='country'>Country</label>
                    <input className='pl-1 border rounded-[6px] w-[250px]' {...register("country")} id='country'/>
                    {errors.country && <span className='text-red-600'>{errors.country.message}</span>}
                </div>
                <div className='flex flex-col items-center m-5'>
                    <label className='pr-28' htmlFor='phone'>Phone number</label>
                    <input className='pl-1 border rounded-[6px] w-[250px]' {...register("phone")} id='phone'/>
                    {errors.phone && <span className='text-red-600'>please enter a valid Phone enumber</span>}
                </div>
                <div className='flex flex-col items-center m-5'>
                    <label className='pr-44' htmlFor='email'>Email</label>
                    <input className='pl-1 border rounded-[6px] w-[250px]' {...register("email")} id='email'/>
                    {errors.email && <span className='text-red-600'>{errors.email.message}</span>}
                </div>
            </div>
            <button type='submit' className='m-2 text-gray-50 rounded-xl w-[90px] h-[40px] bg-amber-700'>Submit</button>
            </form>
        </div>
    )
}

export default Signup;