/** @format */
'use client';
import { getItem } from '@/utils/storage';
import Avatar from 'react-avatar';
import 'react-toastify/dist/ReactToastify.css';


export default function SignIn() {
  return (
    <div className=" mt-20">
        <div className=" w-full h-96 p-4 flex text-black justify-between">
            <Avatar name="Sizning rasm" src='https://secure.gravatar.com/avatar/8c5d4c4b9ef6c68c4ff91c319d4c56be?d=404&s=512' size='248' className='ml-14'/>
            <div className='flex flex-col w-1/2 text-white'>
              <h1 className=' text-4xl'>Abidov Shohakbar</h1>
              <h3 className=' text-xl'>Kasb : Front-end devoleper</h3>
              <h3 className=' text-xl'>Daraja : Junior</h3>
              <h3 className=' text-xl'>Tajriba : 12 oy</h3>

            </div>
        </div>
        <h2 className=' ml-12 text-xl'>Foydalanuvchi loyihalari</h2>
        <div className=' flex h-96 flex-wrap m-7 gap-2'>
          {getItem("Projects").map((el) => {
            return(
              <div className=' flex w-1/4 h-1/2 bg-black justify-items-center items-center p-8'>
                <h1>Project nomi: </h1>
                <h1>{el.name}</h1>
              </div>
            )
          })}
        </div>  
    </div>
  );
}
