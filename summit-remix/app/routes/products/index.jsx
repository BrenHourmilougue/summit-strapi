import { getProducts } from "~/models/products.server"
import { useLoaderData } from "@remix-run/react"
import ProductList from "~/components/product-list"

export async function loader(){
  const products = await getProducts()

  return products.data
}

export function meta(){
    return (
        {
            title: 'Summit - Store',
            description: 'Our collection'
        }
    )
}


const Store = () => {

  const products = useLoaderData()

  return (
    <ProductList
        products = {products}
    />
  )
}

export default Store
