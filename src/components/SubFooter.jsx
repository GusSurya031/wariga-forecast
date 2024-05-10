// eslint-disable-next-line no-unused-vars
import React from 'react'

export default function SubFooter() {
  return (
    <section className='my-16 mx-8 md:mx-12 lg:mx-16 rounded-xl bg-gradient-to-br from-[#493E84] to-[#946800] p-0.5 '>
      <div className="flex flex-col items-center text-center rounded-xl md:text-left gap-4 md:flex-row md:justify-between bg-[#13101F] py-8 md:py-12 px-2 sm:px-6 lg:px-16 text-white">
        <div className="">
          <p className="md:text-xl lg:text-2xl font-bold mb-1">
            Mari Kita lihat Ramalanmu Hari Ini
          </p>
          <p className="text-xs sm:text-sm font-light">
            Kami membantu anda untuk mengetahui kondisi anda.
          </p>
        </div>
        <div>
          <a
            className="flex justify-center rounded-md bg-[#0056D7] px-8 md:px-10 lg:px-20 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#6C93CD] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            href="/#"
          >
            Coba Ramalan
          </a>
        </div>
      </div>
    </section>
  )
}
