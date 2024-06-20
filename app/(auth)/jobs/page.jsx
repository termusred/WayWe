"use client";

import { useEffect, useState } from "react";
import { Loader } from "react-feather";

export default function SeekFor() {
    const [isLoading, setIsLoading] = useState(false);
    const [def , setdef] = useState([{name:"ishmas" , oylik:100000},{name:"ish" , oylik:9000},{name:"ish" , oylik:2000},{name:"ish" , oylik:3000}])
    const [after , setAfter] = useState(def)
    
    function handleSearch(e) {
        e.preventDefault()
        def.map((el)=> {
            if(el.name.includes(e.target[0].value)){
                setAfter([el])
            } else{
                console.log("ne rabotaet");
                setAfter(def)
            }
        })
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false)
        } , 1000)
    }

    return (
        <div className="w-full h-screen bg-black flex flex-col items-center mt-24 p-8 gap-10">
            <form onSubmit={(e) => handleSearch(e)} className="SearchCon w-1/2 flex gap-5">
                <input className="w-full h-10 rounded-sm text-black" type="search" placeholder="Search..." required/>
                <button className="bg-indigo-600 p-2 rounded-sm hover:bg-indigo-800 transition-all duration-75">
                    Search
                </button>
            </form>
            {isLoading && (
                <div className="flex justify-center items-center mt-10">
                    <Loader size={64} className="animate-spin" />
                </div>
            )}
            <div className=" w-full flex gap-4 flex-wrap">
                {!isLoading && after.map((el ,ind) =>{
                    return(
                        <div className="Container w-1/4 h-40 bg-gray-400 p-3" key={ind}>
                            <h1>{el.name}</h1>
                            <h1>{el.oylik}</h1>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
