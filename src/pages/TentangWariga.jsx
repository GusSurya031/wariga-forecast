// eslint-disable-next-line no-unused-vars
import React from 'react'
import NavBar from '../components/NavBar'
import SubFooter from '../components/SubFooter'
import Footer from '../components/Footer'
import InfoWariga from '../sections/InfoWariga'
import KerangkaWariga from '../sections/KerangkaDetail'

export default function TentangWariga() {
  return (
    <div className="bg-[url('./assets/webp/bg-star.webp')] bg-no-repeat bg-cover bg-[center_top]flex flex-col items-center">
      <NavBar />
      <InfoWariga />
      <KerangkaWariga />
      <SubFooter />
      <Footer />
    </div>
  )
}
