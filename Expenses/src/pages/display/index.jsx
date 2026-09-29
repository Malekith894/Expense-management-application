import first_page from '../../assets/first_page.png'
import styles from "./display.module.css";

function Display(){


    return(
        <div className="bg-blue-100 h-screen flex-1 flex-col items-center justify-center">
            <div className={styles.wrapper}>
                <img className={styles.image} src={first_page} alt='app image' />
                <div className={styles.intro}>
                    <h1> Welcome to expensify! </h1>
                    <h2> here you can track your expenses and manage your income</h2>
                </div>
            </div>
        </div>
    )
}

export default Display;