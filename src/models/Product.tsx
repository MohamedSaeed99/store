export interface IPrice {
    id: string,
    unit_price: number,
    currency: string
}

export interface IProduct {
    id: string,
    name: string,
    price: IPrice,
    description: string,
    image: string
}