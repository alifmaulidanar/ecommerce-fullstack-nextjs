import React from 'react'
import Sidebar from './_components/sidebar'

export const runtime = "edge";

export default function DashboardPage() {
  return (
    <>
      <Sidebar page='dashboard' />
      <div>Dashboard Page File</div>
    </>
  )
}
