import prisma from "../../../../../../../lib/prisma";
import { TColumn } from "../columns";

export async function getProducts() {
  try {
    const products = await prisma.product.findMany({
      orderBy: {
        name: 'asc'
      },
      select: {
        id: true,
        _count: {
          select: {
            orders: true
          }
        },
        name: true,
        created_at: true,
        price: true,
        stock: true,
        category: {
          select: {
            name: true
          }
        },
        brand: {
          select: {
            name: true
          }
        },
        images: true
      }
    });

    const responseProduct: TColumn[] = products.map((product) => {
      return {
        brand_name: product.brand.name,
        category_name: product.category.name,
        created_at: product.created_at,
        image_url: product.images[0],
        id: product.id,
        name: product.name,
        price: Number(product.price),
        stock: product.stock,
        total_sales: product._count.orders
      }
    });
    return responseProduct;
  } catch (error) {
    console.error(error);
    return [];
  }
}