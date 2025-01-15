export interface Product{
    pname: string,
    description: string,
    category: string,
    price: number,
    image: string,
    unit: string,
    priceOptions: PriceOption[],

}
export interface PriceOption{
    weight: number,
    unit:   string
}