// eslint-disable-next-line no-unused-vars
import React from 'react'
import CardBagianWariga from '../components/CardBagianWariga'

export default function Kerangka() {
  const dataKerangkaWariga = [
    {
      title: 'Wewaran',
      description: 'Perhitungan berdasarkan siklus hari yang terbagi menjadi 10 hari'
    },
    {
      title: 'Pawukon',
      description: 'Perhitungan yang terbagi menjadi beberapa ruas dimana 1 ruas terdiri dari 7 hari '
    },
    {
      title: 'Penanggal',
      description: 'Perhitungan berdasarkan peredaran bulan sesudah bulan mati sampai bulan purnama'
    },
    {
      title: 'Panglong',
      description: 'Perhitungan berdasarkan peredaran bulan sesudah purnama sampai bulan mati'
    },
    {
      title: 'Sasih',
      description: 'Perhitungan berdasarkan siklus peredaran bumi terhadap matahari'
    },
    {
      title: 'Dauh',
      description: 'Perhitungan berdasarkan waktu 1 hari (1 malam, 1 hari) dimulai dari matahari terbit'
    },

  ]
  return (
    <section className='my-16 lg:my-32 px-8 sm:px-12 lg:px-16 text-white flex flex-col gap-8 md:gap-12 '>
      {/* Judul Konten  */}
      <div className='font-bold text-4xl md:text-6xl text-center'>
        <h1>Bagian Kerangka <span className='text-[#FFB400] '>Wariga</span> </h1>
      </div>
      {/* Konten */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 '>
        {dataKerangkaWariga.map(({ title, description }, index) => (
          <CardBagianWariga key={index} title={title} description={description} />
        ))}
      </div>
    </section>
  )
}
