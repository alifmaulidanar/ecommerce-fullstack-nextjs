"use client"

import React from 'react'
import { useCart } from '@/hooks/useCart'
import { Tcart, Tproduct } from '@/types'
import { rupiahFormat } from '@/lib/utils'
import { useRouter } from 'next/navigation'

interface PriceInfoProps {
  item: Tproduct
  isLoggedIn?: boolean
}

export default function PriceInfo({ item, isLoggedIn }: PriceInfoProps) {
  const { addProduct } = useCart()
  const router = useRouter()

  const checkout = () => {
    const newCart: Tcart = {
      ...item,
      quantity: 1
    }

    addProduct(newCart)
    router.push('/carts')
  }

  return (
    <div className="w-[302px] flex flex-col shrink-0 gap-5 h-fit">
      <div className="w-full bg-white border border-[#E5E5E5] flex flex-col gap-[30px] p-[30px] rounded-3xl">
        <div className="flex flex-col gap-1 text-black">
          <p className="font-semibold">Brand New</p>
          <p className="font-bold text-[24px] leading-[48px]">{rupiahFormat(item.price)}</p>
        </div>
        <div className="flex flex-col gap-4 text-black">
          <div className="flex items-center gap-2">
            <div className="flex shrink-0">
              <img src="/assets/icons/tick-circle.svg" alt="icon" />
            </div>
            <p className="font-semibold">Peti telur packaging</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex shrink-0">
              <img src="/assets/icons/tick-circle.svg" alt="icon" />
            </div>
            <p className="font-semibold">Manual book instructions</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex shrink-0">
              <img src="/assets/icons/tick-circle.svg" alt="icon" />
            </div>
            <p className="font-semibold">Customer service 24/7</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex shrink-0">
              <img src="/assets/icons/tick-circle.svg" alt="icon" />
            </div>
            <p className="font-semibold">Free delivery Jababeka</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex shrink-0">
              <img src="/assets/icons/tick-circle.svg" alt="icon" />
            </div>
            <p className="font-semibold">Kwitansi orisinal 100%</p>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <button disabled={!isLoggedIn} type='button' onClick={checkout} className="p-[12px_24px] bg-[#0D5CD7] rounded-full text-center font-semibold text-white disabled:opacity-60">Add to Cart</button>
          <a href="" className="p-[12px_24px] bg-white rounded-full text-center font-semibold border border-[#E5E5E5] text-black">Save to Wishlist</a>
        </div>
      </div>
      <a href="">
        <div className="w-full bg-white border border-[#E5E5E5] flex items-center justify-between gap-2 p-5 rounded-3xl">
          <div className="flex items-center gap-[10px]">
            <div className="w-12 h-12 flex shrink-0 rounded-full bg-[#FFC736] items-center justify-center overflow-hidden">
              <img src="/assets/icons/cake.svg" alt="icon" />
            </div>
            <div className="flex flex-col gap-[2px] text-black">
              <p className="font-semibold">Buy as a Gift</p>
              <p className="text-sm">Free Delivery</p>
            </div>
          </div>
          <div className="flex shrink-0">
            <img src="/assets/icons/arrow-right.svg" alt="icon" />
          </div>
        </div>
      </a>
    </div>
  )
}
