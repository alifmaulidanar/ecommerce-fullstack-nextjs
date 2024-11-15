"use server"

import { getUser } from "@/lib/auth";
import { schemaShippingAddress } from "@/lib/schema";
import { ActionResult, Tcart } from "@/types";
import { redirect } from "next/navigation";
import prisma from "../../../../../../lib/prisma";
import { generateRandomString } from "@/lib/utils";
import { Prisma } from "@prisma/client";

export async function storeOrder(
  _: unknown,
  formData: FormData,
  total: number,
  products: Tcart[]
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
    const order = await prisma.order.create({
      data: {
        total: total,
        status: "pending",
        user_id: user.id,
        code: generateRandomString(15),
      }
    })
    console.log("store to order")

    const queryCreateProductOrder: Prisma.OrderProductCreateManyInput[] = []

    for (const product of products) {
      queryCreateProductOrder.push({
        order_id: order.id,
        product_id: product.id,
        quantity: product.quantity,
        subtotal: product.price
      })
    }

    await prisma.orderProduct.createMany({
      data: queryCreateProductOrder
    })
    console.log("store to orderProduct")

    await prisma.orderDetail.create({
      data: {
        address: parse.data.address,
        city: parse.data.city,
        name: parse.data.name,
        phone: parse.data.phone,
        postalCode: parse.data.postalCode,
        notes: parse.data.notes,
        order_id: order.id
      }
    })
    console.log("store to orderDetail")
  } catch (error) {
    console.error(error)
    return {
      error: "Failed to create order"
    }
  }

  return redirect("/")
}