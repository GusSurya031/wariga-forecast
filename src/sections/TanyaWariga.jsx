// eslint-disable-next-line no-unused-vars
import React from 'react'
import TopMoon from '../assets/webp/top-moon.webp'
import LeftMoon from '../assets/webp/left-moon.webp'
import Accordion from '../components/Accordion';

export default function TanyaWariga() {
  const accordionData = [
    {
      title: 'Section 1',
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`
    },
    {
      title: 'Section 2',
      content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
      reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
      quaerat iure quos dolorum accusantium ducimus in illum vero commodi
      pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
      quidem maiores doloremque est numquam praesentium eos voluptatem amet!
      Repudiandae, mollitia id reprehenderit a ab odit!`
    },
    {
      title: 'Section 3',
      content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
      quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
      dolor ut sequi minus iste? Quas?`
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
