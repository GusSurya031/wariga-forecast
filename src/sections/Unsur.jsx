// eslint-disable-next-line no-unused-vars
import React from 'react'
import KalenderBali1 from '../assets/kalender-bali-1.png'



export default function Unsur() {
  return (
    <section className='my-16 lg:my-32 px-8 sm:px-12 lg:px-16 text-white flex flex-col gap-8 md:gap-12'>
      {/* Judul Konten  */}
      <div className='font-bold text-4xl md:text-5xl lg:text-6xl text-center '>
        <h1><span className='text-[#FFB400] '>Wariga :</span> Sistem perhitungan waktu masyarakat bali.</h1>
      </div>
      {/* Konten */}
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6 lg:gap-8'>
        <div className='lg:col-span-5 flex flex-col h-full gap-4 md:gap-6 lg:gap-8'>
          {/* Main Content */}
          <div>
            {/* Gradient */}
            <div className='w-full rounded-xl bg-gradient-to-br from-[#493E84] to-[#946800] p-0.5'>
              {/* Bg ungu */}
              <div className='bg-[#141124] rounded-xl '>
                <p className='leading-8 p-4 md:p-6 lg:md-8 text-base md:text-lg text-justify'>
                  Kalender Bali merupakan penanggalan yang mengikuti sistem wariga dimana perhitungannya dihitung berdasarkan matahari, bulan, bintang, dan sistem hukum . Unsur-unsur dasarnya meliputi:
                </p>
              </div>
            </div>
          </div>
          {/* Additional Content */}
          <div className='grid grid-cols-2 gap-5'>
            <div className='w-full rounded-xl bg-gradient-to-br from-[#493E84] to-[#946800] p-0.5'>
              {/* Bg ungu */}
              <div className='bg-[#141124] rounded-xl py-2 px-4  md:py-4 md:px-8 flex justify-between items-center'>
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
              <div className='bg-[#141124] rounded-xl py-2 px-4  md:py-4 md:px-8 flex justify-between items-center'>
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
              <div className='bg-[#141124] rounded-xl py-2 px-4  md:py-4 md:px-8 flex justify-between items-center'>
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
              <div className='bg-[#141124] rounded-xl py-2 px-4  md:py-4 md:px-8 flex justify-between items-center'>
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
        <div className='lg:col-span-7 order-first lg:order-last'>
          <div className='rounded-xl bg-gradient-to-br from-[#493E84] to-[#946800] p-0.5'>
            <div className='bg-[#141124] rounded-xl p-4'>
              <img src={KalenderBali1} alt="" width="100%" />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
