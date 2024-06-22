"use client"
import { useState } from "react";
import { Loader } from "react-feather";

export default function SeekFor() {
  const [isLoading, setIsLoading] = useState(false);
  const def = [
    { name: "front-end devoleper kerak! Biz AquaPure kompaniyasi vakillarimiz va 1-2 yillik bilimga ega xodim qidirayapmiz. AquaPure Toshkent Yakkasaroy Askiya 25 kochasida joylashgan", oylik: '5,000,000' },
    { name: "front-end devoleper stajer kerak! Acadio o'z darslariga front-end stajer qidirmoqda! Siz ish opit olasiz va bu uchun oylik olasiz", oylik: "4,000,000" },
    { name: "AvtoShop oz web kamandasiga 1-5 yill tajribali teamleadni qidirmoqda!", oylik: "8,000,000"},
    { name: "Circle - full stack razrabotchik lovozimini taklif etadi. Biz websitimizdagi no sozliklarni tuzatish uchun 2-3 yillik tajribali odam qidirmoqda. Bizning ofis Salamativna kochasida joylashgan", oylik: "10,000,000" },
    { name: "Ravel tur agentligi uchun back-end devoleper kerak . 3-5 oylik ish.", oylik: "3,000,000"},
    { name: "Off-ice - ichimliklar kompaniyasi uchun websaytni ohirigacha tugatuvchi inson kerak", oylik: "2,000,000"}
  ];
  const [after, setAfter] = useState(def);

  function handleSearch(e) {
    e.preventDefault();
    const searchTerm = e.target[0].value.toLowerCase();
    const filteredResults = def.filter((el) =>
      el.name.toLowerCase().includes(searchTerm)
    );
    setAfter(filteredResults);

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
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
            <div className="Container w-1/4 bg-gray-400 p-3" key={ind}>
              <div className="relative h-40 bg-gray-300 mb-2"></div>
              <h1 className="text-xl font-bold mb-2">{el.name}</h1>
              <div className="flex justify-between mb-2">
                <div className="bg-zinc-700 h-8 p-2">
                  <h1 className="text-sm">Oylik : {el.oylik} so'm</h1>
                </div>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm">
                  Batafsil
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
