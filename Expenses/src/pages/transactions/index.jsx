import styles from './trans.module.css'
import { useState } from 'react';



function Transaction(){
    //existing categories
    const expense_category=["Education","Trasnsport","Food",
        ,"Shopping","Internet","Health","Travel"];

    const income_category=["Gift","Salary","Investement"];

    //an object to store user transactions
    const [trans,settrans]=useState({
        date:'',
        category:'',
        price:'',
        transfer:'',
    });

    //these states show the custom category and functions to manipulate them
    
    const [income,setincome]=useState(false);
    
    function handleincome(e){
        if(e.target.value=="Add_category"){
            setincome(true);
            
        } else{
            setincome(false);
            settrans((prev) => ({...prev,category:e.target.value}))
        }
    };

    function handleexception(e){
        settrans((prev)=>({...prev,category:e.target.value}))
    };

    //this is a list to store the rows of our table
    const [row,setrow]=useState([])
    
    function handleclick(){
        if(trans.date && trans.price && trans.category && trans.transfer){
            return setrow((prev) => [...prev,{...trans,...{id:Math.random()*10}}])
        } else{
            alert("please fill in the blanks");
        }
    }

    function handleremove(id){
        setrow(row.filter(function(item){
            return(
                item.id!=id
            )
        }))
    }

    return(
        <div className={styles.container}>
            <div className={styles.sidebar}>

            </div>
            <div className={styles.adding}>
                <div className='flex flex-col w-[500px] h-[230px] gap-2 bg-blue-200 rounded-xl p-2 justify-between'>
                    <div className='flex flex-row justify-center gap-3'>
                        <h2>Add</h2>
                        <input name='transaction' type='radio' id='income' value="income" onChange={(e) => settrans({...trans,transfer:'income'})}></input>
                        <label htmlFor="income">Income</label>
                        <input name='transaction' type='radio' id='expense' value="expense" onChange={(e) => settrans({...trans,transfer:'expense'})}></input>
                        <label htmlFor="expense">Expense</label>
                    </div>
                    
                    <div className='flex flex-row justify-center gap-7'>
                        <div className='flex flex-col items-start'>
                            <label>Date</label>
                            <input type='date' onChange={(e) => settrans({...trans,date:e.target.value})}></input>
                        </div>
                        <div className='flex flex-col items-start'>
                            <label>Price</label>
                            <input className='w-[150px]' placeholder='$100' onChange={(e) => settrans({...trans,price:e.target.value})}></input>
                        </div>
                    </div>
                    <div className='flex flex-row justify-center gap-7'>
                        <div className='flex flex-col items-start center'>
                            <label>Category</label>
                            <select onChange={handleincome}>
                                <option>Select a category</option>
                                <option>Add_category</option>
                                {income_category.map(function(item){
                                    return <option key={item}>{item}</option>
                                })} 
                            </select>
                        </div>
                        { income && (
                            <div className='flex flex-col items-start center '>
                                <label>New category</label>
                                <input type='text' placeholder='Enter new categroy' onChange={handleexception}></input>
                            </div>
                        )
                        }
                        
                    </div>
                    <div>
                        <button className='w-[100px] h-[40px] rounded-xl bg-amber-300' onClick={handleclick}>Add</button>
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
                                {row.map(function(item){
                                    return(
                                        <tr key={item}>
                                            <td className="px-5 py-4 text-left text-sm font-semibold text-gray-500">{item.date}</td>
                                            <td className="px-5 py-4 text-left text-sm font-semibold text-gray-500">{item.category}</td>
                                            <td className="px-5 py-4 text-left text-sm font-semibold text-gray-500">{item.price}</td>
                                            <td className="px-5 py-4 text-left text-sm font-semibold text-gray-500">{item.transfer}</td>
                                            <td className="px-5 py-4 text-left text-sm font-semibold text-gray-500"> 
                                                <button className='w-[100px] h-[40px] rounded-xl bg-amber-300' onClick={()=> handleremove(item.id)}>Remove</button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                            
                        </table>
            </div>
        </div>
    )
}


export default Transaction;