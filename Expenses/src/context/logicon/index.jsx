import {useState,createContext } from "react";
import { useEffect } from "react";

export const Authcontext=createContext();

function Authcontextprovider({children}){
    const [auth,setauth]=useState(JSON.parse(localStorage.getItem("Authentication"))||false);

    useEffect(function(){
        localStorage.setItem("Authentication",JSON.stringify(auth))
    },[auth]);

    return(
        <Authcontext.Provider value={{auth,setauth}}>
        {children}
        </Authcontext.Provider>
    )
}

export default Authcontextprovider;