// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useState } from 'react';

export default function PananggalPanglong() {
  const [showAll, setShowAll] = useState(false);

  const handleMoreButtonClick = () => {
    setShowAll(true);
  };
  const handleLessButtonClick = () => {
    setShowAll(false)
  }

  const pananggalData = [
    {
      no: 1,
      nama: "Pratipada",
      tanggal: '1',
    },
    {
      no: 2,
      nama: "Dwitya",
      tanggal: '2',
    },
    {
      no: 3,
      nama: "Tritya",
      tanggal: '3',
    },
    {
      no: 4,
      nama: "Caturtha/Caturthi",
      tanggal: '4',
    },
    {
      no: 5,
      nama: "Pañcatha/ Pañcama/ Pañcami",
      tanggal: '5',
    },
    {
      no: 6,
      nama: "Sadwi/Sadmi",
      tanggal: '6',
    },
    {
      no: 7,
      nama: "Saptama/Saptami",
      tanggal: '7',
    },
    {
      no: 8,
      nama: "Astama/Astami",
      tanggal: '8',
    },
    {
      no: 9,
      nama: "Nawami/Nawamang",
      tanggal: '9',
    },
    {
      no: 10,
      nama: "Daśama/ Daśami",
      tanggal: '10',
    },
    {
      no: 11,
      nama: "Ekadaśi",
      tanggal: '11',
    },
    {
      no: 12,
      nama: "Dwidaśi",
      tanggal: '12',
    },
    {
      no: 13,
      nama: "Triyodaśi",
      tanggal: '13',
    }, {
      no: 14,
      nama: "Caturdaśi",
      tanggal: '14',
    }, {
      no: 15,
      nama: "Pañcadaśi",
      tanggal: '15 (Purnama)',
    },
  ]
  const panglongData = [
    {
      no: 1,
      nama: "Ekakalpa",
      panglong: '1',
    },
    {
      no: 2,
      nama: "Dwiklika",
      panglong: '2',
    },
    {
      no: 3,
      nama: "Trimuka",
      panglong: '3',
    },
    {
      no: 4,
      nama: "Caturtiñca",
      panglong: '4',
    },
    {
      no: 5,
      nama: "Pañcanetra",
      panglong: '5',
    },
    {
      no: 6,
      nama: "Sadgana",
      panglong: '6',
    },
    {
      no: 7,
      nama: "Saptabhuwana",
      panglong: '7',
    },
    {
      no: 8,
      nama: "Astagana",
      panglong: '8',
    },
    {
      no: 9,
      nama: "Nawadhipa",
      panglong: '9',
    },
    {
      no: 10,
      nama: "Daśabhuja",
      panglong: '10',
    },
    {
      no: 11,
      nama: "Ekadaśakala",
      panglong: '11',
    },
    {
      no: 12,
      nama: "Dwidaśakala",
      panglong: '12',
    },
    {
      no: 13,
      nama: "Tridaśaguna",
      panglong: '13',
    }, {
      no: 14,
      nama: "Caturdaśanetri",
      panglong: '14',
    }, {
      no: 15,
      nama: "Pañcadaśabhuja",
      panglong: '15(Tilem)',
    },
  ]
  return (
    <section>
      {/* Judul Daftar Pananggal */}
      <div>
        <h3 className="mt-8 text-2xl md:text-3xl font-bold text-[#FFB400] ">
          Pananggal dan Panglong
        </h3>
        <p className="text-sm md:text-base font-light italic ">
          Perhitungan berdasarkan peredaran bulan
        </p>
      </div>
      {/* Deskripsi */}
      <div className='mt-4 text-justify' >
        <p className='leading-8'>Peredaran ini sering disebut sebagai <span className='font-bold text-[#FFB400] '>tithi</span>. Tithi dikelompokan menjadi 2 yaitu <span className='font-bold text-[#FFB400] '>Suklapaksa</span> dan <span className='font-bold text-[#FFB400] '>krsnapaksa</span>. Suklapaksa adalah nama lain dari tanggal, sedangkan krsnapaksa adalah nama lain dari panglong. Tanggal berarti bulan bertambah besar cahayanya. Sedangkan Panglong berarti kebalikannya, dimana cahaya bulan semakin berkurang atau meredup.</p><br />
        <p className='leading-8'>Jika dihitung, peredaran bulan lamanya 30 hari. Oleh karena itu terdaapat 30 tithi. Karena dalam satu tahun terdapat 12 bulan, maka dalam satu tahun terdapat <span className='font-bold text-[#FFB400] '>360 Tithi</span>. Berdasarkan panglantaka ada yang disebut nguna latri yakni dikurang satu malam. Menurut sistem yang sama dalam satu tahun terjadi 5 kali atau 6 kali nguna latri atau panglantaka. Sehingga dari total 360 hari tersebut dikurangi 5 atau 6. Ini sebabnya terdapat jumlah hari yang totalnya 354 atau 356 hari dalam satu tahun.</p>
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
                  <th className="pb-4">Nama (Śuklapakṣa
                    )</th>
                  <th className="pb-4">Tanggal</th>
                </tr>
              </thead>
              <tbody className='text-sm md:text-base'>
                {/* Map through the selected wara's data array to render table rows */}
                {showAll
                  ? pananggalData.map(({ no, nama, tanggal }) => (
                    <tr key={no} className={`${no % 2 === 0 ? 'bg-[#221D3C]' : 'bg-[#3D355E]'}`}>
                      <td className="py-5">{no}</td>
                      <td>{nama}</td>
                      <td>{tanggal}</td>
                    </tr>
                  ))
                  : pananggalData.slice(0, 5).map(({ no, nama, tanggal }) => (
                    <tr key={no} className={`${no % 2 === 0 ? 'bg-[#221D3C]' : 'bg-[#3D355E]'}`}>
                      <td className="py-5">{no}</td>
                      <td>{nama}</td>
                      <td>{tanggal}</td>
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
      < div className='lg:mx-24 mt-8' >
        {/* Gradient */}
        < div className='lg:mx-12 mt-8 rounded-md bg-gradient-to-br from-[#493E84] to-[#946800] p-0.5' >
          {/* Detail Tabel Panca Wara */}
          <div className='bg-[#141124] rounded-md p-6' >
            <table className=" w-full text-center mb-4">
              <thead>
                <tr className="text-[#FFB400]">
                  <th className="pb-4">No</th>
                  <th className="pb-4">Nama (Kṛṣṇapakṣa
                    )</th>
                  <th className="pb-4">Panglong</th>
                </tr>
              </thead>
              <tbody className='text-sm md:text-base'>
                {/* Map through the selected wara's data array to render table rows */}
                {showAll
                  ? panglongData.map(({ no, nama, panglong }) => (
                    <tr key={no} className={`${no % 2 === 0 ? 'bg-[#221D3C]' : 'bg-[#3D355E]'}`}>
                      <td className="py-5">{no}</td>
                      <td>{nama}</td>
                      <td>{panglong}</td>
                    </tr>
                  ))
                  : panglongData.slice(0, 5).map(({ no, nama, panglong }) => (
                    <tr key={no} className={`${no % 2 === 0 ? 'bg-[#221D3C]' : 'bg-[#3D355E]'}`}>
                      <td className="py-5">{no}</td>
                      <td>{nama}</td>
                      <td>{panglong}</td>
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
