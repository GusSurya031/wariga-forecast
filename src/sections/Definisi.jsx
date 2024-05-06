// eslint-disable-next-line no-unused-vars
import React from 'react'
import Bintang from '../assets/webp/star.webp';

export default function Definisi() {
  return (
    <div className='mt-16 px-[64px] text-white flex flex-col gap-12'>
      {/* Judul Konten  */}
      <div className='font-bold text-[54px] text-center'>
        <h1>Apa itu <span className='text-[#FFB400] '>Wariga?</span> </h1>
      </div>
      {/* Konten */}
      <div className='grid grid-cols-12 gap-8 items-center'>
        <div className='flex flex-col items-center col-span-5'>
          <div className='font-bold text-[#FFB400] text-[108px] '>
            <h3>WARIGA</h3>
          </div>
          <div className='w-full grid grid-cols-3 text-center items-center gap-2 '>
            <div className='w-full rounded-xl bg-gradient-to-br from-[#493E84] to-[#946800] p-0.5'>
              <p className='bg-[#141124] rounded-xl'>
                <span className='text-[54px] text-[#FFB400] font-bold '>Wa</span> (terang)
              </p>
            </div>
            <div className='flex justify-center'>
              <img src={Bintang} alt="gambar bintang" width={48} />
            </div>
            <div className='w-full rounded-xl bg-gradient-to-br from-[#493E84] to-[#946800] p-0.5'>
              <p className='bg-[#141124] rounded-xl'>
                <span className='text-[54px] text-[#FFB400] font-bold '>Ga</span> (wadag)
              </p>
            </div>
            <div className='flex justify-center'>
              <img src={Bintang} alt="gambar bintang" width={48} />
            </div>
            <div className='w-full rounded-xl bg-gradient-to-br from-[#493E84] to-[#946800] p-0.5'>
              <p className='bg-[#141124] rounded-xl'>
                <span className='text-[54px] text-[#FFB400] font-bold '>Ri</span> (puncak)
              </p>
            </div>
            <div className='flex justify-center'>
              <img src={Bintang} alt="gambar bintang" width={48} />
            </div>

          </div>
        </div>
        <div className='col-span-7 flex flex-col justify-evenly h-full'>
          <div className='w-full rounded-xl bg-gradient-to-br from-[#493E84] to-[#946800] p-0.5'>
            <p className='bg-[#141124] rounded-xl leading-8 p-8 text-lg text-justify'>
              “ Wariga dijelaskan sebagai sarana (wadag) dalam mencapai tujuan (puncak) yang baik (terang), atau dikenal sebagai ilmu dalam mempelajari baik-buruknya hari sehingga dapat dibedakan antara hari yang tidak baik, kurang baik, baik, dan terbaik dalam melakukan sesuatu. ”
            </p>
          </div>
          <div className='text-sm text-[#BFBFBF] text-right p-8 '>
            <p>Sumber: Buku Wariga Siddhi</p>
          </div>
        </div>

      </div>
    </div>
  )
}
