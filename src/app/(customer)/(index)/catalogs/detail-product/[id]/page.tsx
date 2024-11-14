import { getUser } from '@/lib/auth'
import React from 'react'
import { redirect } from 'next/navigation'
import { DetailProductProp } from '@/types'
import { getProductById } from './lib/data'
import Navbar from '../../../_components/navbar'
import PriceInfo from './_components/price-info'
import CarouselImages from './_components/carousel-images'

export default async function DetailProductPage({ params }: DetailProductProp) {
  const { session } = await getUser()
  const product = await getProductById(Number(params.id))

  if (!product) {
    return redirect("/")
  }

  return (
    <>
      <header className="bg-[#EFF3FA] pt-[30px] h-[480px] -mb-[310px]">
        <Navbar />
      </header>
      <div id="title" className="container max-w-[1130px] mx-auto flex items-center justify-between">
        <div className="flex flex-col gap-5">
          <div className="flex gap-5 items-center">
            <a className="page text-sm text-[#6A7789] last-of-type:text-black">Shop</a>
            <span className="text-sm text-[#6A7789]">/</span>
            <a className="page text-sm text-[#6A7789] last-of-type:text-black">Browse</a>
            <span className="text-sm text-[#6A7789]">/</span>
            <a className="page text-sm text-[#6A7789] last-of-type:text-black">Details</a>
          </div>
          <h1 className="font-bold text-4xl leading-9 text-black">{product.name}</h1>
        </div>
      </div>
      <CarouselImages images={product.images} />
      <div id="details-info" className="container max-w-[1030px] mx-auto flex justify-between gap-5 mt-[50px] pb-[100px]">
        <div className="max-w-[650px] w-full flex flex-col gap-[30px]">
          <div id="about" className="flex flex-col gap-[10px]">
            <h3 className="font-semibold">About Product</h3>
            <p className="leading-[32px]">{product.description}</p>
          </div>
        </div>
        <PriceInfo isLoggedIn={session ? true : false} item={{
          id: product.id,
          name: product.name,
          category_name: product.category.name,
          images_url: product.images[0],
          price: Number(product.price),
        }} />
      </div>
    </>
  )
}
