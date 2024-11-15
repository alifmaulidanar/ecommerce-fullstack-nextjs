"use server"

import { getUser } from "@/lib/auth";
import { schemaShippingAddress } from "@/lib/schema";
import { ActionResult, Tcart } from "@/types";
import { redirect } from "next/navigation";
import prisma from "../../../../../../lib/prisma";
import { generateRandomString } from "@/lib/utils";

export async function storeOrder(
  _: unknown,
  formData: FormData,
  total: number,
  product: Tcart[]
): Promise<ActionResult> {
  const { session, user } = await getUser()

  if (!session) {
    return redirect("/")
  }

  const parse = schemaShippingAddress.safeParse({
    name: formData.get("name"),
    address: formData.get("address"),
    city: formData.get("city"),
    postalCode: formData.get("postalCode"),
    notes: formData.get("notes"),
    phone: formData.get("phone"),
  })

  if (!parse.success) {
    return {
      error: parse.error.errors[0].message,
    }
  }

  try {
    await prisma.order.create({
      data: {
        total: total,
        status: "pending",
        user_id: user.id,
        code: generateRandomString(15),
      }
    })
  } catch (error) {
    console.error(error)
    return {
      error: "Failed to create order"
    }
  }

  return redirect("/carts")
}