import first_page from '../../assets/first_page.png'
import styles from "./display.module.css";
import dashboard from '../../assets/dashboard.png'


function Display(){

    return(
        <div className="bg-blue-100 flex flex-1 min-h-screen flex-col items-center justify-center">
            <div className={styles.wrapper}>
                <div className={styles.intro}>
                    <div className='w-[400px] h-[300px] rounded-[8px] text-red-600'>
                        <h1 className='text-xl'> Welcome to expensify! </h1>
                        <h2 className='text-xl'> here you can track your income and manage your expenses</h2>
                    </div>
                    <img className='' src={dashboard}/>
                </div>
                <div className={styles.image}>
                    <img className='h-[95%] w-[100%]' src={first_page}  />
                </div>
            </div>
        </div>
    )
}

export default Display;