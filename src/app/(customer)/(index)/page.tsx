import React, { Suspense } from 'react'
import Navbar from './_components/navbar'
import ListCategory from './_components/list-category'
import ListProduct from './_components/list-product'
import ListBrand from './_components/list-brand'

export default function LandingPage() {
  return (
    <>
      <header className="bg-[#EFF3FA] pt-[30px] pb-[50px]">
        <Navbar />
      </header>
      <section id="content" className="container max-w-[1130px] mx-auto flex flex-col gap-[50px] pt-[50px] pb-[100px]">
        <Suspense fallback={<span>Loading...</span>}>
          <ListCategory />
        </Suspense>
        <Suspense fallback={<span>Loading...</span>}>
          <ListProduct title={<>Most Picked <br /> Quality Products</>} />
        </Suspense>
        <Suspense fallback={<span>Loading...</span>}>
          <ListBrand />
        </Suspense>
      </section>
    </>
  )
}
