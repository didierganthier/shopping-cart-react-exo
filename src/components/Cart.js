import React, { useContext } from 'react'
import { CartContext } from '../providers/CartProvider'
import CartItem from './CartItem';

const Cart = () => {

  const { cartItems } = useContext(CartContext);

  return (
    <>
    <h2>Cart Items: {cartItems.length} items</h2>
    <div>
        {cartItems.map((item) => (
            <CartItem item={item} key={item.name} />
        ))}
    </div>
    </>
  )
}

export default Cart