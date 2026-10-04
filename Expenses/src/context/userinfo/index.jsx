import { useState,createContext,useEffect } from "react";
import { json } from "react-router-dom";

export const Usercontext=createContext();

function Usercontextprovider({children}){
    const [info,setinfo]=useState(JSON.parse(localStorage.getItem("userinfo"))|| null )
    
    useEffect(function(){
        localStorage.setItem("userinfo",JSON.stringify(info))
    },[info])
 
    return(
        <Usercontext.Provider value={{info,setinfo}}>
            {children}
        </Usercontext.Provider>
    )
}

export default Usercontextprovider;