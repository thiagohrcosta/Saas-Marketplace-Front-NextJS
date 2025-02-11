import Image from "next/image"
import { HomeProductCartContainer } from "./style"
import { FormatCurrency } from "@/utils/formatCurrency"
import Link from "next/link"

type homeProductsCardProps = {
  id: string
  name: string
  description: string
  price: number
  discountPercentage: number
  companyId: number
  categoryId: number
  stockAmount: number
  isAvailable: boolean
  photos: string
}

export function HomeProductCard({
  id,
  name,
  description,
  price,
  discountPercentage,
  companyId,
  categoryId,
  stockAmount,
  isAvailable,
  photos
}: homeProductsCardProps) {
  return (
    <HomeProductCartContainer>
      <Link href={`/products/${id}`}>
        <Image 
          src={photos}
          alt={name}
          width={160}
          height={220}
        />
        <div className="product-info">
          <p className="product-name">{name}</p>
          <p className="product-price">$ {FormatCurrency(price)}</p>
        </div>
      </Link>
    </HomeProductCartContainer>
  )
}