export interface IPrice {
    id: string,
    unit_price: number,
    currency: string
}

export interface IQuantity {
    size: string,
    count: number
}

export interface IProduct {
    id: string,
    name: string,
    price: IPrice,
    quantity: IQuantity[],
    description: string,
    image: string
}