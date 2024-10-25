import React from 'react'
import { redirect } from 'next/navigation'
import { getLocationById } from '../../lib/data'
import FormLocation from '../../_components/form-location'

type Tparams = {
  id: string
}

interface EditPageProps {
  params: Tparams
}

export default async function EditPage({ params }: EditPageProps) {
  const data = await getLocationById(params.id)

  if (!data) {
    return redirect('/dashboard/locations')
  }

  return <FormLocation type="EDIT" data={data} />
}
