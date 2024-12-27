import React from 'react'
import { PRODUCTS } from '../data/products'
import Product from './Product'

const ProductList = () => {
  return (
    <>
      <h2>Add to your cart</h2>
      <div>
        {PRODUCTS.map((item) => (
            <Product item={item} key={item.name} />
        ))}
      </div>
    </>
  )
}

export default ProductList