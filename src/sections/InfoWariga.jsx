// eslint-disable-next-line no-unused-vars
import React from 'react'
import TopMoon from '../assets/webp/top-moon.webp'
import LeftMoon from '../assets/webp/left-moon.webp'
import KalenderSekarang from '../assets/kalender-sekarang.png'
import KalenderTike1 from '../assets/tike-1.png'
import KalenderTike2 from '../assets/tike-2.png'


export default function InfoWariga() {
  return (
    <section className='mt-[120px] px-8 sm:px-12 sm:py-4 lg:px-16 flex flex-col gap-8 text-white justify-center item-center'>
      <img src={TopMoon} alt="Moon With Yello Lightning" className='hidden md:block absolute right-0 top-[-10px] z-[-9]' />
      <img src={LeftMoon} alt="Moon With Yello Lightning" className='hidden md:block absolute left-0 bottom-[-80px] z-[-9]' />
      <div className='flex flex-col gap-6 text-center'>
        <h1 className=' text-5xl font-bold'>Tentang <span className='text-[#FFB400] '>Wariga</span> </h1>
        <p className='text-lg'>Yuk cari tau lebih detail terkait dengan wariga</p>
      </div>
      <div className="mt-2 md:mt-8 lg:mt-12 grid lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8" >
        {/* Konten */}
        <div className='flex flex-col gap-4'>
          <div className='rounded-xl bg-gradient-to-br from-[#493E84] to-[#946800] p-0.5'>
            {/* Bg ungu */}
            <div className='bg-[#141124] rounded-xl '>
              <p className='p-4 md:p-8 leading-8 md:text-lg text-justify'>
                Wariga di bali pada umumnya digunakan untuk menentukan ala ayuning dewasa (hari baik & hari buruk). Masyarakat bali menentukan hari baik dan hari buruk untuk kegiatan upacara adat, seperti pernikahan dan hari raya umat hindu.
              </p>
            </div>
          </div>
          <div className='rounded-xl bg-gradient-to-br from-[#493E84] to-[#946800] p-0.5'>
            {/* Bg ungu */}
            <div className='bg-[#141124] rounded-xl '>
              <p className='p-4 md:p-8 leading-8 md:text-lg  text-justify'>
                Sebelum kelahiran kalender masa kini, masyarakat bali menggunakan suatu alat yang dinamakan Tika. Tika adalah petikan-petikan ajaran wariga yang merupakan kalender tradisional yang bersifat permanen  yang menggunakan kode-kode tertentu sebagai salah satu wewaran. Dengan Tika inilah masyarakat bali mencari padewasan (hari baik, hari buruk). Padewasan ini dijadikan pedoman ketika bertani, mengawali suatu pekerjaan ataupun melaksanakan yadnya (upacara adat).
              </p>
            </div>
          </div>
        </div>
        {/* Gambar Kalender */}
        <div className='order-first lg:order-last'>
          <div className='h-full rounded-xl bg-gradient-to-br from-[#493E84] to-[#946800] p-0.5'>
            <div className='h-full bg-[#141124] rounded-xl flex items-center justify-center md:py-4 gap-4'>
              <div>
                <img src={KalenderSekarang} alt="" width="100%" />
              </div>
              <div className='flex flex-col items-center justify-between gap-4'>
                <img src={KalenderTike1} alt="" width="100%" />
                <img src={KalenderTike2} alt="" width="100%" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='text-sm md:text-base text-[#BFBFBF] text-center'>
        <p>Sumber: Wariga Pawatekan Wawaran, 2021</p>
      </div>
    </section>
  );
}
