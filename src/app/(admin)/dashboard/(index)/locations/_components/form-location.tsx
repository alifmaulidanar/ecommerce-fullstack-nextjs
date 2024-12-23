"use client"

import React from "react"
import Link from "next/link"
import { ActionResult } from "@/types"
import { Location } from "@prisma/client"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useFormState, useFormStatus } from "react-dom"
import { AlertCircle, ChevronLeft } from "lucide-react"
import { postLocation, updateLocation } from "../lib/actions"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const initialState: ActionResult = { error: "" }

interface FormLocationProps {
  type?: "ADD" | "EDIT",
  data?: Location | null
}

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <Button type="submit" size="sm" disabled={pending}>
      {pending ? "Saving..." : "Save Location"}
    </Button>
  )
}

export default function FormLocation({ type = "ADD", data = null }: FormLocationProps) {
  const updateLocationWithId = (_: unknown, formData: FormData) => updateLocation(_, formData, data?.id)
  const [state, formAction] = useFormState(type === "ADD" ? postLocation : updateLocationWithId, initialState)

  return (
    <form action={formAction}>
      <div className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
        <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4">
          <div className="flex items-center gap-4">
            <Button variant="outline" size="icon" className="h-7 w-7" asChild>
              <Link href="/dashboard/locations">
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Back</span>
              </Link>
            </Button>
            <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
              Location Controller
            </h1>
            <div className="hidden items-center gap-2 md:ml-auto md:flex">
              <Button variant="outline" size="sm">
                Discard
              </Button>
              <SubmitButton />
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
            <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
              <Card x-chunk="A card with a form to edit the product details" className='w-[500px]'>
                <CardHeader>
                  <CardTitle>Location Details</CardTitle>
                  <CardDescription>
                    Fill in the details of the location.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {state.error !== "" && (
                    <Alert variant="destructive">
                      <AlertCircle className="h-4 w-4" />
                      <AlertTitle>Error</AlertTitle>
                      <AlertDescription>
                        {state.error}
                      </AlertDescription>
                    </Alert>
                  )}
                  <div className="grid gap-6 mt-4">
                    <div className="grid gap-3">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        className="w-full"
                        defaultValue={data?.name}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 md:hidden">
            <Button variant="outline" size="sm">
              Discard
            </Button>
            <Button size="sm">Save Location</Button>
          </div>
        </div>
      </div>
    </form>
  )
}
