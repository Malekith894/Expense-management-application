import { BsWallet2 } from "react-icons/bs";
import styles from './board.module.css';
import { useContext, useEffect, useState } from "react";
import { Usercontext } from "../../context/userinfo";
import { Calcontext } from "../../context/calculation";
import {PieChart,Pie,Cell,Tooltip,Legend,ResponsiveContainer,Line,LineChart,XAxis,YAxis,CartesianGrid,Customized} from "recharts";


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

    const linedata=cal.reduce(function(acc,item){
        const date=item.date;
        const price=Number(item.price);

        if(!acc[date]){
            acc[date]={
                date:date,
                income:0,
                expense:0
            };
        }

        if(item.transfer=='income'){
            acc[date].income+=item.price;
        } else if(item.transfer=='expense'){
            acc[date].expense+=item.price;
        }

        return acc;
    },{})

    const chartData = Object.values(linedata).sort(
    (a, b) => new Date(a.date) - new Date(b.date)
    );

    const pieData=Object.entries(expensecat).map(function([category,price]){
        return(
            {name:category,
             value:price
            }
        )
    })
    
    return(
            <div className={styles.total_content}>
                <div className={styles.abstract}>
                <div className="h-[150px] w-[400px] bg-[rgba(222,184,135,0.241)] rounded-xl flex flex-col justify-evenly">
                    <h2 className="font-bold pr-5">Total Balance: ${income-expense}</h2>
                    <div className="flex flex-row items-center justify-center gap-12">
                            <div className="flex flex-row items-center gap-1">
                                <BsWallet2 size={40} color="green"/>
                                <div className="flex flex-col items-start">
                                    <p className="text-xs text-green-700">${income}</p>
                                    <label className="text-xs text-green-700">Total income</label>
                                </div>
                            </div>
                            <div>|</div>
                            <div className="flex flex-row items-center gap-1">
                                <BsWallet2 size={40} color="red"/>
                                <div className="flex flex-col items-start">
                                    <p className="text-xs text-red-600">${expense}</p>
                                    <label className="text-xs text-red-600">Total expense</label>
                                </div>
                            </div>
                        </div>
                </div>
                </div>
                <div className={styles.user}>
                    <div className={styles.userinfo}>
                        <div className="flex flex-col gap-2 text-justify pl-4 ">
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
                    <div className="w-1/2">
                        <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                            <Pie data={pieData} dataKey="value" cx="48%" cy="50%" nameKey="name" outerRadius={110} label>
                                {pieData.map((entry, index) => (
                                    <Cell
                                        key={`cell-${entry.name}`}
                                        fill={`hsl(${index * (360 / pieData.length)}, 70%, 55%)`}
                                        stroke="#000"
                                        strokeWidth={1}
                                    />
                                    ))}
                            </Pie>
                            <Tooltip/>
                            <Legend />
                        </PieChart>
                        </ResponsiveContainer>

                    </div>
                    <div className="w-1/2 ">
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={chartData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="date" axisLine={{ stroke: "black", strokeWidth: 2 }}/>
                                <YAxis axisLine={{ stroke: "black", strokeWidth: 2 }}/>
                                <Tooltip />
                                <Legend />
                                <YAxis
                                    yAxisId="right"
                                    orientation="right"
                                    tick={false}
                                    tickLine={false}
                                    axisLine={{
                                        stroke: "black",
                                        strokeWidth: 2
                                    }}
                                />
                                <XAxis
                                    dataKey="date"
                                    xAxisId="top"
                                    orientation="top"
                                    tick={false}
                                    tickLine={false}
                                    axisLine={{
                                        stroke: "black",
                                        strokeWidth: 2
                                    }}
                                />
                                <Line
                                    type="monotone"
                                    dataKey="income"
                                    stroke="green"
                                    strokeWidth={2}
                                />
                               
                                <Line
                                    type="monotone"
                                    dataKey="expense"
                                    stroke="red"
                                    strokeWidth={2}
                                />
                                
                                
                                 
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                    
                </div>
            </div> 
    )
};

export default Dashboard;