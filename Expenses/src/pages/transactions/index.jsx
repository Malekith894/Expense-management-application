import styles from './trans.module.css'
import { useState,useReducer } from 'react';


function Transaction(){

    //existing categories
    const income_category=["Gift","Salary","Investement","Education","Trasnsport","Food",
        ,"Shopping","Internet","Health","Travel"];

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
            settrans({...trans,category:e.target.value})
        }
    };

    function handleexception(e){
        settrans({...trans,category:e.target.value})
    };

    //this is a list to store the rows of our table
    const [row,setrow]=useState([])
    
    function handleclick(){
        if(trans.date && trans.price && trans.category && trans.transfer){
            setrow((prev) => [...prev,{...trans,...{id:Math.random()*10}}])
            settrans({price:'',date:'',transfer:'',category:''})
            setincome(false)
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
    };

    //filter states
    const [cat,setcat]=useState("")
    const [minprice,setminprice]=useState(0)
    const [maxprice,setmaxprice]=useState(100000000) 

    const filteredrows=row.filter(function(item){
        if(maxprice.length==0){
            setmaxprice(100000000)
        }
        if(minprice.length==0){
            setminprice(0)
        }
        const pricecheck=Number(item.price)>Number(minprice) && Number(item.price) <Number(maxprice) ;
        const catcheck=item.category.toLowerCase().includes(cat.toLowerCase())
        console.log(maxprice)
        return catcheck && pricecheck;
    })

    

    return(
        <div className={styles.container}>
            <div className={styles.sidebar}>
                <div className={styles.filterbar} >
                    <h2>Search bar</h2>
                        <div className={styles.filters}>
                            <div className='flex flex-col items-start pr-6 gap-2'>
                                <label>Price search</label>
                                <div className='flex flex-col'>
                                    <label>Minimum price</label>
                                    <input type="number" className="rounded-xl border-2 min-range" min="0" max="10000" value={minprice} onChange={(e) => setminprice(e.target.value)} step="1"/>
                                </div>
                                <div className='flex flex-col'>
                                    <label>Maximum price</label>
                                    <input type="number" className="rounded-xl border-2 max-range" min="0" max="10000" value={maxprice} onChange={(e) => setmaxprice(e.target.value)} step="1"/>
                                </div>
                            </div>
                            <div className='flex flex-col items-start pr-3 gap-2'>
                                <label>Category search</label>
                                <input className='w-[140px] rounded-xl pl-1 border-2' type='text' onChange={(e) => setcat(e.target.value)}/>
                            </div>
                    </div>
                </div>
            </div>
            <div className={styles.adding}>
                <div className={styles.trans} >
                    <div className='flex flex-row justify-center gap-3'>
                        <h2>Add</h2>
                        <input name='transaction' type='radio' id='income' value="income" checked={trans.transfer === 'income'} 
                        onChange={(e) => settrans({...trans,transfer:'income'})}></input>
                        <label htmlFor="income">Income</label>
                        <input name='transaction' type='radio' checked={trans.transfer === 'expense'} id='expense' value="expense"
                         onChange={(e) => settrans({...trans,transfer:'expense'})}></input>
                        <label htmlFor="expense">Expense</label>
                    </div>
                    
                    <div className={styles.dateandprice} >
                        <div className='flex flex-col items-start'>
                            <label>Date</label>
                            <input type='date' value={trans.date} onChange={(e) => settrans({...trans,date:e.target.value})}></input>
                        </div>
                        <div className='flex flex-col items-start'>
                            <label>Price</label>
                            <input className='w-[150px]' placeholder='$100' value={trans.price} onChange={(e) => settrans({...trans,price:e.target.value})}></input>
                        </div>
                    </div>
                    <div className='flex flex-row justify-center gap-7 pl-4'>
                        <div className='flex flex-col items-start center'>
                            <label>Category</label>
                            <select value={income ? "Add_category" : trans.category} onChange={handleincome}>
                                <option value="">Select a category</option>
                                <option value="Add_category">Add_category</option>
                                {income_category.map(function(item){
                                    return <option key={item}>{item}</option>
                                })} 
                            </select>
                        </div>
                        { income && (
                            <div className='flex flex-col items-start center '>
                                <label>New category</label>
                                <input type='text' placeholder='Enter new categroy' onChange={handleexception} value={trans.category}></input>
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
                                {filteredrows.map(function(item){
                                    return(
                                        <tr key={item.id}>
                                            <td className="px-5 py-4 text-left text-sm font-semibold text-gray-500">{item.date}</td>
                                            <td className="px-5 py-4 text-left text-sm font-semibold text-gray-500">{item.category}</td>
                                            <td className="px-5 py-4 text-left text-sm font-semibold text-gray-500">${item.price}</td>
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