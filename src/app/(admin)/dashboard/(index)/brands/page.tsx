import React from 'react'
import Link from 'next/link'
import { columns } from './columns'
import { getBrands } from './lib/data'
import { PlusCircle } from 'lucide-react'
import Sidebar from '../_components/sidebar'
import { Button } from '@/components/ui/button'
import { DataTable } from '@/components/ui/data-table'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export const runtime = "edge";

export default async function BrandsPage() {
  const brands = await getBrands()
  return (
    <>
      <Sidebar page="brands" />
      <div className='space-y-4'>
        <div className='text-right'>
          <Button size="sm" className='h-8 gap-1' asChild>
            <Link href="/dashboard/brands/create">
              <PlusCircle className='h-3.5 w-3.5' />
              <span className='sr-only sm:not-sr-only sm:whitespace-nowrap'>Add Brand</span>
            </Link>
          </Button>
        </div>
        <Card x-chunk="dashboard-06-chunk-0">
          <CardHeader>
            <CardTitle>Brands</CardTitle>
            <CardDescription>
              Manage your brands and view their sales performance.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <DataTable columns={columns} data={brands} />
          </CardContent>
        </Card>
      </div>
    </>
  )
}
