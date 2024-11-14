export type ActionResult = {
  error?: string
}

export type Tparams = {
  id: string
}

export type Tedit = {
  params: Tparams
}

export type DetailProductProp = {
  params: Tparams
}

export type Tproduct = {
  id: number
  name: string
  images_url: string
  category_name: string
  price: number
}

export type Tcart = Tproduct & {
  quantity: number
}