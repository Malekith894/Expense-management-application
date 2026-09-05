import styles from './trans.module.css'
import { useState } from 'react';



function Transaction(){
    const categories=["Education","Trasnsport","Food","Investement",
        "Salary","Gift","Shopping","Internet","Health","Travel"]

    const [category,setcategory]=useState(false)


    function handlecategory(e){
        if(e.target.value=="Add_category"){
            setcategory(true);
        } else{
            setcategory(false)
        }
    };

   

    return(
        <div className={styles.container}>
            <div className={styles.sidebar}>

            </div>
            <div className={styles.adding}>
                <div className='flex flex-col w-[500px] h-[230px] gap-2 bg-blue-200 rounded-xl p-2 justify-between'>
                    <h2>Add income</h2>
                    <div className='flex flex-row justify-center gap-7'>
                        <div className='flex flex-col items-start'>
                            <label>Date</label>
                            <input type='date'></input>
                        </div>
                        <div className='flex flex-col items-start'>
                            <label>Price</label>
                            <input className='w-[150px]' placeholder='$100'></input>
                        </div>
                    </div>
                    <div className='flex flex-row justify-center gap-7'>
                        <div className='flex flex-col items-start center'>
                            <label>Category</label>
                            <select onChange={handlecategory}>
                                <option>Select a category</option>
                                <option>Add_category</option>
                                {categories.map(function(item){
                                    return <option key={item}>{item}</option>
                                })} 
                            </select>
                        </div>
                        { category && (
                            <div className='flex flex-col items-start center '>
                                <label>New category</label>
                                <input type='text' placeholder='Enter new categroy'></input>
                            </div>
                        )
                        }
                        
                    </div>
                    <div>
                        <button className='w-[100px] h-[40px] rounded-xl bg-amber-300'>Add</button>
                    </div>
                </div>
                <div className='flex flex-col w-[500px] h-[230px] bg-blue-200 rounded-xl p-3 justify-between'>
                    <h2>Add expenses</h2>
                    <div className='flex flex-row justify-center gap-7'>
                        <div className='flex flex-col items-start'>
                            <label>Date</label>
                            <input type='date'></input>
                        </div>
                        <div className='flex flex-col items-start'>
                            <label>Price</label>
                            <input className='w-[150px]' placeholder='$100'></input>
                        </div>
                    </div>
                    <div className='flex flex-row justify-center gap-7'>   
                        <div className='flex flex-col items-start '>
                            <label>Category</label>
                            <select onChange={handlecategory}>
                                <option>Select a category</option>
                                <option>Add_category</option>
                                {categories.map(function(item){
                                    return <option key={item}>{item}</option>
                                })}
                            </select>
                        </div>
                        { category && (
                            <div className='flex flex-col items-start center '>
                                <label>New category</label>
                                <input type='text' placeholder='Enter new categroy'></input>
                            </div>
                        )
                        }
                    </div>
                    <div>
                        <button className='w-[100px] h-[40px] rounded-xl bg-amber-300'>Add</button>
                    </div>
                </div>
            </div>
            <div className={styles.main}>
                        <table className='w-full '>
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="px-5 py-4 text-left text-sm font-semibold text-gray-700">
                                        Date
                                    </th>
                                    <th className="px-5 py-4 text-left text-sm font-semibold text-gray-700">
                                        Category
                                    </th>
                                    <th className="px-5 py-4 text-left text-sm font-semibold text-gray-700">
                                        Price
                                    </th>
                                    <th className="px-5 py-4 text-left text-sm font-semibold text-gray-700">
                                        transfer shape
                                    </th>
                                    <th className="px-5 py-4 text-left text-sm font-semibold text-gray-700">
                                        
                                    </th>
                                </tr>
                            </thead>
                            <tbody>

                            </tbody>
                            
                        </table>
            </div>
        </div>
    )
}


export default Transaction;