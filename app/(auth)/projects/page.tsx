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
        toast.success(e.target[0].value + " qoshildi")
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
        <div className="m-20">
    <button onClick={Addtoggle} className="bg-indigo-600 text-white p-3 rounded shadow-lg hover:bg-indigo-700 transition duration-300">Yangi Loyiha qoshish</button>
    <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Cards.map((el, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <h3 className="bg-gray-800 text-white p-4 rounded-lg mb-4">{el.name}</h3>
                <p className="text-gray-700 mb-4">{el.desc}</p>
                <div className="flex flex-col gap-4">
                    <button 
                        className="bg-indigo-600 text-white p-2 rounded hover:bg-indigo-700 transition duration-300"
                        onClick={() => {
                            if (el.id !== "default") {
                                window.open("https://github.com/termusred/WayWe");
                            } else {
                                toast.error("Keyinroq bosib koring");
                            }
                        }}
                    >Loyihani Ochish</button>
                    {el.id !== "undeleteble" && (
                        <button 
                            className="bg-red-600 text-white p-2 rounded hover:bg-red-700 transition duration-300"
                            onClick={() => {
                                handleClear(index);
                                toast.success("Proekt o'chirildi");
                            }}
                        >Delete</button>
                    )}
                </div>
            </div>
        ))}
    </div>
    {Add && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-40 text-black">
            <form onSubmit={(e) => HandleAdd(e)} className="bg-white p-8 rounded-lg shadow-lg space-y-6">
                <div className="flex flex-col">
                    <label htmlFor="name" className="text-gray-700 mb-2">Loyiha nomi</label>
                    <input type="text" name="name" className="border border-gray-300 p-2 rounded" required />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="desc" className="text-gray-700 mb-2">Loyiha tasnifi</label>
                    <input type="text" name="desc" className="border border-gray-300 p-2 rounded" required />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="file" className="text-gray-700 mb-2">Loyiha fayllari</label>
                    <input type="file" name="file" className="border border-gray-300 p-2 rounded" />
                </div>
                <div className="flex justify-between">
                    <button type="submit" className="bg-indigo-600 text-white p-2 rounded hover:bg-indigo-700 transition duration-300">Qoshish</button>
                    <button type="button" className="bg-red-600 text-white p-2 rounded hover:bg-red-700 transition duration-300" onClick={Addtoggle}>Cancel</button>
                </div>
            </form>
        </div>
    )}
    <ToastContainer />
</div>


    );
}

