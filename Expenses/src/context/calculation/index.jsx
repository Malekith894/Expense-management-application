import { createContext,useState,useEffect } from "react";

export const Calcontext=createContext();

function Calcontextprovider({children}){

    const [cal,setcal]=useState(JSON.parse(localStorage.getItem("Transactions"))||[])

    useEffect(function(){
        localStorage.setItem("Transactions",JSON.stringify(cal))
    },[cal])


    return(
        <Calcontext.Provider value={{cal,setcal}}>
            {children}
        </Calcontext.Provider>
    )
};

export default Calcontextprovider;