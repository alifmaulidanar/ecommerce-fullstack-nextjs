import { Tproduct } from "@/types";
import { TFilter } from "@/hooks/useFilter";

export async function fetchProduct(body: TFilter): Promise<Tproduct[]> {
  const res = await fetch("/api/catalog", {
    method: "POST",
    body: JSON.stringify(body ?? {}),
    headers: {
      "Content-Type": "application/json",
    },
  })

  const data = await res.json()
  return data ?? []
}