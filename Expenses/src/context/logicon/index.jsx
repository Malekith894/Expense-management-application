import {useState,createContext } from "react";
export const Authcontext=createContext();

function Authcontextprovider({children}){
    const [auth,setauth]=useState(false)

    return(
        <Authcontext.Provider value={{auth,setauth}}>
        {children}
        </Authcontext.Provider>
    )
}

export default Authcontextprovider;