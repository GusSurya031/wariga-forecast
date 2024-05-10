// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'

export default function Wewaran() {
  const [selectedWara, setSelectedWara] = useState('ekaWara'); // Default to ekaWara
  const handleButtonClick = (waraName) => {
    setSelectedWara(waraName);
  };
  const waraData = {
    ekaWara: [
      {
        no: 1,
        nama: 'Luang',
        urip: 1,
        arah: 'Barat Laut',
      }
    ],
    dwiWara: [
      {
        no: 1,
        nama: 'Menga',
        urip: '5',
        arah: 'Timur'
      },
      {
        no: 2,
        nama: 'Pepet',
        urip: '4',
        arah: 'Utara'
      },
    ],
    triWara: [
      {
        no: 1,
        nama: 'Dora',
        urip: '9',
        arah: 'Selatan'
      },
      {
        no: 2,
        nama: 'Wahya',
        urip: '4',
        arah: 'Utara'
      },
      {
        no: 3,
        nama: 'Bryantara',
        urip: '7',
        arah: 'Barat'
      }
    ],
    caturWara: [
      {
        no: 1,
        nama: 'Sri',
        urip: 6,
        arah: 'Timur Laut'
      },
      {
        no: 2,
        nama: 'Laba',
        urip: 3,
        arah: 'Barat Daya'
      },
      {
        no: 3,
        nama: 'Jaya',
        urip: 1,
        arah: 'Barat Laut'
      },
      {
        no: 4,
        nama: 'Mandala',
        urip: 8,
        arah: 'Tenggara'
      }
    ],
    pancaWara: [
      {
        no: 1,
        nama: 'Umanis',
        urip: 5,
        arah: 'Timur'
      },
      {
        no: 2,
        nama: 'Paing',
        urip: 9,
        arah: 'Selatan'
      },
      {
        no: 3,
        nama: 'Pon',
        urip: 7,
        arah: 'Barat'
      },
      {
        no: 4,
        nama: 'Wage',
        urip: 4,
        arah: 'Utara'
      },
      {
        no: 5,
        nama: 'Kliwon',
        urip: 8,
        arah: 'Tengah'
      }
    ],
    sadWara: [
      {
        no: 1,
        nama: 'Tungleh',
        urip: 7,
        arah: 'Barat'
      },
      {
        no: 2,
        nama: 'Aryang',
        urip: 6,
        arah: 'Timur Laut'
      },
      {
        no: 3,
        nama: 'Urukung',
        urip: 5,
        arah: 'Timur'
      },
      {
        no: 4,
        nama: 'Paniron',
        urip: 8,
        arah: 'Tenggara'
      },
      {
        no: 5,
        nama: 'Was',
        urip: 9,
        arah: 'Selatan'
      },
      {
        no: 6,
        nama: 'Maulu',
        urip: 3,
        arah: 'Barat Daya'
      }
    ],
    saptaWara: [
      {
        no: 1,
        nama: 'Redite',
        urip: 5,
        arah: 'Timur'
      },
      {
        no: 2,
        nama: 'Soma',
        urip: 4,
        arah: 'Utara'
      },
      {
        no: 3,
        nama: 'Anggara',
        urip: 3,
        arah: 'Barat Daya'
      },
      {
        no: 4,
        nama: 'Buda',
        urip: 7,
        arah: 'Barat'
      },
      {
        no: 5,
        nama: 'Wrespati',
        urip: 8,
        arah: 'Tenggara'
      },
      {
        no: 6,
        nama: 'Sukra',
        urip: 6,
        arah: 'Timur Laut'
      },
      {
        no: 7,
        nama: 'Saniscara',
        urip: 9,
        arah: 'Selatan'
      }
    ],
    astaWara: [
      {
        no: 1,
        nama: 'Sri',
        urip: 6,
        arah: 'Timur Laut'
      },
      {
        no: 2,
        nama: 'Indra',
        urip: 5,
        arah: 'Timur'
      },
      {
        no: 3,
        nama: 'Guru',
        urip: 8,
        arah: 'Tenggara'
      },
      {
        no: 4,
        nama: 'Yama',
        urip: 9,
        arah: 'Selatan'
      },
      {
        no: 5,
        nama: 'Ludra',
        urip: 3,
        arah: 'Barat Daya'
      },
      {
        no: 6,
        nama: 'Brahma',
        urip: 6,
        arah: 'Barat'
      },
      {
        no: 7,
        nama: 'Kala',
        urip: 1,
        arah: 'Barat Laut'
      },
      {
        no: 8,
        nama: 'Uma',
        urip: 4,
        arah: 'Utara'
      }
    ],
    sangaWara: [
      {
        no: 1,
        nama: 'Dangu',
        urip: 5,
        arah: 'Timur'
      },
      {
        no: 2,
        nama: 'Jangur',
        urip: 8,
        arah: 'Tenggara'
      },
      {
        no: 3,
        nama: 'Gigis',
        urip: 9,
        arah: 'Selatan'
      },
      {
        no: 4,
        nama: 'Nohan',
        urip: 3,
        arah: 'Barat Daya'
      },
      {
        no: 5,
        nama: 'Ogan',
        urip: 7,
        arah: 'Barat'
      },
      {
        no: 6,
        nama: 'Erangan',
        urip: 1,
        arah: 'Barat Laut'
      },
      {
        no: 7,
        nama: 'Urungan',
        urip: 4,
        arah: 'Utara'
      },
      {
        no: 8,
        nama: 'Tulus',
        urip: 6,
        arah: 'Timur Laut'
      },
      {
        no: 9,
        nama: 'Dadi',
        urip: 8,
        arah: 'Tengah'
      }
    ],
    dasaWara: [
      {
        no: 1,
        nama: 'Pandita',
        urip: 5,
        arah: 'Sura'
      },
      {
        no: 2,
        nama: 'Pati',
        urip: 7,
        arah: 'Kala Mertyu'
      },
      {
        no: 3,
        nama: 'Suka',
        urip: 10,
        arah: 'Sang Hyang Smara'
      },
      {
        no: 4,
        nama: 'Duka',
        urip: 4,
        arah: 'Durga'
      },
      {
        no: 5,
        nama: 'Sri',
        urip: 6,
        arah: 'Maha Merta'
      },
      {
        no: 6,
        nama: 'Manuh',
        urip: 2,
        arah: 'Kala Rupa'
      },
      {
        no: 7,
        nama: 'Manusa',
        urip: 3,
        arah: 'Sang Hyang Suksma'
      },
      {
        no: 8,
        nama: 'Raja',
        urip: 8,
        arah: 'Kala Ngis'
      },
      {
        no: 9,
        nama: 'Dewa',
        urip: 9,
        arah: 'Sang Hyang Dharma'
      },
      {
        no: 10,
        nama: 'Raksasa',
        urip: 1,
        arah: 'Sang Hyang Kalamoha'
      }
    ]
  }
  const waraTitle = [
    {
      id: 'ekaWara',
      title: 'Eka Wara',
      subTitle: 'Kelompok satu (1) dari sepuluh kelompok wewaran',
    },
    {
      id: 'dwiWara',
      title: 'Dwi Wara',
      subTitle: 'Kelompok dua (2) dari sepuluh kelompok wewaran',
    },
    {
      id: 'triWara',
      title: 'Tri Wara',
      subTitle: 'Kelompok tiga (3) dari sepuluh kelompok wewaran',
    },
    {
      id: 'caturWara',
      title: 'Catur Wara',
      subTitle: 'Kelompok empat (4) dari sepuluh kelompok wewaran',
    },
    {
      id: 'pancaWara',
      title: 'Panca Wara',
      subTitle: 'Kelompok lima (5) dari sepuluh kelompok wewaran',
    },
    {
      id: 'sadWara',
      title: 'Sad Wara',
      subTitle: 'Kelompok enam (6) dari sepuluh kelompok wewaran',
    },
    {
      id: 'saptaWara',
      title: 'Sapta Wara',
      subTitle: 'Kelompok tujuh (7) dari sepuluh kelompok wewaran',
    },
    {
      id: 'astaWara',
      title: 'Asta Wara',
      subTitle: 'Kelompok delapan (8) dari sepuluh kelompok wewaran',
    },
    {
      id: 'sangaWara',
      title: 'Sanga Wara',
      subTitle: 'Kelompok sembilan (9) dari sepuluh kelompok wewaran',
    },
    {
      id: 'dasaWara',
      title: 'Dasa Wara',
      subTitle: 'Kelompok sepuluh (10) dari sepuluh kelompok wewaran',
    },

  ]
  return (
    <section>
      <div>
        <h3 className="text-2xl md:text-3xl font-bold text-[#FFB400]">
          Daftar Wewaran
        </h3>
        <p className="text-sm md:text-base font-light italic ">
          Wewaran terdiri dari 10 kelompok
        </p>
      </div>
      {/* Deskripsi */}
      <div className='mt-4 text-justify' >
        <p className='leading-8'>Wewaran mempunyai pengaruh paling kecil dalam penentuan dewasa, sebab wewaran termasuk hari pasaran dalam tahun wuku yang diterapkan di Bali. Sistem wewaran juga penting dalam penentuan padewasan dalam suatu kegiatan sebab integrasi wewaran dengan unsur lain yang membangun sistem wariga akan melahirkan padewasan baik untuk suatu kegiatan dan tidak baik untuk kegiatan lain (ala ayuning dewasa).</p>
      </div>
      {/* Jenis-jenis wewaran */}
      <div className="mt-4 grid grid-cols-3 md:grid md:grid-cols-5 gap-4 justify-center" >
        {waraTitle.map(({ id, title }) => (
          <button
            key={id}
            className={`text-sm px-4 py-2 md:py-3 bg-[#0056D7] rounded-md hover:bg-[#E2A000] ${selectedWara === id ? 'bg-[#E2A000] text-white' : ''
              }`}
            onClick={() => handleButtonClick(id)}
          >
            {title}
          </button>
        ))
        }
      </div >
      {/* Wewaran ke-N */}
      < div className='lg:mx-24 mt-8' >
        {/* Title tabel */}
        {selectedWara !== null && (
          <div>
            {waraTitle
              .filter(({ id }) => id === selectedWara)
              .map(({ id, subTitle, title }) => (
                <div key={id}>
                  <h3 className="text-2xl font-bold text-[#FFB400]">{title}</h3>
                  <p className="text-sm md:text-base font-light italic">{subTitle}</p>
                </div>
              ))}
          </div>
        )}
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
              <tbody>
                {/* Map through the selected wara's data array to render table rows */}
                {waraData[selectedWara].map(({ no, nama, urip, arah }, index) => (
                  <tr key={no} className={`text-sm md:text-base ${index % 2 === 0 ? 'bg-[#221D3C]' : 'bg-[#3D355E]'}`} >
                    <td className="py-5">{no}</td>
                    <td>{nama}</td>
                    <td>{urip}</td>
                    <td>{arah}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div >
      </div >
    </section>
  )
}
