"use client"

import React from 'react'
import { fetchProduct } from '../lib/data'
import { useFilter } from '@/hooks/useFilter'
import { useQuery } from '@tanstack/react-query'
import CardProduct from '../../_components/card-product'

export default function ProductListing() {
  const { filter } = useFilter()
  const { data, isLoading } = useQuery({
    queryKey: ["products-listing", filter],
    queryFn: () => fetchProduct(filter)
  })

  if (isLoading) return (
    <div className="grid grid-cols-1 gap-[30px]">
      <span>Loading...</span>
    </div>
  )

  return (
    <div className="grid grid-cols-3 gap-[30px]">
      {data?.map((product) => (
        <CardProduct key={product.id + product.name} product={product} />
      ))}
    </div>
  )
}
