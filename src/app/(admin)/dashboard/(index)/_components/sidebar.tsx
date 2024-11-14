import React from 'react'
import Link from "next/link"
import LogOut from './logout';
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";
import { Archive, Building, Home, MapPin, Package, ShoppingCart, Users2 } from "lucide-react"

interface SidebarProps {
  page?: string
}

export default function Sidebar({ page }: SidebarProps) {
  return (
    <TooltipProvider>
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
          {/* <Link
            href="#"
            className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
          >
            <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
            <span className="sr-only">Acme Inc</span>
          </Link> */}

          {/* Dashboard */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/dashboard"
                className={
                  page === "dashboard"
                    ? "flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                    : "flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                }
              >
                <Home className="h-5 w-5" />
                <span className="sr-only">Dashboard</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Dashboard</TooltipContent>
          </Tooltip>

          {/* Category */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/dashboard/categories"
                className={
                  page === "categories"
                    ? "flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                    : "flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                }
              >
                <Archive className="h-5 w-5" />
                <span className="sr-only">Category</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Category</TooltipContent>
          </Tooltip>

          {/* Location */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/dashboard/locations"
                className={
                  page === "locations"
                    ? "flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                    : "flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                }
              >
                <MapPin className="h-5 w-5" />
                <span className="sr-only">Location</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Location</TooltipContent>
          </Tooltip>

          {/* Brand */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/dashboard/brands"
                className={
                  page === "brands"
                    ? "flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                    : "flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                }
              >
                <Building className="h-5 w-5" />
                <span className="sr-only">Brand</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Brand</TooltipContent>
          </Tooltip>

          {/* Products */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/dashboard/products"
                className={
                  page === "products"
                    ? "flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                    : "flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                }
              >
                <Package className="h-5 w-5" />
                <span className="sr-only">Products</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Products</TooltipContent>
          </Tooltip>

          {/* Orders */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/dashboard/orders"
                className={
                  page === "orders"
                    ? "flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                    : "flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                }
              >
                <ShoppingCart className="h-5 w-5" />
                <span className="sr-only">Orders</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Orders</TooltipContent>
          </Tooltip>

          {/* Customers */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/dashboard/customers"
                className={
                  page === "customers"
                    ? "flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                    : "flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                }
              >
                <Users2 className="h-5 w-5" />
                <span className="sr-only">Customers</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Customers</TooltipContent>
          </Tooltip>
        </nav>
        <LogOut />
      </aside>
    </TooltipProvider>
  )
}
