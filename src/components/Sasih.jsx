// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useState } from 'react'

export default function Sasih() {
  const [showAll, setShowAll] = useState(false);

  const handleMoreButtonClick = () => {
    setShowAll(true);
  };
  const handleLessButtonClick = () => {
    setShowAll(false)
  }
  const sasihData = [
    {
      no: 1,
      nama: 'Kasa',
      sanskrta: 'Srawana',
    },
    {
      no: 2,
      nama: 'Karo',
      sanskrta: 'Badrapa',
    },
    {
      no: 3,
      nama: 'Katiga',
      sanskrta: 'Aswina',
    },
    {
      no: 4,
      nama: 'Kapat',
      sanskrta: 'Kartika',
    },
    {
      no: 5,
      nama: 'Kalima',
      sanskrta: 'Margasira',
    },
    {
      no: 6,
      nama: 'Kanem',
      sanskrta: 'Pausa',
    },
    {
      no: 7,
      nama: 'Kapitu',
      sanskrta: 'Magha',
    },
    {
      no: 8,
      nama: 'Kaulu',
      sanskrta: 'Palguna',
    },
    {
      no: 9,
      nama: 'Kasanga',
      sanskrta: 'Caitra',
    },
    {
      no: 10,
      nama: 'Kadasa',
      sanskrta: 'Waisaka',
    },
    {
      no: 11,
      nama: 'Jyesta',
      sanskrta: 'Jyesta',
    },
    {
      no: 12,
      nama: 'Sada',
      sanskrta: 'Asadha',
    }
  ]
  return (
    <section id='Sasih'>
      {/* Judul Daftar Pawukon */}
      <div>
        <h3 className="mt-8 text-2xl md:text-3xl font-bold text-[#FFB400] ">
          Sasih
        </h3>
        <p className="text-sm md:text-base font-light italic ">
          Terdapat 12 jenis sasih
        </p>
      </div>
      {/* Deskripsi */}
      <div className='mt-4 text-justify' >
        <p className='leading-8'>Sasih berarti bulan. Di dalam satu tahun kalender terdapat 12 bulan yang dimulai dari kasa. Sistem ini sama dengan yang dimuat dalam ilmu jyotisa. Berbeda dari anggapan orang kebanyakan bahwa pergantian tahun biasanya terjadi sejak bulan pertama atau kasa, namun menurut kalender ini terjadi pada sasih kasanga atau caitra.</p>
      </div>
      {/* Jenis-jenis Pawukon */}
      < div className='lg:mx-24 mt-8' >
        {/* Gradient */}
        < div className='lg:mx-12 mt-8 rounded-md bg-gradient-to-br from-[#493E84] to-[#946800] p-0.5' >
          {/* Detail Tabel Panca Wara */}
          <div className='bg-[#141124] rounded-md p-6' >
            <table className=" w-full text-center mb-4">
              <thead>
                <tr className="text-[#FFB400]">
                  <th className="pb-4">No</th>
                  <th className="pb-4">Nama (Bali)</th>
                  <th className="pb-4">Sansekerta</th>
                </tr>
              </thead>
              <tbody className='text-sm md:text-base'>
                {/* Map through the selected wara's data array to render table rows */}
                {showAll
                  ? sasihData.map((no, nama, sanskrta) => (
                    <tr key={no} className={`${no % 2 === 0 ? 'bg-[#221D3C]' : 'bg-[#3D355E]'}`}>
                      <td className="py-5">{no}</td>
                      <td>{nama}</td>
                      <td>{sanskrta}</td>
                    </tr>
                  ))
                  : sasihData.slice(0, 5).map(({ no, nama, sanskrta }) => (
                    <tr key={no} className={`${no % 2 === 0 ? 'bg-[#221D3C]' : 'bg-[#3D355E]'}`}>
                      <td className="py-5">{no}</td>
                      <td>{nama}</td>
                      <td>{sanskrta}</td>
                    </tr>
                  ))}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan={4} className='py-4'>
                    {!showAll ? (
                      <button
                        className="text-sm md:text-base px-4 py-2 md:py-3 text-bold text-[#FFB400] underline "
                        onClick={handleMoreButtonClick}
                      >
                        Lihat Selengkapnya
                      </button>
                    ) :
                      <button
                        className="text-sm md:text-base px-4 py-2 md:py-3 text-bold text-[#FFB400] underline "
                        onClick={handleLessButtonClick}
                      >
                        Lihat lebih Sedikit
                      </button>
                    }
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div >
      </div >
    </section>
  )
}
