// eslint-disable-next-line no-unused-vars
import React from 'react'
import LogoWariga from '../assets/webp/logo.webp'

export default function NavBar() {
  return (
    <>
      <nav className='bg-[#100D20] h-[80px] w-full px-[64px] py-[24px] flex items-center justify-between text-white '>
        <div className="logo">
          <img src={LogoWariga} alt="Logo Wariga" className='w-[132px] ' />
        </div>
        <ul className='flex gap-16' >
          <li className='hover:text-[#FFB400]'>
            <a href="/">Ramalan</a>
          </li>
          <li className='hover:text-[#FFB400]'>
            <a href="/faq">FAQ</a>
          </li>
          <li className='hover:text-[#FFB400]'>
            <a href="/tentang-wariga">Tentang Wariga</a>
          </li>
        </ul>
      </nav>
    </>
  )
}
