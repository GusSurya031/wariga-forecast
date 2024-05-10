// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useState } from 'react'

export default function Pawukon() {
  const [showAll, setShowAll] = useState(false);

  const handleMoreButtonClick = () => {
    setShowAll(true);
  };
  const handleLessButtonClick = () => {
    setShowAll(false)
  }
  const pawukonData = [
    {
      no: 1,
      nama: 'Sinta',
      urip: 7,
      jatining: 'Barat',
    },
    {
      no: 2,
      nama: 'Landep',
      urip: 1,
      jatining: 'Barat Laut',
    },
    {
      no: 3,
      nama: 'Ukir',
      urip: 4,
      jatining: 'Utara',
    },
    {
      no: 4,
      nama: 'Kulantir',
      urip: 6,
      jatining: 'Timur Laut',
    },
    {
      no: 5,
      nama: 'Tolu',
      urip: 5,
      jatining: 'Timur',
    },
    {
      no: 6,
      nama: 'Gumbreg',
      urip: 8,
      jatining: 'Tenggara',
    },
    {
      no: 7,
      nama: 'Wariga',
      urip: 9,
      jatining: 'Selatan',
    },
    {
      no: 8,
      nama: 'Warigadean',
      urip: 3,
      jatining: 'Barat Daya',
    },
    {
      no: 9,
      nama: 'Julungwangi',
      urip: 7,
      jatining: 'Barat',
    },
    {
      no: 10,
      nama: 'Sungsang',
      urip: 1,
      jatining: 'Barat Laut',
    },
    {
      no: 11,
      nama: 'Dungulan',
      urip: 4,
      jatining: 'Utara',
    },
    {
      no: 12,
      nama: 'Kuningan',
      urip: 6,
      jatining: 'Timur Laut',
    },
    {
      no: 13,
      nama: 'Langkir',
      urip: 5,
      jatining: 'Timur',
    },
    {
      no: 14,
      nama: 'Medangsia',
      urip: 8,
      jatining: 'Tenggara',
    },
    {
      no: 15,
      nama: 'Pujut',
      urip: 9,
      jatining: 'Selatan',
    },
    {
      no: 16,
      nama: 'Pahang',
      urip: 3,
      jatining: 'Barat Daya',
    },
    {
      no: 17,
      nama: 'Krulut',
      urip: 7,
      jatining: 'Barat',
    },
    {
      no: 18,
      nama: 'Mrakih',
      urip: 1,
      jatining: 'Barat Laut',
    },
    {
      no: 19,
      nama: 'Tambir',
      urip: 4,
      jatining: 'Utara',
    },
    {
      no: 20,
      nama: 'Medangkungan',
      urip: 6,
      jatining: 'Timur Laut',
    },
    {
      no: 21,
      nama: 'Matal',
      urip: 5,
      jatining: 'Timur',
    },
    {
      no: 22,
      nama: 'Uye',
      urip: 8,
      jatining: 'Tenggara',
    },
    {
      no: 23,
      nama: 'Menail',
      urip: 9,
      jatining: 'Selatan',
    },
    {
      no: 24,
      nama: 'Perangbakat',
      urip: 3,
      jatining: 'Barat Daya',
    },
    {
      no: 25,
      nama: 'Bala',
      urip: 7,
      jatining: 'Barat',
    },
    {
      no: 26,
      nama: 'Ugu',
      urip: 1,
      jatining: 'Barat Laut',
    },
    {
      no: 27,
      nama: 'Wayang',
      urip: 4,
      jatining: 'Utara',
    },
    {
      no: 28,
      nama: 'Klau',
      urip: 6,
      jatining: 'Timur Laut',
    },
    {
      no: 29,
      nama: 'Dukut',
      urip: 5,
      jatining: 'Timur',
    },
    {
      no: 30,
      nama: 'Watugunung',
      urip: 8,
      jatining: 'Tenggara',
    },
  ]
  return (
    <section>
      <div>
        <h3 className="mt-8 text-2xl md:text-3xl font-bold text-[#FFB400] ">
          Pawukon
        </h3>
        <p className="text-sm md:text-base font-light italic ">
          Terdapat 30 jenis Pawukon
        </p>
      </div>
      {/* Deskripsi */}
      <div className='mt-4 text-justify' >
        <p className='leading-8'>Wuku dalam bahasa Jawa Kuno, berarti ruas atau bagian. Satu kalender pawukon terdiri 30 ruas. Satu ruas terdiri dari 7 hari, sehingga total satu tahun dalam kalender pawukon adalah 210 hari.</p>
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
                  <th className="pb-4">Nama</th>
                  <th className="pb-4">Urip</th>
                  <th className="pb-4">Arah/Jatining</th>
                </tr>
              </thead>
              <tbody className='text-sm md:text-base'>
                {/* Map through the selected wara's data array to render table rows */}
                {showAll
                  ? pawukonData.map(({ no, nama, urip, jatining }) => (
                    <tr key={no} className={`${no % 2 === 0 ? 'bg-[#221D3C]' : 'bg-[#3D355E]'}`}>
                      <td className="py-5">{no}</td>
                      <td>{nama}</td>
                      <td>{urip}</td>
                      <td>{jatining}</td>
                    </tr>
                  ))
                  : pawukonData.slice(0, 5).map(({ no, nama, urip, jatining }) => (
                    <tr key={no} className={`${no % 2 === 0 ? 'bg-[#221D3C]' : 'bg-[#3D355E]'}`}>
                      <td className="py-5">{no}</td>
                      <td>{nama}</td>
                      <td>{urip}</td>
                      <td>{jatining}</td>
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
