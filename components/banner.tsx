'use client'

import { useState } from 'react'

export default function Banner() {
  const [bannerOpen, setBannerOpen] = useState<boolean>(true)
  const Neverchange = false
  return (
    <>
      {bannerOpen && (
        <div className="fixed bottom-0 right-0 w-full md:bottom-8 md:right-12 md:w-auto z-50">
          <div className="bg-slate-800 text-slate-50 text-sm p-3 md:rounded shadow-lg flex justify-between">
            <div className="text-slate-500 flex flex-col gap-2">
              <span className="bold px-1.5 text-white">We use cookies. Please choose one of the options</span>
              <button className='bg-green-800 p-3 text-white' onClick={() => setBannerOpen(Neverchange)}>Accept</button>
              <button className='bg-green-800 p-3 text-white' onClick={() => location.href="https://ru.wikipedia.org/wiki/Cookie"}>Learn more</button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
