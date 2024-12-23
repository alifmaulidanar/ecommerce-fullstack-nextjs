import React from 'react'
import FilterCheckboxItem from './filter-checkbox-item'
import { getCategories } from '@/app/(admin)/dashboard/(index)/categories/lib/data'

export default async function FilterCategory() {
  const categories = await getCategories()

  return (
    <div className="flex flex-col gap-[14px]">
      <p className="font-semibold leading-[22px]">Categories</p>
      {categories.map((category) => (
        // <label key={`${category.id + category.name}`} htmlFor={`${category.id + category.name}`} className="font-semibold flex items-center gap-3">
        //   <input
        //     type="checkbox"
        //     name="stock"
        //     value={category.id}
        //     className="w-6 h-6 flex shrink-0 appearance-none checked:border-[3px] checked:border-solid checked:border-white rounded-md checked:bg-[#0D5CD7] ring-1 ring-[#0D5CD7]"
        //   />
        //   <span>{category.name}</span>
        // </label>
        <FilterCheckboxItem key={category.id + category.name} id={category.id.toString()} value={category.name} type="category" />
      ))}
    </div>
  )
}
