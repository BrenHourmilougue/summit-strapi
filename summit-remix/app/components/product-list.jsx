import React from 'react'
import Product from './product'

function ProductList({products}) {
  return (
    <>
      <h2 className="heading">Our collection</h2>
      {products?.length && (
        <div className="products-grid">
          {products.map(product => (
            <Product
              key={product?.id}
              product={product?.attributes}
            />
          ))}
        </div>
      )}
    </>
  )
}

export default ProductList
