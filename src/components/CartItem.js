import React, { useContext } from 'react'
import { CartContext } from '../providers/CartProvider';

const CartItem = ({ item }) => {

  const { removeItem } = useContext(CartContext);

  return (
    <div>
        <h1>{item.name}</h1>
        <p>{item.price}</p>
        <p>Quantity: {item.quantity}</p>
        <button onClick={() => removeItem(item.name)}>Remove</button>
    </div>
  )
}

export default CartItem