import first_page from '../../assets/first_page.png'
import styles from "./display.module.css";

function Display(){


    return(
        <div className="bg-blue-100 h-screen flex-1 flex-col items-center justify-center">
            <div className={styles.wrapper}>
                <img className={styles.image} src={first_page} alt='app image' />
                <div className={styles.intro}>
                    <div className='w-[400px] h-[300px] rounded-[8px] text-red-600'>
                        <h1 className='text-xl'> Welcome to expensify! </h1>
                        <h2 className='text-xl'> here you can track your income and manage your expenses</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Display;