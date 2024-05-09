// eslint-disable-next-line no-unused-vars
import React from 'react'
import Bintang from '../assets/webp/star.webp';

export default function Definisi() {
  return (
    <div className='mt-16 px-8 sm:px-12 lg:px-16 text-white flex flex-col gap-12'>
      {/* Judul Konten  */}
      <div className='font-bold text-4xl md:text-6xl text-center'>
        <h1>Apa itu <span className='text-[#FFB400] '>Wariga?</span> </h1>
      </div>
      {/* Konten */}
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 items-center justify-center'>
        <div className='flex flex-col items-center lg:col-span-5 justify-center gap-2'>
          <div className=''>
            <h3 className='font-bold text-[#FFB400] text-5xl mt-[-32px] md:text-[108px] md:my-8'>WARIGA</h3>
          </div>
          <div className='w-full grid grid-cols-3 text-center items-center gap-2 mt-2 md:mt-[-32px]'>
            <div className='w-full rounded-xl bg-gradient-to-br from-[#493E84] to-[#946800] p-0.5'>
              <p className='bg-[#141124] rounded-xl p-2 md:px-2 md:py-6'>
                <span className='text-2xl md:text-[54px] text-[#FFB400] font-bold '>Wa</span> (terang)
              </p>
            </div>
            <div className='flex justify-center'>
              <img src={Bintang} alt="gambar bintang" width={48} />
            </div>
            <div className='w-full rounded-xl bg-gradient-to-br from-[#493E84] to-[#946800] p-0.5'>
              <p className='bg-[#141124] rounded-xl p-2 md:px-2 md:py-6'>
                <span className='text-2xl md:text-[54px] text-[#FFB400] font-bold '>Ga</span> (wadag)
              </p>
            </div>
            <div className='flex justify-center'>
              <img src={Bintang} alt="gambar bintang" width={48} />
            </div>
            <div className='w-full rounded-xl bg-gradient-to-br from-[#493E84] to-[#946800] p-0.5'>
              <p className='bg-[#141124] rounded-xl p-2 md:px-2 md:py-6'>
                <span className='text-2xl md:text-[54px] text-[#FFB400] font-bold '>Ri </span> (puncak)
              </p>
            </div>
            <div className='flex justify-center'>
              <img src={Bintang} alt="gambar bintang" width={48} />
            </div>

          </div>
        </div>
        <div className='lg:col-span-7 flex flex-col justify-evenly h-full'>
          <div className='w-full rounded-xl bg-gradient-to-br from-[#493E84] to-[#946800] p-0.5'>
            <p className='bg-[#141124] rounded-xl leading-8 p-4 md:p-8 md:text-lg text-justify'>
              “ Wariga dijelaskan sebagai sarana (wadag) dalam mencapai tujuan (puncak) yang baik (terang), atau dikenal sebagai ilmu dalam mempelajari baik-buruknya hari sehingga dapat dibedakan antara hari yang tidak baik, kurang baik, baik, dan terbaik dalam melakukan sesuatu. ”
            </p>
          </div>
          <div className='text-sm text-[#BFBFBF] text-center lg:text-right p-6 lg:p-8 '>
            <p>Sumber: Buku Wariga Siddhi</p>
          </div>
        </div>

      </div>
    </div>
  )
}
