import React from "react"
import Link from "next/link"
import { columns } from "./columns"
import { getLocations } from "./lib/data"
import { PlusCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DataTable } from "@/components/ui/data-table"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import Sidebar from "../_components/sidebar"

export default async function LocationsPage() {
  const data = await getLocations()

  return (
    <>
      <Sidebar page="locations" />
      <div className='space-y-4'>
        <div className='text-right'>
          <Button size="sm" className='h-8 gap-1' asChild>
            <Link href="/dashboard/locations/create">
              <PlusCircle className='h-3.5 w-3.5' />
              <span className='sr-only sm:not-sr-only sm:whitespace-nowrap'>Add Category</span>
            </Link>
          </Button>
        </div>
        <Card x-chunk="dashboard-06-chunk-0">
          <CardHeader>
            <CardTitle>Locations</CardTitle>
            <CardDescription>
              Manage your locations and view their sales performance.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <DataTable columns={columns} data={data} />
          </CardContent>
        </Card>
      </div>
    </>
  )
}
