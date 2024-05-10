// eslint-disable-next-line no-unused-vars
import React from 'react'

export default function NotFound() {
  return (
    <div className="bg-[url('./assets/webp/bg-star.webp')] bg-no-repeat bg-auto bg-[center_top]flex flex-col items-center h-screen flex justify-center item-center text-white">
      <div className="flex flex-col gap-4 justify-center text-center">
        <p className="text-base font-semibold text-[#FFB400] ">404</p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">Page not found</h1>
        <p className="text-base leading-7 text-gray-400">Sorry, we couldn’t find the page you’re looking for.</p>
        <a href="/" className="rounded-md bg-[#FFB400] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#FFB400]/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Go back home</a>
      </div>
    </div>
  )
}
