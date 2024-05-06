// eslint-disable-next-line no-unused-vars
import React from 'react'

export default function KerangkaWariga() {
  return (
    <div className="text-white flex flex-col gap-8 mx-auto text-center max-w-[800px] mt-12 sm:mt-20">
      <div className="flex flex-col gap-4 ">
        <h1 className="text-2xl sm:text-4xl font-bold">
          Daftar Kerangka Wariga
        </h1>
        <div>
          <p className="text-base leading-8">
            Daftar Wewaran
          </p>
          <p className="text-sm text-[#ffffff]/50 ">
            <span className="text-[#E2A000] ">
              Wewaran{" "}
            </span>
            terdiri dari 10 Kelompok
          </p>
        </div>
        <p className="text-sm leading-[164%] font-light ">
          Wewaran mempunyai pengaruh paling kecil dalam
          penentuan dewasa, sebab wewaran termasuk hari
          pasaran dalam tahun wuku yang diterapkan di Bali.
          Sistem wewaran juga penting dalam penentuan
          padewasan dalam suatu kegiatan sebab integrasi
          wewaran dengan unsur lain yang membangun sistem
          wariga akan melahirkan padewasan baik untuk suatu
          kegiatan dan tidak baik untuk kegiatan lain (ala
          ayuning dewasa).
        </p>
        {/* 1-10 wewaran */}
        <div className="flex flex-wrap md:grid grid-cols-5 gap-4 justify-center">
          <div className="text-sm px-4 py-2 md:py-3 bg-[#0056D7] rounded-md hover:bg-[#E2A000] ">
            1. Eka Wara
          </div>
          <div className="text-sm px-4 py-2 md:py-3 bg-[#0056D7] rounded-md hover:bg-[#E2A000] ">
            2. Dwi Wara
          </div>
          <div className="text-sm px-4 py-2 md:py-3 bg-[#0056D7] rounded-md hover:bg-[#E2A000] ">
            3. Tri Wara
          </div>
          <div className="text-sm px-4 py-2 md:py-3 bg-[#0056D7] rounded-md hover:bg-[#E2A000] ">
            4. Catur Wara
          </div>
          <div className="text-sm px-4 py-2 md:py-3 bg-[#0056D7] rounded-md hover:bg-[#E2A000] ">
            5. Panca Wara
          </div>
          <div className="text-sm px-4 py-2 md:py-3 bg-[#0056D7] rounded-md hover:bg-[#E2A000] ">
            6. Sad Wara
          </div>
          <div className="text-sm px-4 py-2 md:py-3 bg-[#0056D7] rounded-md hover:bg-[#E2A000] ">
            7. Sapta Wara
          </div>
          <div className="text-sm px-4 py-2 md:py-3 bg-[#0056D7] rounded-md hover:bg-[#E2A000] ">
            8. Asta Wara
          </div>
          <div className="text-sm px-4 py-2 md:py-3 bg-[#0056D7] rounded-md hover:bg-[#E2A000] ">
            9. Sanga Wara
          </div>
          <div className="text-sm px-4 py-2 md:py-3 bg-[#0056D7] rounded-md hover:bg-[#E2A000] ">
            10. Dasa Wara
          </div>
        </div>
      </div>
      {/* Tabel Panca Wara */}
      <div>
        {/* Title tabel */}
        <div>
          <h3 className="text-2xl font-bold text-[#FFB400] ">
            Panca Wara
          </h3>
          <p className="my-2 font-light">
            Kelompok lima(5) dari sepuluh kelompok wewaran
          </p>
        </div>
        <div className="bg-[#1F1B46] p-5 rounded-lg mt-8">
          {/* Detail Tabel Panca Wara */}
          <table className=" w-full text-center mb-4">
            <tr className="">
              <th className="pb-4">No</th>
              <th className="pb-4">Nama</th>
              <th className="pb-4">Urip</th>
              <th className="pb-4">Arah</th>
            </tr>
            <tr className="bg-[#02205E]">
              <td className="py-5">1</td>
              <td>Umanis</td>
              <td>5</td>
              <td>Timur</td>
            </tr>
            <tr className="bg-[#02205E]/40 ">
              <td className="py-5">2</td>
              <td>Pahing</td>
              <td>9</td>
              <td>Selatan</td>
            </tr>
            <tr className="bg-[#02205E]">
              <td className="py-5">3</td>
              <td>Pon</td>
              <td>7</td>
              <td>Barat</td>
            </tr>
            <tr className="bg-[#02205E]/40 ">
              <td className="py-5">4</td>
              <td>Wage</td>
              <td>4</td>
              <td>Utara</td>
            </tr>
            <tr className="bg-[#02205E]">
              <td className="py-5">5</td>
              <td>Kliwon</td>
              <td>8</td>
              <td>Barat</td>
            </tr>
          </table>
          <a
            href="#"
            className="text-[#FFB400] underline underline-offset-4"
          >
            Lihat Wewaran Selengkapnya
          </a>
        </div>
      </div>
      {/* Tabel Panca Wara */}
      <div>
        {/* Title tabel */}
        <div>
          <h3 className="text-2xl font-bold text-[#FFB400] ">
            Panca Wara
          </h3>
          <p className="my-2 font-light">
            Kelompok lima(5) dari sepuluh kelompok wewaran
          </p>
        </div>
        <div className="bg-[#1F1B46] p-5 rounded-lg mt-8">
          {/* Detail Tabel Panca Wara */}
          <table className=" w-full text-center mb-4">
            <tr className="">
              <th className="pb-4">No</th>
              <th className="pb-4">Nama</th>
              <th className="pb-4">Urip</th>
              <th className="pb-4">Arah</th>
            </tr>
            <tr className="bg-[#02205E]">
              <td className="py-5">1</td>
              <td>Umanis</td>
              <td>5</td>
              <td>Timur</td>
            </tr>
            <tr className="bg-[#02205E]/40 ">
              <td className="py-5">2</td>
              <td>Pahing</td>
              <td>9</td>
              <td>Selatan</td>
            </tr>
            <tr className="bg-[#02205E]">
              <td className="py-5">3</td>
              <td>Pon</td>
              <td>7</td>
              <td>Barat</td>
            </tr>
            <tr className="bg-[#02205E]/40 ">
              <td className="py-5">4</td>
              <td>Wage</td>
              <td>4</td>
              <td>Utara</td>
            </tr>
            <tr className="bg-[#02205E]">
              <td className="py-5">5</td>
              <td>Kliwon</td>
              <td>8</td>
              <td>Barat</td>
            </tr>
          </table>
          <a
            href="#"
            className="text-[#FFB400] underline underline-offset-4"
          >
            Lihat Wewaran Selengkapnya
          </a>
        </div>
      </div>
      {/* Tabel Panca Wara */}
      <div>
        {/* Title tabel */}
        <div>
          <h3 className="text-2xl font-bold text-[#FFB400] ">
            Panca Wara
          </h3>
          <p className="my-2 font-light">
            Kelompok lima(5) dari sepuluh kelompok wewaran
          </p>
        </div>
        <div className="bg-[#1F1B46] p-5 rounded-lg mt-8">
          {/* Detail Tabel Panca Wara */}
          <table className=" w-full text-center mb-4">
            <tr className="">
              <th className="pb-4">No</th>
              <th className="pb-4">Nama</th>
              <th className="pb-4">Urip</th>
              <th className="pb-4">Arah</th>
            </tr>
            <tr className="bg-[#02205E]">
              <td className="py-5">1</td>
              <td>Umanis</td>
              <td>5</td>
              <td>Timur</td>
            </tr>
            <tr className="bg-[#02205E]/40 ">
              <td className="py-5">2</td>
              <td>Pahing</td>
              <td>9</td>
              <td>Selatan</td>
            </tr>
            <tr className="bg-[#02205E]">
              <td className="py-5">3</td>
              <td>Pon</td>
              <td>7</td>
              <td>Barat</td>
            </tr>
            <tr className="bg-[#02205E]/40 ">
              <td className="py-5">4</td>
              <td>Wage</td>
              <td>4</td>
              <td>Utara</td>
            </tr>
            <tr className="bg-[#02205E]">
              <td className="py-5">5</td>
              <td>Kliwon</td>
              <td>8</td>
              <td>Barat</td>
            </tr>
          </table>
          <a
            href="#"
            className="text-[#FFB400] underline underline-offset-4"
          >
            Lihat Wewaran Selengkapnya
          </a>
        </div>
      </div>
      {/* Tabel Panca Wara */}
      <div>
        {/* Title tabel */}
        <div>
          <h3 className="text-2xl font-bold text-[#FFB400] ">
            Panca Wara
          </h3>
          <p className="my-2 font-light">
            Kelompok lima(5) dari sepuluh kelompok wewaran
          </p>
        </div>
        <div className="bg-[#1F1B46] p-5 rounded-lg mt-8">
          {/* Detail Tabel Panca Wara */}
          <table className=" w-full text-center mb-4">
            <tr className="">
              <th className="pb-4">No</th>
              <th className="pb-4">Nama</th>
              <th className="pb-4">Urip</th>
              <th className="pb-4">Arah</th>
            </tr>
            <tr className="bg-[#02205E]">
              <td className="py-5">1</td>
              <td>Umanis</td>
              <td>5</td>
              <td>Timur</td>
            </tr>
            <tr className="bg-[#02205E]/40 ">
              <td className="py-5">2</td>
              <td>Pahing</td>
              <td>9</td>
              <td>Selatan</td>
            </tr>
            <tr className="bg-[#02205E]">
              <td className="py-5">3</td>
              <td>Pon</td>
              <td>7</td>
              <td>Barat</td>
            </tr>
            <tr className="bg-[#02205E]/40 ">
              <td className="py-5">4</td>
              <td>Wage</td>
              <td>4</td>
              <td>Utara</td>
            </tr>
            <tr className="bg-[#02205E]">
              <td className="py-5">5</td>
              <td>Kliwon</td>
              <td>8</td>
              <td>Barat</td>
            </tr>
          </table>
          <a
            href="#"
            className="text-[#FFB400] underline underline-offset-4"
          >
            Lihat Wewaran Selengkapnya
          </a>
        </div>
      </div>
    </div>
  )
}
