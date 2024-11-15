import { z } from 'zod';

export const ALLOW_MIME_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
]

export const schemaSignIn = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Invalid email" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(5, { message: "Password must be at least 5 characters" }),
});

export const schemaSignUp = schemaSignIn.extend({
  name: z
    .string({ required_error: "Name is required" })
    .min(4, { message: "Name must be at least 4 characters" }),
})

export const schemaCategory = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .min(4, { message: "Name must be at least 4 characters" }),
});

export const schemaLocation = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .min(4, { message: "Name must be at least 4 characters" }),
});

export const schemaBrand = schemaCategory.extend({
  image: z
    .any()
    .refine((file: File) => ALLOW_MIME_TYPES.includes(file.type), { message: "Invalid file type" })
    .refine((file: File) => file?.name, { message: "Image is required" }),
});

export const schemaProduct = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .min(4, { message: "Name must be at least 4 characters" }),
  description: z
    .string({ required_error: "Description is required" })
    .min(10, { message: "Description must be at least 4 characters" }),
  price: z
    .string({ required_error: "Price is required" }),
  stock: z
    .string({ required_error: "Stock is required" }),
  brand_id: z
    .string({ required_error: "Brand is required" }),
  category_id: z
    .string({ required_error: "Category is required" }),
  location_id: z
    .string({ required_error: "Location is required" }),
  images: z.any()
    .refine((files: File[]) => files.length === 3, { message: "Please upload 3 product images" })
    .refine((files: File[]) => {
      let validate = false

      Array.from(files).find((file) => {
        validate = ALLOW_MIME_TYPES.includes(file.type)
      })

      return validate
    }, {
      message: "Invalid file type"
    })
});

export const schemaProductEdit = schemaProduct.extend({
  id: z.number({ required_error: "ID is required" }),
}).omit({ images: true });

export const schemaShippingAddress = z.object({
  name: z.string({ required_error: "Name is required" }).min(5, { message: "Name must be at least 5 characters" }),
  address: z.string({ required_error: "Address is required" }).min(5, { message: "Address must be at least 5 characters" }),
  city: z.string({ required_error: "City is required" }).min(3, { message: "City must be at least 3 characters" }),
  postalCode: z.string({ required_error: "Postal Code is required" }).min(5, { message: "Postal code must be at least 5 characters" }),
  notes: z.string().nullable(),
  phone: z.string({ required_error: "Phone is required" }).min(5, { message: "Phone must be at least 5 characters" }),
})