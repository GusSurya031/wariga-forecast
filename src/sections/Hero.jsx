// eslint-disable-next-line no-unused-vars
import React from 'react'
import NavBar from '../components/NavBar'
import TopMoon from '../assets/webp/top-moon.webp'
import LeftMoon from '../assets/webp/left-moon.webp'
import MiddleMoon from '../assets/webp/middle-moon.webp'

import { useState, useEffect } from 'react'
import { BalineseDate } from 'balinese-date-js-lib'


export default function Hero() {
  const [selectedDate, setSelectedDate] = useState("");
  const [showDate, setShowDate] = useState(false);
  const [showNotif, setShowNotif] = useState(false);
  // const [todayDate, setTodayDate] = useState("");
  const [resultIndonesia, setResultIndonesia] = useState("");
  const [bekelKahuripan, setBekelKahuripan] = useState("");
  const [balineseDateUser, setBalineseDateUser] = useState("");
  const [todayIndo, setTodayIndo] = useState("");

  //deklarasi tanggal hari ini dan menyesuaikan dengan waktu kalender bali
  const todayDate = new BalineseDate();
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  };

  useEffect(() => {
    const now = new Date();
    setTodayIndo(now.toLocaleDateString("id-ID", options));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const pancaWaraTodayDate = {
    name: todayDate.pancaWara.name,
    urip: todayDate.pancaWara.urip,
  };
  const saptaWaraTodayDate = {
    name: todayDate.saptaWara.name,
    urip: todayDate.saptaWara.urip,
  };
  // const wukuTodayDate = todayDate.wuku.name;

  //fungsi untuk memilih tanggal
  const handleDateChange = (event) => {
    const dateValue = event.target.value;
    setSelectedDate(dateValue);
  };

  const handleTampilkanClick = () => {
    if (selectedDate) {
      setShowDate(true);
      setShowNotif(false);
      //balinese set date user
      const userDate = new BalineseDate(new Date(selectedDate));

      const selectedDateObj = new Date(selectedDate);
      setResultIndonesia(selectedDateObj.toLocaleDateString("id-ID", options));

      const balineseDateUser = {
        dwiWara: {
          name: userDate.dwiWara.name,
          urip: userDate.dwiWara.urip,
        },
        triWara: {
          name: userDate.ekaWara.name,
          urip: userDate.ekaWara.name,
        },
        caturWara: {
          name: userDate.caturWara.name,
          urip: userDate.caturWara.urip,
        },
        pancaWara: {
          name: userDate.pancaWara.name,
          urip: userDate.pancaWara.urip,
        },
        sadWara: {
          name: userDate.sadWara.name,
          urip: userDate.sadWara.urip,
        },
        saptaWara: {
          name: userDate.saptaWara.name,
          urip: userDate.saptaWara.urip,
        },
        astaWara: {
          name: userDate.astaWara.name,
          urip: userDate.astaWara.urip,
        },
        sangaWara: {
          name: userDate.sangaWara.name,
          urip: userDate.sangaWara.urip,
        },
        dasaWara: {
          name: userDate.dasaWara.name,
          urip: userDate.dasaWara.urip,
        },
        lintang: userDate.lintang.name,
        sasih: userDate.sasih.name,
        wukuUser: userDate.wuku.name,
        saka: userDate.saka,
      };
      // console.log(balineseDateUser);
      // console.log(balineseDateUser.pancaWara.urip);
      // console.log(balineseDateUser.saptaWara.urip);


      setBalineseDateUser(balineseDateUser);

      // const bekelKahuripan = pancaWaraUser.urip + saptaWaraUser.urip;
      const bekelKahuripan = (uripUser, uripHariIni) => {
        //index 0 untuk pancawara
        //index 1 untuk saptawara
        const totalUripUser = uripUser[0].urip + uripUser[1].urip;
        const totalUripHariIni = uripHariIni[0].urip + uripHariIni[1].urip;

        console.log(totalUripUser, totalUripHariIni);
        const result = (totalUripUser + totalUripHariIni) % 4;
        if (result == 1) {
          return `Bekel Kahuripan Anda hari ini adalah Guru`;
        } else if (result == 2) {
          return `Bekel Kahuripan Anda hari ini adalah Ratu`;
        } else if (result == 3) {
          return `Bekel Kahuripan Anda hari ini adalah Lara`;
        } else {
          return `Bekel Kahuripan Anda hari ini adalah Pati`;
        }
      };
      setBekelKahuripan(bekelKahuripan(
        [balineseDateUser.pancaWara, balineseDateUser.saptaWara],
        [pancaWaraTodayDate, saptaWaraTodayDate]
      ));
    } else {
      setShowNotif(true);
      console.log("Pilih tanggal terlebih dahulu.");
    }
  };
  return (
    <section className="h-screen relative flex flex-col items-center px-[64px]">
      <img src={TopMoon} alt="Moon With Yello Lightning" className='hidden md:block absolute right-0 top-[-10px] z-[-9]' />
      <img src={LeftMoon} alt="Moon With Yello Lightning" className='hidden md:block absolute left-0 bottom-[-80px] z-[-9]' />
      {/* main content */}
      <div className='mt-[80px]'>
        {/* title  */}
        <div className='text-white text-center flex flex-col gap-4'>
          <h1 className='text-[64px] font-bold ' >Apa kata <span className='text-[#FFB400]'>Wariga</span> terkait harimu?</h1>
          <p className='max-w-[800px] w-full m-auto'>Mari lihat ramalanmu berdasarkan wariga dengan perhitungan unsur dasar matematis, sistematis, geografis, dan juga religius</p>
        </div>
        {/* konten untuk input tanggal */}
        <div className='mt-6 flex flex-col gap-4 max-w-[652px] m-auto text-center'>
          {/* label lahir */}
          <div className=''>
            <label
              htmlFor="tanggal-lahir"
              className="text-sm text-[#ffffff]/50"
            >
              Tanggal Lahir
            </label>
            {/* Form Input tanggal */}
            <div className="mt-2">
              <input
                id="tanggal-lahir" name="tanggal-lahir" type="date"
                onChange={handleDateChange}
                required
                className="block w-full rounded-md border-0 py-3 px-5 shadow-sm ring-1 ring-[#FFB400] text-white focus:ring-2 focus:ring-[#E2A000] sm:text-sm sm:leading-6 transparent bg-transparent"
              />
            </div>
          </div>
          {/* button konfirmasi */}
          <div>
            <button
              type="submit"
              onClick={() => {
                handleTampilkanClick();
              }}
              className="flex w-full justify-center rounded-md bg-[#0056D7] py-3 px-5 text-md font-semibold leading-6 text-white shadow-sm hover:bg-[#0056D7]/60 mb-8"
            >
              Konfirmasi
            </button>
          </div>
        </div>
      </div>
      <img src={MiddleMoon} alt="Moon With Yello Lightning" className='hidden md:block absolute z-[-9] bottom-0' />
    </section>
  )
}
