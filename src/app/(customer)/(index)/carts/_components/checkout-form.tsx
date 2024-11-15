"use client"

import React, { useMemo } from 'react'
import { useFormState, useFormStatus } from 'react-dom'
import { useCart } from '@/hooks/useCart'
import { rupiahFormat } from '@/lib/utils'
import { storeOrder } from '../lib/actions'
import { ActionResult } from '@/types'

const initialState: ActionResult = {
  error: "",
}

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <button type='submit' disabled={pending} className="p-[12px_24px] bg-[#0D5CD7] rounded-full text-center font-semibold text-white">
      {pending ? "Loading..." : "Checkout Now"}
    </button>
  )
}

export default function CheckoutForm() {
  const { products } = useCart()
  const grandTotal = useMemo(() => {
    return products.reduce((prev, curr) => prev + curr.price * curr.quantity, 0)
  }, [products])

  const storeOrderParams = (_: unknown, formData: FormData) => storeOrder(_, formData, grandTotal, products)
  const [state, formActions] = useFormState(storeOrderParams, initialState)

  return (
    <form action={formActions} id="checkout-info" className="container max-w-[1130px] mx-auto flex justify-between gap-5 mt-[50px] pb-[100px]">
      <div className="w-[650px] flex flex-col shrink-0 gap-4 h-fit">
        <h2 className="font-bold text-2xl leading-[34px]">Your Shipping Address</h2>
        <div className="flex flex-col gap-5 p-[30px] rounded-3xl border border-[#E5E5E5] bg-white">

          {state.error !== "" &&
            <div className='border border-red-300 text-red-500 p-3 rounded'>
              <h4 className='font-semibold'>Error</h4>
              <p className='text-sm'>{state.error}</p>
            </div>
          }

          <div className="flex items-center gap-[10px] rounded-full border border-[#E5E5E5] p-[12px_20px] focus-within:ring-2 focus-within:ring-[#FFC736] transition-all duration-300">
            <div className="flex shrink-0">
              <img src="/assets/icons/profile-circle.svg" alt="icon" />
            </div>
            <input required type="text" id="" name="name" className="appearance-none outline-none w-full placeholder:text-[#616369] placeholder:font-normal font-semibold text-black" placeholder="Write your real complete name" />
          </div>
          <div className="flex items-center gap-[10px] rounded-full border border-[#E5E5E5] p-[12px_20px] focus-within:ring-2 focus-within:ring-[#FFC736] transition-all duration-300">
            <div className="flex shrink-0">
              <img src="/assets/icons/house-2.svg" alt="icon" />
            </div>
            <input required type="text" id="" name="address" className="appearance-none outline-none w-full placeholder:text-[#616369] placeholder:font-normal font-semibold text-black" placeholder="Write your active house address" />
          </div>
          <div className="flex items-center gap-[30px]">
            <div className="flex items-center gap-[10px] rounded-full border border-[#E5E5E5] p-[12px_20px] focus-within:ring-2 focus-within:ring-[#FFC736] transition-all duration-300">
              <div className="flex shrink-0">
                <img src="/assets/icons/global.svg" alt="icon" />
              </div>
              <input required type="text" id="" name="city" className="appearance-none outline-none w-full placeholder:text-[#616369] placeholder:font-normal font-semibold text-black" placeholder="City" />
            </div>
            <div className="flex items-center gap-[10px] rounded-full border border-[#E5E5E5] p-[12px_20px] focus-within:ring-2 focus-within:ring-[#FFC736] transition-all duration-300">
              <div className="flex shrink-0">
                <img src="/assets/icons/location.svg" alt="icon" />
              </div>
              <input required type="number" id="" name="postalCode" className="appearance-none outline-none w-full placeholder:text-[#616369] placeholder:font-normal font-semibold text-black" placeholder="Post code" />
            </div>
          </div>
          <div className="flex items-start gap-[10px] rounded-[20px] border border-[#E5E5E5] p-[12px_20px] focus-within:ring-2 focus-within:ring-[#FFC736] transition-all duration-300">
            <div className="flex shrink-0">
              <img src="/assets/icons/note.svg" alt="icon" />
            </div>
            <textarea name="notes" id="" className="appearance-none outline-none w-full placeholder:text-[#616369] placeholder:font-normal font-semibold text-black resize-none" rows={6} placeholder="Additional notes for courier (optional)" />
          </div>
          <div className="flex items-center gap-[10px] rounded-full border border-[#E5E5E5] p-[12px_20px] focus-within:ring-2 focus-within:ring-[#FFC736] transition-all duration-300">
            <div className="flex shrink-0">
              <img src="/assets/icons/call.svg" alt="icon" />
            </div>
            <input required type="tel" id="" name="phone" className="appearance-none outline-none w-full placeholder:text-[#616369] placeholder:font-normal font-semibold text-black" placeholder="Write your phone number or whatsapp" />
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col shrink-0 gap-4 h-fit">
        <h2 className="font-bold text-2xl leading-[34px]">Payment Details</h2>
        <div className="w-full bg-white border border-[#E5E5E5] flex flex-col gap-[30px] p-[30px] rounded-3xl text-black">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex shrink-0">
                  <img src="/assets/icons/tick-circle.svg" alt="icon" />
                </div>
                <p>Sub Total</p>
              </div>
              <p className="font-semibold">{rupiahFormat(grandTotal)}</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex shrink-0">
                  <img src="/assets/icons/tick-circle.svg" alt="icon" />
                </div>
                <p>Insurance 12%</p>
              </div>
              <p className="font-semibold">Rp 0</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex shrink-0">
                  <img src="/assets/icons/tick-circle.svg" alt="icon" />
                </div>
                <p>Shipping (Flat)</p>
              </div>
              <p className="font-semibold">Rp 0</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex shrink-0">
                  <img src="/assets/icons/tick-circle.svg" alt="icon" />
                </div>
                <p>Warranty Original</p>
              </div>
              <p className="font-semibold">Rp 0</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex shrink-0">
                  <img src="/assets/icons/tick-circle.svg" alt="icon" />
                </div>
                <p>PPN 11%</p>
              </div>
              <p className="font-semibold">Rp 0</p>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-semibold">Grand Total</p>
            <p className="font-bold text-[32px] leading-[48px] underline text-[#0D5CD7]">{rupiahFormat(grandTotal)}</p>
          </div>
          <div className="flex flex-col gap-3">
            <SubmitButton />
          </div>
        </div>

      </div>
    </form>
  )
}
