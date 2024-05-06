// eslint-disable-next-line no-unused-vars
import React from 'react'
import KalenderBali1 from '../assets/kalender-bali-1.png'



export default function Unsur() {
  return (
    <div className='my-32 px-[64px] text-white flex flex-col gap-12'>
      {/* Judul Konten  */}
      <div className='font-bold text-[54px] text-center inline-block max-w-[80%] w-full m-auto '>
        <h1><span className='text-[#FFB400] '>Wariga :</span> Sistem perhitungan waktu masyarakat bali.</h1>
      </div>
      {/* Konten */}
      <div className='grid grid-cols-12 gap-8'>
        <div className='col-span-5 flex flex-col h-full gap-8'>
          {/* Main Content */}
          <div>
            {/* Gradient */}
            <div className='w-full rounded-xl bg-gradient-to-br from-[#493E84] to-[#946800] p-0.5'>
              {/* Bg ungu */}
              <div className='bg-[#141124] rounded-xl '>
                <p className='leading-8 p-8 text-lg text-justify'>
                  Kalender Bali merupakan penanggalan yang mengikuti sistem wariga dimana perhitungannya dihitung berdasarkan matahari, bulan, bintang, dan sistem hukum . Unsur-unsur dasarnya meliputi:
                </p>
              </div>
            </div>
          </div>
          {/* Additional Content */}
          <div className='grid grid-cols-2 gap-5'>
            <div className='w-full rounded-xl bg-gradient-to-br from-[#493E84] to-[#946800] p-0.5'>
              {/* Bg ungu */}
              <div className='bg-[#141124] rounded-xl py-4 px-8 flex justify-between items-center'>
                <p className='leading-8 text-justify'>
                  Matematis
                </p>
                <div className='bg-[#FFB400] p-1.5 rounded-full'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke='#0F172A' className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </div>
              </div>
            </div>
            <div className='w-full rounded-xl bg-gradient-to-br from-[#493E84] to-[#946800] p-0.5'>
              {/* Bg ungu */}
              <div className='bg-[#141124] rounded-xl py-4 px-8 flex justify-between items-center'>
                <p className='leading-8 text-justify'>
                  Matematis
                </p>
                <div className='bg-[#FFB400] p-1.5 rounded-full'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke='#0F172A' className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </div>
              </div>
            </div>
            <div className='w-full rounded-xl bg-gradient-to-br from-[#493E84] to-[#946800] p-0.5'>
              {/* Bg ungu */}
              <div className='bg-[#141124] rounded-xl py-4 px-8 flex justify-between items-center'>
                <p className='leading-8 text-justify'>
                  Matematis
                </p>
                <div className='bg-[#FFB400] p-1.5 rounded-full'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke='#0F172A' className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </div>
              </div>
            </div>
            <div className='w-full rounded-xl bg-gradient-to-br from-[#493E84] to-[#946800] p-0.5'>
              {/* Bg ungu */}
              <div className='bg-[#141124] rounded-xl py-4 px-8 flex justify-between items-center'>
                <p className='leading-8 text-justify'>
                  Matematis
                </p>
                <div className='bg-[#FFB400] p-1.5 rounded-full'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke='#0F172A' className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className='col-span-7'>
          <div className='rounded-xl bg-gradient-to-br from-[#493E84] to-[#946800] p-0.5'>
            <div className='bg-[#141124] rounded-xl p-4'>
              <img src={KalenderBali1} alt="" width="100%" />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
