'use client'

import { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'

import PageIllustration from '@/components/page-illustration'
import Footer from '@/components/ui/footer'
import {getItem , setItem} from "@/utils/storage"
export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode
}) {  
  const db = [
    {
      email:"rostakam@gmail.com",
      pass:"1234"
    }
  ]
  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 600,
      easing: 'ease-out-sine',
    })
    setItem("DataBase" , db)
  })  
  
  return (
    <>
      <main className="grow">

        <PageIllustration />

        {children}

      </main>

      <Footer />
    </>
  )
}
