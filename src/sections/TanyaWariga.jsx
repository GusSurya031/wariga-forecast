// eslint-disable-next-line no-unused-vars
import React from 'react'
import TopMoon from '../assets/webp/top-moon.webp'
import LeftMoon from '../assets/webp/left-moon.webp'
import Accordion from '../components/Accordion';

export default function TanyaWariga() {
  const accordionData = [
    {
      title: 'Apa itu ramalan harian berdasarkan Wariga?',
      content: `Ramalan harian berdasarkan wariga merupakan suatu perhitungan kondisi seseorang berdasarkan baik kurangnya kondisi pada hari tersebut. Penentuan baik kurang baiknya dipengaruhi oleh beberapa faktor, faktor tersebut yang menjadi unsur perhitungannya, seperti wewaran, pawukon, penanggal dan panglong, sasih hingga dauh. Jadi unsur ini akan menjadi dasar perhitungan antara hari kelahiran seseorang dengan kondisi hari ini. `
    },
    {
      title: 'Apakah ramalan harian berdasarkan Wariga dapat membantu saya membuat keputusan dalam kehidupan sehari-hari?',
      content: `Hasil dari perhitungan yang ada pada ramalan harian berdasarkan wariga sebaiknya hanya digunakan sebagai bahan referensi, TIDAK DISARANKAN menjadi dasar dalam membuat keputusan.`
    },
    {
      title: 'Bagaimana saya bisa yakin bahwa ramalan harian yang diberikan sistem ini relevan dengan situasi saya?',
      content: `Ramalan harian Wariga saat ini hanya memberikan hasil berdasarkan kondisi hari ini dan kondisi hari lahir pengguna. Kedepannya sistem ini akan dikembangkan untuk memberikan hasil yang lebih akurat dengan memanfaatkan seluruh unsur yang ada. Untuk saat ini hanya menjadi perkembangan tahap awal untuk melihat respons pengguna.`
    },
    {
      title: 'Apakah sistem ini dapat digunakan oleh siapa pun, atau apakah ada batasan tertentu?',
      content: `Ramalan harian berdasarkan wariga dapat digunakan oleh siapapun, tidak ada batasan tertentu`
    }
  ];


  return (
    <section className='text-white mt-[120px] px-8 sm:px-12 sm:py-4 lg:px-16 flex flex-col gap-8 justify-center item-center'>
      <img src={TopMoon} alt="Moon With Yello Lightning" className='hidden md:block absolute right-0 top-[-10px] z-[-9]' />
      <img src={LeftMoon} alt="Moon With Yello Lightning" className='hidden md:block absolute left-0 bottom-[-80px] z-[-9]' />
      <div className='flex flex-col gap-4 text-center'>
        <h1 className='text-4xl lg:text-5xl font-bold'>Pertanyaan Terkait Dengan <span className='text-[#FFB400] '>Wariga</span> </h1>
        <p>Pertanyaan yang sering diajukan beserta dengan jawabannya</p>
      </div>
      <div className="mt-2 md:mt-8 lg:mt-12">
        {accordionData.map(({ title, content }) => (
          // eslint-disable-next-line react/jsx-key
          <Accordion title={title} content={content} />
        ))

        }
      </div>

    </section>
  );
}
