import { StaticImageData } from "next/image"

export interface Burger {
    id: number
    name: string
    description: string
    price: number
    imgUrl: StaticImageData
    category: string
}