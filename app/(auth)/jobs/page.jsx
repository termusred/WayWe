"use client"
import { useState } from "react";
import { Loader } from "react-feather";
import { toast , ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {def} from "@/utils/db"


export default function SeekFor() {
  const [isLoading, setIsLoading] = useState(false);
  
  const [after, setAfter] = useState(def);

  function handleSearch(e) {
    e.preventDefault();
    const searchTerm = e.target[0].value.toLowerCase();
    const filteredResults = def.filter((el) =>
      el.desc.toLowerCase().includes(searchTerm)
    );
    setAfter(filteredResults);

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }

  return (
    <div className="w-full h-screen bg-black flex flex-col items-center mt-24 p-8 gap-10">
        <form onSubmit={(e) => handleSearch(e)} className="w-2/3 sm:w-1/2 flex gap-4">
            <input
                className="w-full h-12 rounded-lg p-4 text-black shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                type="search"
                placeholder="Search..."
                required
            />
            <button className="bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-700 transition duration-300 shadow-md">
                Search
            </button>
        </form>
        {isLoading && (
            <div className="flex justify-center items-center mt-10">
                <Loader size={64} className="animate-spin text-indigo-600" />
            </div>
        )}
        <div className="w-full flex gap-4 flex-wrap p-10 overflow-y-auto">
            {!isLoading &&
                after.map((el, ind) => (
                    <div className="w-full sm:w-1/2 lg:w-1/4 bg-gray-200 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300" key={ind}>
                        <img className="w-full h-40 object-contain mb-4" src={el.img} alt={el.desc} />
                        <h1 className="text-xl font-bold mb-2 text-gray-800">{el.desc}</h1>
                        <div className="flex justify-between items-center mb-2">
                            <div className="bg-zinc-700 text-white h-8 px-4 flex items-center rounded">
                                <h1 className="text-sm">Oylik: {el.oylik} so'm</h1>
                            </div>
                            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded text-sm transition duration-300" onClick={() => toast.error("work in progress")}>
                                Batafsil
                            </button>
                        </div>
                    </div>
                ))
            }
        </div>
        <ToastContainer />
      </div>
  );
}
