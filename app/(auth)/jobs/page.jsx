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
      <form
        onSubmit={(e) => handleSearch(e)}
        className="SearchCon w-1/2 flex gap-5"
      >
        <input
          className="w-full h-10 rounded-sm text-black"
          type="search"
          placeholder="Search..."
          required
        />
        <button className="bg-indigo-600 p-2 rounded-sm hover:bg-indigo-800 transition-all duration-75">
          Search
        </button>
      </form>
      {isLoading && (
        <div className="flex justify-center items-center mt-10">
          <Loader size={64} className="animate-spin" />
        </div>
      )}
      <div className="w-full flex gap-4 flex-wrap overflow-scroll p-20 overflow-x-hidden">
        {!isLoading &&
          after.map((el, ind) => (
            <div className="Container w-1/4 bg-gray-400 p-3 hover:scale-90 transition-all duration-150" key={ind}>
              <img className="relative h-40 mb-2" src={el.img}/>
              <h1 className="text-xl font-bold mb-2 cursor-default">{el.desc}</h1>
              <div className="flex justify-between mb-2">
                <div className="bg-zinc-700 h-8 p-2">
                  <h1 className="text-sm">Oylik : {el.oylik} so'm</h1>
                </div>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm" onClick={() => toast.error("work in progress")}>
                  Batafsil
                </button>
              </div>
            </div>
          ))}
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
}
