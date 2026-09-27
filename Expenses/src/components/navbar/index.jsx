import { AiTwotoneEuroCircle } from "react-icons/ai";
import { CiLogin } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import styles from './navbar.module.css'
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Authcontext } from "../../context/logicon";
import { AiOutlineUser } from "react-icons/ai";

function Navbar(){
    const {auth,setauth}=useContext(Authcontext)

    return(
        <div className={styles.wrapper}>
            <div className="flex flex-row ">
                <AiTwotoneEuroCircle size={25} color="green"/>
                <p className="text-green-400">Expensify</p>
            </div>
            <div className="flex flex-row justify-center gap-5">
                <Link to='/'>Dashboard</Link>
                <Link to='/Transaction'>Transaction</Link>
            </div>
            <div>
                {auth==true ? (<AiOutlineUser size={25}/>) :(
                <div className="flex flex-row gap-4"> 
                <Link to='/Signup'>
                 <button className=" rounded-xl w-[70px] h-[35px] text-amber-700 bg-white">Sign up</button>
                </Link>
                 <Link to='/Login'> 
                 <button className=" rounded-xl w-[70px] h-[35px] text-amber-700 bg-white">Login</button> </Link>
                 </div> 
                 )}
            </div>
        </div>

    )
}

export default Navbar;