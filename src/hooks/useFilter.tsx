import { create } from "zustand"
import { ProductStock } from "@prisma/client"

export type TFilter = {
  search?: string
  minPrice?: number
  maxPrice?: number
  stock?: ProductStock[] | null
  brands?: number[] | null
  locations?: number[] | null
  categories?: number[] | null
}

export interface FilterState {
  filter: TFilter
  setFilter: (filter: TFilter) => void
}

export const useFilter = create<FilterState>()((set) => ({
  filter: {
    search: '',
    minPrice: 0,
    maxPrice: 0,
    stock: null,
    brands: null,
    locations: null,
    categories: null,
  },
  setFilter: (filter) => set((state) => ({
    filter: {
      ...state.filter,
      ...filter
    }
  })),
}))