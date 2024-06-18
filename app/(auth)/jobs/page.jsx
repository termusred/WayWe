"use client"
import React, { useEffect, useState } from 'react';
import { Loader } from 'react-feather';

export default function Search() {
    const [defCards , setDefCards] = useState([{id:"1" , name:"Front end job . Requierments: 1-2 experience , team leading experience",},{id:"1" , name:"j",},{id:"1" , name:"j",},{id:"1" , name:"j",},{id:"1" , name:"j",},]);
    const [userAction , setUserAction] = useState(false)

    function HandleSearch(event) {
        event.preventDefault()
        const search = event.target[0].value;
        setUserAction(!userAction)
        defCards.map((el) => {
            var FirstFilter = search.toLowerCase();
            var SecondFilter = FirstFilter.replace(/\s/g, "");
            var ThirdFilter = el.name.toLowerCase();
            var LastFilter = ThirdFilter.replace(/\s/g, "")
            if(SecondFilter == LastFilter){
                setDefCards([...defCards,el])
            } else {
                setDefCards([{name:"Siz qidirayotgan ish topilmadi",id:"2"}])
            }
            setTimeout(() => {
                setUserAction(false)
            }, 1000);
        })
    }
 
    return (
        <div className=" mt-20 flex flex-col justify-center">
            <form className=" w-full h-28 flex items-center justify-center gap-4" onSubmit={(e) => HandleSearch(e)}>
                <input type="search" placeholder="Qidirish..." className="text-black w-1/3 rounded-lg bg-slate-50" required/>
                <input type="submit" className=" bg-indigo-600 py-2 px-4 rounded-lg" value={"Qidirish"}/>
            </form>
            <div>
                <div className="flex p-2 gap-4 flex-wrap">
                    {userAction && <Loader size={78} className='Moving ml-1/2'/>}
                    {!userAction && defCards.map((card) => {
                        return (
                            <div key={card.id} className=' w-1/3 h-14 bg-indigo-900'>
                                <p>{card.name}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}
