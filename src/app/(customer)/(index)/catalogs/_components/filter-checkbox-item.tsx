"use client"

import React, { ChangeEvent } from 'react'
import { useFilter } from '@/hooks/useFilter'
import { ProductStock } from '@prisma/client'

interface FilterCheckboxItemProps {
  id: string
  value: string
  type?: "stock" | "brand" | "location" | "category"
}

export default function FilterCheckboxItem({ id, value, type }: FilterCheckboxItemProps) {
  const { filter, setFilter } = useFilter()

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    switch (type) {
      case "stock":
        if (e.target.checked) {
          setFilter({ stock: [...filter?.stock ?? [], e.target.value as ProductStock] })
        } else {
          setFilter({ stock: filter?.stock?.filter((stock) => stock !== e.target.value) })
        }
        break;
      case "brand":
        if (e.target.checked) {
          setFilter({ brands: [...filter?.brands ?? [], Number.parseInt(e.target.value)] })
        } else {
          setFilter({ brands: filter?.brands?.filter((brands) => brands !== Number.parseInt(e.target.value)) })
        }
        break;
      case "category":
        if (e.target.checked) {
          setFilter({ categories: [...filter?.categories ?? [], Number.parseInt(e.target.value)] })
        } else {
          setFilter({ categories: filter?.categories?.filter((categories) => categories !== Number.parseInt(e.target.value)) })
        }
        break;
      case "location":
        if (e.target.checked) {
          setFilter({ locations: [...filter?.locations ?? [], Number.parseInt(e.target.value)] })
        } else {
          setFilter({ locations: filter?.locations?.filter((locations) => locations !== Number.parseInt(e.target.value)) })
        }
        break;

      default:
        break;
    }
  }

  return (
    <label htmlFor={id + value} className="font-semibold flex items-center gap-3">
      <input
        type="checkbox"
        id={id + value}
        value={id}
        onChange={onChange}
        className="w-6 h-6 flex shrink-0 appearance-none checked:border-[3px] checked:border-solid checked:border-white rounded-md checked:bg-[#0D5CD7] ring-1 ring-[#0D5CD7]"
      />
      <span>{value}</span>
    </label>
  )
}
