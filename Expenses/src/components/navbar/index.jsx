import { AiTwotoneEuroCircle } from "react-icons/ai";
import { CiLogin } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import styles from './navbar.module.css'
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <div className={styles.wrapper}>
            <div className="flex flex-row ">
                <AiTwotoneEuroCircle size={25} color="green"/>
                <p className="text-green-400">Expensify</p>
            </div>
            <div className="flex flex-row justify-center gap-3">
                <Link to='/'>Dashboard</Link>
                <Link to='/Transaction'>Transaction</Link>
            </div>
            <div>
                <Link to='/Login'>
                    <CiLogin size={25}/>
                </Link>
            </div>
        </div>

    )
}

export default Navbar;