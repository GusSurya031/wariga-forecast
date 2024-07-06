// eslint-disable-next-line no-unused-vars
import React from 'react'
import TopMoon from '../assets/webp/top-moon.webp'
import LeftMoon from '../assets/webp/left-moon.webp'
import MiddleMoon from '../assets/webp/middle-moon.webp'


import { useState, useEffect } from 'react'
import { BalineseDate } from 'balinese-date-js-lib'
import { Transition } from '@headlessui/react';

//import wayang 
import WayangSinta from '../assets/webp/sinta_sanghyan_yamadipati.webp';
import WayangLandep from '../assets/webp/landep_sanghyang_mahadewa.webp';
import WayangUkir from '../assets/webp/ukir_sanghyang_mahayukti.webp';
import WayangKulantir from '../assets/webp/kulantir_sanghyang_langsur.webp';
import WayangTaulu from '../assets/webp/taulu_sanghyang_bayu.webp';
import WayangGumbreg from '../assets/webp/gumbreg_sanghyang_candra.webp';
import WayangWariga from '../assets/webp/wariga_sanghyang_smara.webp';
import WayangWarigadean from '../assets/webp/warigadean_sanghyang_maharsi.webp';
import WayangJulungwangi from '../assets/webp/julungwangi_sanghyang_sambhu.webp';
import WayangSungsang from '../assets/webp/sungsang_sanghyang_gana.webp';
import WayangDunggulan from '../assets/webp/dunggulan_sanghyang_kamajaya.webp';
import WayangKuningan from '../assets/webp/kuningan_sanghyang_indra.webp';
import WayangLangkir from '../assets/webp/langkir_sanghyang_kala.webp';
import WayangMedangsia from '../assets/webp/medangsia_sanghyang_brahma.webp';
import WayangPujut from '../assets/webp/pujut_sanghyang_gurtna.webp';
import WayangPahang from '../assets/webp/pahang_sanghyang_tantra.webp';
import WayangKrulut from '../assets/webp/krulut_sanghyang_wisnu.webp';
import WayangMerakih from '../assets/webp/merakih_sanghyang_surenggana.webp';
import WayangTambir from '../assets/webp/tambir_sanghyang_siwa.webp';
import WayangMedangkungan from '../assets/webp/medangkungan_sanghyang_basuki.webp';
import WayangMatal from '../assets/webp/matal_sanghyang_sakri.webp';
import WayangUye from '../assets/webp/uye_sanghyang_kwera.webp';
import WayangMenail from '../assets/webp/menail_sanghyang_citragotra.webp';
import WayangPerangbakat from '../assets/webp/perangbakat_sanghyang_bhisma.webp';
import WayangBala from '../assets/webp/bala_sanghyang_durga.webp';
import WayangUgu from '../assets/webp/ugu_sanghyang_singhajadma.webp';
import WayangWayang from '../assets/webp/wayang_bhatara_sri.webp';
import WayangKelawu from '../assets/webp/kelawu_sanghyang_sadhana.webp';
import WayangDukut from '../assets/webp/dukut_sanghyang_baruna.webp';
import WayangWatugunung from '../assets/webp/watugunung_sanghyang_anantabhoga.webp';


export default function Hero() {
  const [selectedDate, setSelectedDate] = useState("");
  const [showDate, setShowDate] = useState(false);
  const [showNotif, setShowNotif] = useState(false);
  const [resultIndonesia, setResultIndonesia] = useState("");
  const [balineseDateUser, setBalineseDateUser] = useState("");
  const [todayIndo, setTodayIndo] = useState("");
  const [caturBekelKahuripan, setCaturBekelKahuripan] = useState("");
  const [rekomendasiRamalan, setRekomendasiRamalan] = useState("");
  const [day, setDay] = useState("");

  //deklarasi tanggal hari ini dan menyesuaikan dengan waktu kalender bali
  const todayDate = new BalineseDate();
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  };

  const wayang = {
    Sinta: WayangSinta,
    Landep: WayangLandep,
    Ukir: WayangUkir,
    Kulantir: WayangKulantir,
    Tolu: WayangTaulu,
    Gumbreg: WayangGumbreg,
    Wariga: WayangWariga,
    Warigadean: WayangWarigadean,
    Julungwangi: WayangJulungwangi,
    Sungsang: WayangSungsang,
    Dungulan: WayangDunggulan,
    Kuningan: WayangKuningan,
    Langkir: WayangLangkir,
    Medangsia: WayangMedangsia,
    Pujut: WayangPujut,
    Pahang: WayangPahang,
    Krulut: WayangKrulut,
    Merakih: WayangMerakih,
    Tambir: WayangTambir,
    Medangkungan: WayangMedangkungan,
    Matal: WayangMatal,
    Uye: WayangUye,
    Menail: WayangMenail,
    Prangbakat: WayangPerangbakat,
    Bala: WayangBala,
    Ugu: WayangUgu,
    Wayang: WayangWayang,
    Klawu: WayangKelawu,
    Dukut: WayangDukut,
    Watugunung: WayangWatugunung,
  }

  useEffect(() => {
    const now = new Date();
    setTodayIndo(now.toLocaleDateString("id-ID", options));
    setDay((now.toLocaleDateString("id-Id", options).split(','))[0]);
    // console.log(day);
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
  const wukuTodayDate = todayDate.wuku.name;

  //fungsi untuk memilih tanggal
  const handleDateChange = (event) => {
    const dateValue = event.target.value;
    setSelectedDate(dateValue);
  };

  const caturBekelKahuripans = [
    {
      value: 1,
      title: 'Guru',
      content: `Guru adalah kondisi dimana seseorang dinilai memiliki kepribadian yang mampu memberikan bimbingan layaknya seorang guru. Tidak hanya membagikan pemahaman kepada orang lain, seseorang yang berada pada kondisi ini juga dinilai mendapatkan pencerahan terhadap suatu hambatan. Sehingga alangkah baiknya untuk memberikan kesempatan baik kepada sesama`
    },
    {
      value: 2,
      title: 'Ratu',
      content: `Ratu adalah kondisi dimana seseorang dinilai memiliki kepribadian seperti pemimpin layaknya seorang ratu. Pada kondisi ini, orang tersebut dapat mengatasi, memimpin dan memberikan solusi yang mendukung kepada orang lain.`
    },
    {
      value: 3,
      title: 'Lara',
      content: `Lara adalah kondisi dimana seseorang dinilai sedang dalam kondisi yang rawan terhadap gangguan atau ketidakseimbangan kondisi tubuh. Dalam artian, seseorang rentan akan sakit sehingga akan terganggu dalam beraktivitas. Pada kondisi ini, seseorang disarankan untuk tidak mengambil banyak aktivitas`
    },
    {
      value: 0,
      title: 'Pati',
      content: `Pati adalah kondisi dimana seseorang dinilai memiliki hambatan yang begitu besar sehingga seakan-akan orang tersebut stuck atau terdiam di fase tertentu. Seseorang yang berada pada kondisi ini sedang memiliki banyak pikiran sehingga merasa bingung untuk memulai dari hal mana. Disarankan untuk beristirahat yang cukup dan mengindari dalam membuat keputusan yang berdampak besar.`
    },
  ];

  const saranRamalan = [
    {
      hari: 'Minggu',
      warna: 'yang berwarna netral seperti warna putih atau dominan warna putih mengindikasikan untuk mewakili kesan yang luas dan tersorot. Hal ini memberikan kesan bersih dan segar serta rapi ketika memulai hari.',
      angka: 5,
      arah: 'Timur',
      japa: 'Sa',
    },
    {
      hari: 'Senin',
      warna: 'yang berwarna gelap seperti warna hitam, biru gelap atau warna ungu mengindikasikan dalam mewakili kesan yang anggun dan memunculkan daya tarik. Hal ini memberikan kesan kebijaksanaan dan ketenangan sehingga memunculkan kedamaian dalam diri. ',
      arah: 'Utara',
      angka: 4,
      japa: 'A',
    },
    {
      hari: 'Selasa',
      warna: 'yang berwarna hangat seperti warna oranye yang merupakan perpaduan dari warna merah dan juga kuning mengindikasikan perwakilan energi yang sedang dirasakan. Ketika anda merasa kurang bersemangat, penggunaan warna ini menjadi gairah tersendiri karena dapat membangkitkan suasana hati',
      arah: 'Barat Daya',
      angka: 3,
      japa: 'Ma',
    },
    {
      hari: 'Rabu',
      warna: 'yang berwarna hangat seperti warna kuning mengindikasikan perwakilan perasaan yang begitu kuat sehingga merasa energik dan ceria. Hampir sama dengan warna hangat lainnya, ketika anda merasa kurang bersemangat, penggunaan warna ini menjadi gairah tersendiri karena dapat membangkitkan suasana hati. Akan tetapi, warna kuning yang berlebihan menimbulkan emosi ketika suasana tidak stabil',
      arah: 'Barat',
      angka: 7,
      japa: 'Ta',
    },
    {
      hari: 'Kamis',
      warna: 'yang berwarna feminin seperti warna merah muda mengindikasikan perwakilan kasih sayang bagi semua orang. Hal ini memberikan kesan kelembutan, kepolosan dan juga keindahan. Ketika suasana sedang tidak stabil, warna ini juga mampu memberikan semangat dan kebahagiaan',
      arah: 'Tenggara',
      angka: 8,
      japa: 'Na',
    },
    {
      hari: 'Jumat',
      warna: 'yang berwarna cenderung tidak gelap dan tidak terang seperti warna abu-abu mengindikasikan warna yang praktis dan cenderung stabil. Hal ini memberikan kesan profesionalisme dan keseriusan dalam melakukan sebuah aktivitas.  ',
      arah: 'Timur Laut',
      angka: 6,
      japa: 'Wa',
    },
    {
      hari: 'Sabtu',
      warna: 'yang berwarna cenderung hangat seperti warna merah mengindikasikan warna yang menimbulkan dominasi dan keberanian. Ketika kondisi anda sedang tidak mood, warna ini dapat memberikan stimulan dalam memperbaiki mood anda seperti menstimulasi selera makan dan memperbaiki fokus akan akurasi dari tugas-tertentu',
      arah: 'Selatan',
      angka: 9,
      japa: 'Ba',
    },
  ]
  const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];

  const handleTampilkanClick = () => {
    if (selectedDate) {
      setShowDate(true);
      setShowNotif(false);
      //balinese set date user
      const userDate = new BalineseDate(new Date(selectedDate));

      const selectedDateObj = new Date(selectedDate);
      setResultIndonesia(selectedDateObj.toLocaleDateString("id-ID", options));

      const balineseDateUser = {
        pancaWara: {
          name: userDate.pancaWara.name,
          urip: userDate.pancaWara.urip,
        },
        saptaWara: {
          name: userDate.saptaWara.name,
          urip: userDate.saptaWara.urip,
        },
        sasih: userDate.sasih.name,
        wukuUser: userDate.wuku.name,
        saka: userDate.saka,
      };

      setBalineseDateUser(balineseDateUser);

      // const bekelKahuripan = pancaWaraUser.urip + saptaWaraUser.urip;
      const bekelKahuripan = (uripUser, uripHariIni) => {
        //index 0 untuk pancawara
        //index 1 untuk saptawara
        const totalUripUser = uripUser[0].urip + uripUser[1].urip;
        const totalUripHariIni = uripHariIni[0].urip + uripHariIni[1].urip;

        const result = (totalUripUser + totalUripHariIni) % 4;
        let res, ramalanHariIni;

        if (result === 1 || result === 2) {
          ramalanHariIni = saranRamalan.find(item => item.hari === day);
          // console.log(ramalanHariIni);
          if (result === 1) {
            res = caturBekelKahuripans.find(item => item.value === 1);
            // console.log(res);
          } else {
            res = caturBekelKahuripans.find(item => item.value === 2);
          }

        } else {
          const nextDay = days[(days.indexOf(day) + 1) % days.length];
          ramalanHariIni = saranRamalan.find(item => item.hari === nextDay)
          if (result === 3) {
            res = caturBekelKahuripans.find(item => item.value === 3);
          } else {
            res = caturBekelKahuripans.find(item => item.value === 0);
          }

        }
        setRekomendasiRamalan(ramalanHariIni);
        setCaturBekelKahuripan(res);
      };

      bekelKahuripan(
        [balineseDateUser.pancaWara, balineseDateUser.saptaWara],
        [pancaWaraTodayDate, saptaWaraTodayDate]
      );
    } else {
      setShowNotif(true);
      console.log("Pilih tanggal terlebih dahulu.");
    }
  };
  return (
    <>
      <section className="lg:h-screen relative flex flex-col items-center px-8 sm:px-12 sm:py-4 lg:px-16">
        <img src={TopMoon} alt="Moon With Yello Lightning" className='hidden md:block absolute right-0 top-[-10px] z-[-9]' />
        <img src={LeftMoon} alt="Moon With Yello Lightning" className='hidden md:block absolute left-0 bottom-[-80px] z-[-9]' />
        {/* main content */}
        <div className='mt-16 sm:mt-20'>
          {/* title  */}
          <div className='text-white text-center flex flex-col gap-4'>
            <h1 className='text-5xl lg:text-7xl font-bold'>Apa kata <span className='text-[#FFB400]'>Wariga</span> terkait harimu?</h1>
            <p className='max-w-[800px] w-full text-sm font-light md:text-base m-auto md:leading-8'>Mari lihat ramalanmu berdasarkan wariga dengan perhitungan unsur dasar matematis, sistematis, geografis, dan juga religius</p>
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
            <div>
              <Transition
                show={showDate}
                enter="transition-all ease-in-out duration-500"
                enterFrom="opacity-0 -translate-y-6"
                enterTo="opacity-100 translate-y-0"
              >
                {showDate && (
                  <div className="grid grid-cols-3 w-full rounded-md bg-[#FFB400]">
                    <p className='col-span-2 text-white drop-shadow-xl font-bold md:text-lg italic p-3 '>Bekel Kahuripan Anda saat ini adalah : </p>
                    <p className='col-span-1 bg-white rounded-md text-[#FFB400] drop-shadow-md font-bold text-xl italic flex justify-center items-center'>
                      {caturBekelKahuripan.title}
                    </p>
                  </div>
                )}
              </Transition>
              {showNotif && (
                <div className="w-full m-auto rounded-md bg-red-500 backdrop-blur-sm">
                  <p className='font-bold italic text-white p-3'>Anda Belum Memilih Tanggal</p>
                </div>
              )}
            </div>
          </div>
        </div>
        <img src={MiddleMoon} alt="Moon With Yello Lightning" className='hidden lg:block absolute z-[-9] bottom-0' />
      </section>
      <Transition
        show={showDate}
        enter="transition-all ease-in-out duration-500"
        enterFrom="opacity-0 -translate-y-6"
        enterTo="opacity-100 translate-y-0"
      >
        {showDate && (
          // bg gradient buat outline
          <section className='my-8 md:my-16 w-full max-w-[85%] sm:max-w-[75%]  mx-auto bg-gradient-to-br from-[#493E84] p-0.5 to-[#946800] rounded-xl'>
            {/* bg ungu */}
            <div className='bg-[#141124] rounded-xl py-6 px-4 md:p-6 md:p-8 lg:p-12'>
              {/* tanggal hari ini dan tanggal lahir */}
              <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4 mb-12">
                <div className="flex flex-col items-center text-center sm:text-left sm:items-start gap-6 text-left">
                  <div className='flex flex-col gap-2'>
                    <h3 className="text-[#FFB400] ">
                      Tanggal Hari ini:
                    </h3>
                    <div className="flex flex-col sm:flex-row gap-4 font-bold text-white items-center">
                      <p className='text-lg'>
                        {todayIndo}
                      </p>
                      <div className='flex gap-4' >
                        {" | "}
                        <span className="font-light italic">
                          {pancaWaraTodayDate.name}
                        </span>
                        {" | "}
                        <span className="font-light italic">
                          {saptaWaraTodayDate.name}
                        </span>
                        {" | "}
                        <span className="font-light italic">
                          {wukuTodayDate}
                        </span>
                        {" | "}
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className=" text-[#FFB400] mb-2">
                      Tanggal Lahir Anda:
                    </h3>
                    <p className="text-lg font-bold text-white ">
                      {resultIndonesia}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 md:gap-x-4 gap-y-8 item-center">
                    <div className="flex flex-col gap-2">
                      <h3 className=" text-[#FFB400] ">
                        Panca Wara:
                      </h3>
                      <p className="text-lg font-bold text-white ">
                        {balineseDateUser.pancaWara.name}
                      </p>
                    </div>

                    <div className="flex flex-col gap-2">
                      <h3 className=" text-[#FFB400] ">
                        Sapta Wara:
                      </h3>
                      <p className="text-lg font-bold text-white ">
                        {balineseDateUser.saptaWara.name}
                      </p>
                    </div>
                    <div className="col-span-2 md:col-span-1 flex flex-col gap-2">
                      <h3 className=" text-[#FFB400] ">
                        Wuku:
                      </h3>
                      <p className="text-lg font-bold text-white ">
                        {balineseDateUser.wukuUser}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <img
                    src={wayang[balineseDateUser.wukuUser]}
                    alt={`Gambar Wayang ${balineseDateUser.wukuUser}`}
                    width={150}
                  />
                  <figcaption className="text-center text-white">
                    Wayang {balineseDateUser.wukuUser}
                  </figcaption>
                </div>
              </div>

              {/* Ramalan Harian */}
              <div className="mb-12">
                <div className="">
                  <div className="bg-[#10398E] text-[#E2A000] px-4 sm:px-4 lg:px-8 py-4 rounded-t-xl md:rounded-t-2xl">
                    <p className='text-lg sm:text-3xl text-center sm:text-left font-bold '>Ramalan Harian</p>
                  </div>
                  <div className="mx-2 md:mx-4 lg:mx-8 text-white my-5">
                    <div className="">
                      <p className='font-light leading-8 text-justify'>
                        Ramalan ini dibuat berdasarkan sumber lontar dari bali
                        sesuai dengan ilmu yang bernama wariga. Ilmu wariga di
                        Bali sesungguhnya mengajarkan kepada umat manusia di
                        muka bumi ini bahwa benda-benda bersinar di langit
                        memengaruhi jagar raya. Benda-benda tersebut menjadi
                        daasar perhitungan wariga, sebab unsur-unsur yang
                        membangun sistem wariga tersebut merupakan simbol benda
                        - benda langit tersebut
                      </p>
                    </div>
                    <div className="my-8">
                      <div>
                        <h3 className="text-lg text-center text-[#FFB400] md:text-left md:text-white md:text-xl font-bold">
                          Hasil Perhitungan Ramalan Hari Ini
                        </h3>
                        <div className="flex flex-wrap justify-center sm:justify-start my-4 gap-3 ">
                          <div className={caturBekelKahuripan.value == 1 ? "flex flex-col items-center bg-[#FFB400] max-w-16 w-full text-lg md:text-xl font-bold rounded-lg text-center px-16 py-10 shadow-md shadow-[#FFB400]/50" : "flex flex-col items-center bg-[#10398E] max-w-16 w-full text-lg md:text-xl rounded-lg text-center px-16 py-10"} >
                            <p>Guru</p>
                          </div>
                          <div className={caturBekelKahuripan.value == 2 ? "flex flex-col items-center bg-[#FFB400] max-w-16 w-full text-lg md:text-xl font-bold rounded-lg text-center px-16 py-10 shadow-md shadow-[#FFB400]/50" : "flex flex-col items-center bg-[#10398E] max-w-16 w-full text-lg md:text-xl rounded-lg text-center px-16 py-10"} >
                            <p>Ratu</p>
                          </div>
                          <div className={caturBekelKahuripan.value == 3 ? "flex flex-col items-center bg-[#FFB400] max-w-16 w-full text-lg md:text-xl font-bold rounded-lg text-center px-16 py-10 shadow-md shadow-[#FFB400]/50" : "flex flex-col items-center bg-[#10398E] max-w-16 w-full text-lg md:text-xl rounded-lg text-center px-16 py-10"} >
                            <p>Lara</p>
                          </div>
                          <div className={caturBekelKahuripan.value == 0 ? "flex flex-col items-center bg-[#FFB400] max-w-16 w-full text-lg md:text-xl font-bold rounded-lg text-center px-16 py-10 shadow-md shadow-[#FFB400]/50" : "flex flex-col items-center bg-[#10398E] max-w-16 w-full text-lg md:text-xl rounded-lg text-center px-16 py-10"} >
                            <p>Pati</p>
                          </div>
                        </div>
                      </div>
                      <div className="my-6">
                        <h4 className="text-lg text-center text-[#FFB400] md:text-left md:text-white md:text-xl font-bold">
                          {caturBekelKahuripan.title}
                        </h4>
                        <p className="font-light leading-8 text-justify">
                          {caturBekelKahuripan.content}
                        </p>
                      </div>
                      <div className="my-6">
                        <h4 className="text-lg text-center text-[#FFB400] md:text-left md:text-white md:text-xl font-bold">
                          Hal baik yang disarankan untuk dilakukan
                        </h4>
                        <ul className="flex flex-col gap-4 list-disc pl-4 mt-4 leading-8 text-justify">
                          <li className=''><span className='text-[#FFB400] font-bold'> Penggunaan pakaian </span> {rekomendasiRamalan.warna}</li>
                          <li className=''><span className='text-[#FFB400] font-bold'>Arah pertama</span> , yaitu kondisi dimana anda bangun dan berdoa di pagi hari. Setelah melakukan aktivitas tersebut, disarankan untuk anda melangkahkan kaki kanan anda pertama dengan badan menuju arah {rekomendasiRamalan.arah}.</li>
                          <li className=''><span className='text-[#FFB400] font-bold'>Angka keberuntungan</span>, merupakan angka yang bisa mewakili perhitungan. Hari ini angka keberuntungan anda yaitu {rekomendasiRamalan.angka}.</li>
                          <li className=''><span className='text-[#FFB400] font-bold'>Japa </span>, merupakan suatu pengucapan doa ketika melakukan meditasi. Huruf/suku kata yang mewakili anda hari ini yaitu “{rekomendasiRamalan.japa}”, dapat diucapkan sesuai dengan jumlah keburuntungan anda. </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section >
        )
        }
      </Transition>
    </>
  )
}
