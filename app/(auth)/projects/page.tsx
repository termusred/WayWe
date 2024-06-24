"use client"
import { setItem , getItem } from "@/utils/storage"
import React, { useEffect, useState } from 'react';
import { toast , ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; 

export default function Projects() {
    const [Cards, setCards] = useState([{name:"WayWe" , desc:"Help us improve our platform! Join Waywe team on Github." , file:'none', id:"undeleteble"}]);
    useEffect(() => {
        const storedProjects = getItem("Projects");
        if(storedProjects !== null){
            if(storedProjects.length == 0){
                setItem("Projects" , null)
            } else {
                setCards(storedProjects)
    
            }
        } else {
            setItem("Projects" , Cards)
        }
    }, []);

    function HandleAdd(e : any) {
        setItem("Projects", [...Cards, { name: `${e.target[0].value}` , desc:`${e.target[1].value}` , file:`${e.target[2].value}` , id:"deafult"}]);
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
            <button onClick={Addtoggle} className='bg-purple-600 p-3 rounded'>Yangi Loyiha qoshish</button>
            {Cards.map((el, index) => (
                <div key={index} className={"bg-gray-500 p-4 mt-3 h-30 flex justify-between transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-y-5 hover:bg-indigo-500 duration-300 ..."}>
                    <h3 className='bg-gray-800 flex justify-center items-center flex-wrap p-8 w-96'>{el.name}</h3>
                    <h5>{el.desc}</h5>
                    <div className=' flex flex-col gap-4'>
                        <button className='bg-black p-2 h-10' onClick={() => {
                            if(el.id !== "deafult"){
                                window.open("https://github.com/termusred/WayWe");
                            } else {
                                toast.error("Keyinroq bosib koring")
                            }
                        }}>Loyihani Ochish</button>
                        {el.id !== "undeleteble" &&<button className='bg-red-800 p-2 h-10' onClick={() => handleClear(index)}>Delete</button>}
                    </div>
                </div>
            ))}
            {Add && (
                <div className=' w-full h-full top-0 left-0 bg-black bg-opacity-50 flex justify-center items-center absolute z-40'>
                    <form onSubmit={(e) => HandleAdd(e)} className=' flex flex-col gap-8'>
                        <div className=' flex-col flex'>
                            <label htmlFor="name">Loyiha nomi</label>
                            <input type="text" name='name' className=' text-black' required/>
                        </div>
                        <div className=' flex-col flex'>
                            <label htmlFor="name">Loyiha tasnifi</label>
                            <input type="text" name='name' className=' text-black' required/>
                        </div>
                        <div className=' flex-col flex'>
                            <label htmlFor="name">Loyiha fayllari</label>
                            <input type="file" name='name' className=' text-white'/>
                        </div>
                        <button type='submit' className=' p-2 bg-indigo-700'>Click</button>
                    </form>
                </div>
            )
            }
            <ToastContainer/>
        </div>
    );
}

