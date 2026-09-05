import { AiTwotoneEuroCircle } from "react-icons/ai";
import { CiLogin } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import styles from './navbar.module.css'


function Navbar(){
    return(
        <div className={styles.wrapper}>
            <div className="flex flex-row ">
                <AiTwotoneEuroCircle size={25} color="green"/>
                <p className="text-green-400">Expensify</p>
            </div>
            <div className="flex flex-row justify-center gap-3">
                <p>Dashboard</p>
                <p>Transaction</p>
            </div>
            <div>
                <CiLogin size={25}/>
            </div>
        </div>

    )
}

export default Navbar;