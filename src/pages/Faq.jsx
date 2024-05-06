// eslint-disable-next-line no-unused-vars
import React from 'react'
import NavBar from '../components/NavBar'
import SubFooter from '../components/SubFooter'
import Footer from '../components/Footer'
import TanyaWariga from '../sections/TanyaWariga'


export default function Faq() {
  return (
    <div className="bg-[url('./src/assets/webp/bg-star.webp')] bg-no-repeat bg-cover bg-[center_top]flex flex-col items-center">
      <NavBar />
      <TanyaWariga />
      <SubFooter />
      <Footer />
    </div>
  )
}
