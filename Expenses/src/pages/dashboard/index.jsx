import { BsWallet2 } from "react-icons/bs";
import styles from './board.module.css';
import { useContext, useEffect, useState } from "react";
import { Usercontext } from "../../context/userinfo";
import { Calcontext } from "../../context/calculation";
import {PieChart,Pie,Cell,Tooltip,Legend,ResponsiveContainer,} from "recharts";


function Dashboard(){

    const {info,setinfo}=useContext(Usercontext);
    const {cal,setcal}=useContext(Calcontext);
    
    const {income,expense}=cal.reduce(function(total,item){
        
        if(item.transfer=="income"){
            total.income+=Number(item.price);
        } else{
            total.expense+=Number(item.price);
        }

        return total;
    },{income:0,expense:0})

    const {expensecat,incomecat}=cal.reduce(function(acc,item){
        const category=item.category;
        const price=Number(item.price);

        if(item.transfer=="expense"){

            if(!acc.expensecat[category]){
                acc.expensecat[category]=0;
            }
    
            acc.expensecat[category]+=price;
        } else if(item.transfer=="income"){
            
            if(!acc.incomecat[category]){
                acc.incomecat[category]=0;
            }
    
            acc.incomecat[category]+=price;
        }

        return acc
    },{expensecat:{},incomecat:{}});

    const pieData=Object.entries(expensecat).map(function([category,price]){
        return(
            {name:category,
             value:price
            }
        )
    })
    console.log(pieData)
    return(
            <div className={styles.total_content}>
                <ResponsiveContainer width="50%" height={100}>
                <PieChart>
                    <Pie data={pieData} dataKey="value"nameKey="name"outerRadius={120}/>
                    <Tooltip/>
                    <Legend/>
                </PieChart>

                </ResponsiveContainer>
                <div className={styles.abstract}>
                <div className="h-[150px] w-[400px] rounded-xl bg-amber-100 rounded-xl flex flex-col justify-evenly">
                    <h2 className="font-bold pr-5">Total Balance: ${income-expense}</h2>
                    <div className="flex flex-row items-center justify-center gap-12">
                            <div className="flex flex-row items-center gap-1">
                                <BsWallet2 size={40} color="green"/>
                                <div className="flex flex-col items-start">
                                    <p className="text-xs">${income}</p>
                                    <label className="text-xs">Total income</label>
                                </div>
                            </div>
                            <div>|</div>
                            <div className="flex flex-row items-center gap-1">
                                <BsWallet2 size={40} color="red"/>
                                <div className="flex flex-col items-start">
                                    <p className="text-xs ">${expense}</p>
                                    <label className="text-xs">Total expense</label>
                                </div>
                            </div>
                        </div>
                </div>
                </div>
                <div className={styles.user}>
                    <div className={styles.userinfo}>
                        <div className="flex flex-col gap-2 text-justify pl-4">
                            <h1 className="text-xl">Profile information</h1>
                            <div >
                                <h1>Hello {info.username}</h1>
                                <h3>you can use the transaction part to enter your income and expenses.</h3>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 pb-4.5 text-justify pl-4">
                            <h4>Phone number: {info.phone}</h4>
                            <h4>Email:{info.email}</h4>
                            <h4>Location: {info.country}</h4>
                        </div>
                    </div>
                </div>
                <div className={styles.money}>

                </div>
            </div> 
    )
};

export default Dashboard;