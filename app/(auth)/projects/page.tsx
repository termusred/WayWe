"use client"
import { setItem , getItem } from "@/utils/storage"
import React, { useEffect, useState } from 'react';

export default function ResetPassword() {
    const [Cards, setCards] = useState([]);

    useEffect(() => {
        const storedProjects = getItem("Projects");
        if (storedProjects) {
            setCards(storedProjects);
        } else {
            setItem("Projects" , [{name:"test" , file:'',desc:"test"}])
        }
    }, []);

    function HandleAdd(e : any) {
        setItem("Projects", [...Cards, { name: `${e.target[0].value}` , desc:`${e.target[1].value}` , file:`${e.target[2].value}`}]);
    };
    
    const handleClear = (indexToRemove : any) => {
        const updatedCards = [...Cards];
        updatedCards.splice(indexToRemove, 1);
        setCards(updatedCards);
        setItem("Projects", JSON.stringify(updatedCards));
    };  
    const [Add , setAdd] = useState(false)
    function Addtoggle() {
        setAdd(!Add)
    }
    return (
        <div className='m-20'>
            <button onClick={Addtoggle} className='bg-purple-600 p-3 rounded'>Click</button>
            {Cards.map((el, index) => (
                <div key={index} className='bg-gray-500 p-4 mt-3 h-30 flex justify-between'>
                    <h3 className='bg-gray-800 flex justify-center items-center flex-wrap p-8'>{el.name}</h3>
                    <h5>{el.desc}</h5>
                    <div className=' flex flex-col gap-4'>
                        <button className='bg-black p-2 h-10'>More</button>
                        <button className='bg-black p-2 h-10' onClick={() => handleClear(index)}>Delete</button>
                    </div>
                </div>
            ))}
            {Add && (
                <div className=' w-full h-full top-0 left-0 bg-black bg-opacity-50 flex justify-center items-center absolute z-40'>
                    <form onSubmit={(e) => HandleAdd(e)} className=' flex flex-col gap-8'>
                        <div className=' flex-col flex'>
                            <label htmlFor="name">Prayekt nomi</label>
                            <input type="text" name='name' className=' text-black' required/>
                        </div>
                        <div className=' flex-col flex'>
                            <label htmlFor="name">Prayekt tasnifi</label>
                            <input type="text" name='name' className=' text-black' required/>
                        </div>
                        <div className=' flex-col flex'>
                            <label htmlFor="name">Prayekt fayllari</label>
                            <input type="file" name='name' className=' text-white' required/>
                        </div>
                        <button type='submit' className=' p-2 bg-indigo-700'>Click</button>
                    </form>
                </div>
            )
            }
        </div>
    );
}

