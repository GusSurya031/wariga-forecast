// eslint-disable-next-line no-unused-vars
import React from 'react'
import { HashLink } from 'react-router-hash-link'

// eslint-disable-next-line react/prop-types
export default function CardBagianWariga({ title, description }) {
  return (
    <div className='flexorder w-full rounded-xl bg-gradient-to-br from-[#493E84] to-[#946800] p-0.5'>
      {/* Bg-ungu */}
      <div className='flex flex-col gap-3 h-full bg-[#141124] rounded-xl p-6 md:p-8 lg:p-12'>
        {/* judul card */}
        <div className='flex justify-between items-center'>
          <h3 className='text-xl md:text-2xl text-[#FFB400] font-bold '>{title}</h3>
          <HashLink className='bg-[#FFB400] p-1.5 rounded-full' to={`/tentang-wariga#${title}`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke='#0F172A' className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </HashLink>
        </div>
        {/* deskripsi card */}
        <div className='leading-7' >
          <p>{description} </p>
        </div>
      </div>
    </div >
  )
}
