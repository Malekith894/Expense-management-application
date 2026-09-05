import { BsWallet2 } from "react-icons/bs";
import styles from './board.module.css';

function Dashboard(){
    return(
        <div className="flex flex-col items-center gap-3 w-full h-full justify-center mt-3">
            <div className={styles.total_content}>
                <h2 className="font-bold">Total Balance</h2>
                <div className="flex flex-row items-center gap-12">
                    <div className="flex flex-row items-center gap-1">
                        <BsWallet2 size={40} color="green"/>
                        <div className="flex flex-col items-start">
                            <p className="text-xs">$</p>
                            <label className="text-xs">Total income</label>
                        </div>
                    </div>
                    <div>|</div>
                    <div className="flex flex-row items-center gap-1">
                        <BsWallet2 size={40} color="red"/>
                        <div className="flex flex-col items-start">
                            <p className="text-xs ">$</p>
                            <label className="text-xs">Total expense</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.overview}>
                <div className={styles.boxes}>
                    <div >
                        <label className="pl-3">Categories</label>
                    </div>
                    <div className="border-b max-auto w-full"></div>
                    <div>
                        <label className="pl-3">Overview</label>
                    </div>
                </div>
                <div className={styles.boxes}>
                    <div >
                        <label className="pl-3">Categories</label>
                    </div>
                    <div className="border-b max-auto w-full"></div>
                    <div>
                        <label className="pl-3">Overview</label>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Dashboard;