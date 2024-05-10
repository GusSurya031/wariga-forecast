// eslint-disable-next-line no-unused-vars
import React from 'react'
import Hero from '../sections/Hero'
import Definisi from '../sections/Definisi'
import NavBar from '../components/NavBar'
import Kerangka from '../sections/BagianKerangka'
import Unsur from '../sections/Unsur'
import SubFooter from '../components/SubFooter'
import Footer from '../components/Footer'

export default function Ramalan() {
  return (
    <div className="bg-[url('./assets/webp/bg-star.webp')] bg-no-repeat bg-cover bg-[center_top]flex flex-col items-center">
      <NavBar />
      <Hero />
      <Definisi />
      <Kerangka />
      <Unsur />
      <SubFooter />
      <Footer />
    </div>
  )
}
