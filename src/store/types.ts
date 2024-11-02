export interface Product{
    id: string,
    name: string,
    manufacturer: Manufacturer
    price: number,
    expiryDate: Date
}
export interface Manufacturer{
    id:string,
    name: string
}