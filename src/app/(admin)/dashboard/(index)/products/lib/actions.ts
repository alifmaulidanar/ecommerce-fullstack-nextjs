"use server"

import { schemaProduct } from "@/lib/schema";
import { uploadFile } from "@/lib/supabase";
import { ActionResult } from "@/types";
import { redirect } from "next/navigation";
import prisma from "../../../../../../../lib/prisma";
import { ProductStock } from "@prisma/client";

export async function storeProduct(
  _: unknown,
  formData: FormData
): Promise<ActionResult> {
  const parse = schemaProduct.safeParse({
    name: formData.get("name"),
    description: formData.get("description"),
    price: formData.get("price"),
    stock: formData.get("stock"),
    brand_id: formData.get("brand_id"),
    category_id: formData.get("category_id"),
    location_id: formData.get("location_id"),
    images: formData.getAll("images"),
  });

  if (!parse.success) {
    console.error(parse.error.errors);
    return {
      error: parse.error.errors[0].message,
    }
  }

  const uploadedImages = parse.data.images as File[];
  const fileNames = []

  for (const image of uploadedImages) {
    const fileName = await uploadFile(image, "products");
    fileNames.push(fileName);
  }

  try {
    await prisma.product.create({
      data: {
        name: parse.data.name,
        description: parse.data.description,
        brand_id: parseInt(parse.data.brand_id),
        category_id: parseInt(parse.data.category_id),
        location_id: parseInt(parse.data.location_id),
        price: parseInt(parse.data.price),
        stock: parse.data.stock as ProductStock,
        images: fileNames,
      }
    })
  } catch (error) {
    console.error(error)
    return { error: "Failed to create product" }
  }

  return redirect("/dashboard/products");
}