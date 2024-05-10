// eslint-disable-next-line no-unused-vars
import React from 'react'
import Wewaran from '../components/Wewaran';
import Pawukon from '../components/Pawukon';
import PananggalPanglong from '../components/PananggalPanglong';
import Sasih from '../components/Sasih';

export default function KerangkaWariga() {
  return (
    <div className="leading-9 text-white flex flex-col gap-8 mx-auto text-center  my-16 lg:my-32 px-8 sm:px-12 sm:py-4 lg:px-16" >
      <div className='flex flex-col gap-4 text-center'>
        <h1 className=' font-bold text-4xl md:text-5xl lg:text-6xl text-center '>Daftar Kerangka <span className='text-[#FFB400] '>Wariga</span> </h1>
        <p className='text-sm md:text-lg leading-7 md:leading-8'>Berikut adalah bagian-bagian lebih detail mengenai kerangka yang termasuk pada wariga</p>
      </div>
      {/* Tabel Wewaran*/}
      <Wewaran />
      {/* Tabel Pawukon*/}
      <Pawukon />
      {/* Tabel Pananggal dan Panglong*/}
      <PananggalPanglong />
      {/* Tabel Sasih*/}
      <Sasih />
    </div >
  )
}
