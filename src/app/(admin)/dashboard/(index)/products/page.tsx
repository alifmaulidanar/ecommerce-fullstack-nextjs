import React from 'react'
import Link from 'next/link'
import { columns } from './columns'
import { getProducts } from './lib/data'
import { PlusCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { DataTable } from '@/components/ui/data-table'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Sidebar from '../_components/sidebar'

export default async function ProductPage() {
  const products = await getProducts()

  return (
    <>
      <Sidebar page="products" />
      <div className='space-y-4'>
        <div className='text-right'>
          <Button size="sm" className='h-8 gap-1' asChild>
            <Link href="/dashboard/products/create">
              <PlusCircle className='h-3.5 w-3.5' />
              <span className='sr-only sm:not-sr-only sm:whitespace-nowrap'>Add Product</span>
            </Link>
          </Button>
        </div>
        <Card x-chunk="dashboard-06-chunk-0">
          <CardHeader>
            <CardTitle>Products</CardTitle>
            <CardDescription>
              Manage your products and view their sales performance.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <DataTable columns={columns} data={products} />
          </CardContent>
        </Card>
      </div>
    </>
  )
}
