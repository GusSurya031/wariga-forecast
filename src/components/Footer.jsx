// eslint-disable-next-line no-unused-vars
import React from 'react'
import LogoWariga from '../assets/webp/logo.webp'

export default function Footer() {
  return (
    <footer className='bg-gradient-to-b from-[#120F1D] to-[#201C4A] flex flex-col gap-8 px-[64px] py-8 text-white '>
      <div>
        <img src={LogoWariga} alt="" width={132} />
      </div>
      <div className='flex justify-between text-sm'>
        <ul className="flex gap-8">
          <li>Ramalan</li>
          <li>FAQ</li>
          <li>Tentang Wariga</li>
        </ul>
        <p>©️Copyright 2024 Wariga. All Rights Reserved.</p>
      </div>
    </footer>
  )
}
