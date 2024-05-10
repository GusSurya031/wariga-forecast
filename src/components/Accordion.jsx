// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
// eslint-disable-next-line react/prop-types
const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className="md:max-w-[75%] md:w-full md:m-auto rounded-xl bg-gradient-to-br from-[#493E84] to-[#946800] p-0.5 my-4 md:my-4"
      onClick={() => setIsActive(!isActive)}
    >
      <div className='bg-[#141124] rounded-xl '>

        <div className="title flex justify-between cursor-pointer p-4 ">

          <div className={isActive ? 'font-bold text-lg text-[#FFB400]  ' : 'font-bold text-lg text-white hover:text-[#FFB400] '}>{title}</div>
          <div>{isActive ? '-' : '+'}</div>
        </div>
        <Transition
          show={isActive}
          enter="transition-all ease-in-out duration-500"
          enterFrom="opacity-0 -translate-y-6"
          enterTo="opacity-100 translate-y-0"
          leave="transition-all ease-in-out duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          {isActive && <div className="border-t-2 border-[#FFB400] p-4 text-justify leading-8">{content}</div>}
        </Transition>
      </div>
    </div>
  );
};

export default Accordion;