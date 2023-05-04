import { useState } from 'react'
import { useLoaderData, useOutletContext } from '@remix-run/react'
import { getProduct } from '~/models/products.server'


export function meta({ data }) {

  if (!data) {
    return {
      title: 'Productnot found',
      description: `products, store, article ${data.data[0].attributes.name}`
    }
  }
  return {
    title: `Summit - ${data.data[0].attributes.name}`,
    description: `products, store, article not found`
  }
}

export async function loader({ params }) {

  const { productUrl } = params
  const product = await getProduct(productUrl)

  if (product.data.length === 0) {
    throw new Response('', {
      status: 404,
      statusText: 'Productnot found'
    })
  }
  return await product
}


function Product() {

  const { addToCart } = useOutletContext()

  const [ quantity, setQuantity ] = useState()
  const product = useLoaderData()
  const { name, description, image, price } = product.data[0].attributes

  const handleSubmit = e => {
    e.preventDefault()

    if (quantity<1){

      return
    }

    const selectedItem = {
      id: product.data[0].id,
      image: image.data.attributes.url,
      name,
      price,
      quantity,
    }

    addToCart(selectedItem)

  }
  
  return (
    <div className='product'>
      <img className='image' src={image.data.attributes.url} alt="" />
      <div className='content'>
        <h3>{name}</h3>
        <p className="text">{description}</p>
        <p className="price">${price}</p>
        <form onSubmit={handleSubmit} className='form'>
          <label htmlFor="quantity">Quantity</label>
          <select 
            onChange={e => setQuantity(parseInt(e.target.value))}
            name="quantity" 
            id="quantity">
            <option value="0">Select</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <input type="submit" value="Add to cart" />
        </form>
      </div>
    </div>
  )
}

export default Product
