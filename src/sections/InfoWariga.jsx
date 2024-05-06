// eslint-disable-next-line no-unused-vars
import React from 'react'
import TopMoon from '../assets/webp/top-moon.webp'
import LeftMoon from '../assets/webp/left-moon.webp'
import KalenderBali1 from '../assets/kalender-bali-1.png'


export default function InfoWariga() {
  return (
    <section className='px-[64px] text-white mt-[120px] flex flex-col gap-8 justify-center item-center'>
      <img src={TopMoon} alt="Moon With Yello Lightning" className='hidden md:block absolute right-0 top-[-10px] z-[-9]' />
      <img src={LeftMoon} alt="Moon With Yello Lightning" className='hidden md:block absolute left-0 bottom-[-80px] z-[-9]' />
      <div className='flex flex-col gap-6 text-center'>
        <h1 className=' text-5xl font-bold'>Tentang <span className='text-[#FFB400] '>Wariga</span> </h1>
        <p className='text-lg'>Yuk cari tau lebih detail terkait dengan wariga</p>
      </div>
      <div className=" mt-16 grid grid-cols-2 gap-6">
        <div className='flex flex-col gap-4'>
          <div className='w-full rounded-xl bg-gradient-to-br from-[#493E84] to-[#946800] p-0.5'>
            {/* Bg ungu */}
            <div className='bg-[#141124] rounded-xl '>
              <p className='leading-8 p-8 text-justify'>
                Wariga di bali pada umumnya digunakan untuk menentukan ala ayuning dewasa (hari baik & hari buruk). Masyarakat bali menentukan hari baik dan hari buruk untuk kegiatan upacara adat, seperti pernikahan dan hari raya umat hindu.
              </p>
            </div>
          </div>
          <div className='w-full rounded-xl bg-gradient-to-br from-[#493E84] to-[#946800] p-0.5'>
            {/* Bg ungu */}
            <div className='bg-[#141124] rounded-xl '>
              <p className='leading-8 p-8 text-justify'>
                Sebelum kelahiran kalender masa kini, masyarakat bali menggunakan suatu alat yang dinamakan Tika. Tika adalah petikan-petikan ajaran wariga yang merupakan kalender tradisional yang bersifat permanen  yang menggunakan kode-kode tertentu sebagai salah satu wewaran. Dengan Tika inilah masyarakat bali mencari padewasan (hari baik, hari buruk). Padewasan ini dijadikan pedoman ketika bertani, mengawali suatu pekerjaan ataupun melaksanakan yadnya (upacara adat).
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className='rounded-xl bg-gradient-to-br from-[#493E84] to-[#946800] p-0.5'>
            <div className='bg-[#141124] rounded-xl p-4'>
              <img src={KalenderBali1} alt="" width="100%" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
