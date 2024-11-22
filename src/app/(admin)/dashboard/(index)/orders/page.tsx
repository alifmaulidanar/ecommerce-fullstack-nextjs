import React from 'react'
import { columns } from './columns'
import { getOrders } from './lib/data'
import Sidebar from '../_components/sidebar'
import { DataTable } from '@/components/ui/data-table'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export const runtime = "edge";

export default async function OrdersPage() {
  const orders = await getOrders()

  return (
    <>
      <Sidebar page="orders" />
      <div className='space-y-4'>
        <Card x-chunk="dashboard-06-chunk-0">
          <CardHeader>
            <CardTitle>Orders</CardTitle>
            <CardDescription>
              Manage your orders.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <DataTable columns={columns} data={orders} />
          </CardContent>
        </Card>
      </div>
    </>
  )
}
