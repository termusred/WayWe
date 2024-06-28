'use client';
import { getItem } from '@/utils/storage';
import Avatar from 'react-avatar';
import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';

export default function User() {
  const [editing, setEditing] = useState(false);

  return (
    <div className="mt-20">
      <div className="w-full h-auto p-8 flex flex-col md:flex-row text-black justify-between items-center bg-gray-800 rounded-lg shadow-lg">
        <Avatar name="Sizning rasm" src='https://secure.gravatar.com/avatar/8c5d4c4b9ef6c68c4ff91c319d4c56be?d=404&s=512' size='248' className='mb-4 md:mb-0 md:ml-14' />
        <div className='flex flex-col w-full md:w-1/2 text-white space-y-4'>
          <h1 className='text-4xl'>Abidov Shohakbar</h1>
          <h3 className='text-xl'>Kasb : Front-end Developer</h3>
          <h3 className='text-xl'>Daraja : Junior</h3>
          <h3 className='text-xl'>Tajriba : 12 oy</h3>
          <button onClick={() => setEditing(true)} className="bg-indigo-600 text-white p-2 rounded-lg hover:bg-indigo-700 transition duration-300 mt-4 w-1/3">
            Change Info
          </button>
        </div>
      </div>
      <h2 className='ml-12 text-2xl text-white mt-10'>Foydalanuvchi loyihalari</h2>
      <div className='flex h-96 flex-wrap m-7 gap-4 overflow-y-auto'>
        {getItem("Projects") !== null ? getItem("Projects").map((el : any, index : any) => (
          <div key={index} className='flex flex-col w-1/4 h-48 bg-gray-700 text-white justify-center items-center p-6 rounded-lg shadow-md hover:scale-95 transition-all duration-200'>
            <h1 className='text-lg font-bold'>Project nomi:</h1>
            <h1 className='text-lg'>{el.name}</h1>
          </div>
        )): console.log("mayli")
        }
      </div>
    </div>
  );
}

