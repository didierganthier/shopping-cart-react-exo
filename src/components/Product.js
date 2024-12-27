import React, { useContext, useState } from 'react'
import { CartContext } from '../providers/CartProvider';

const Product = ({ item }) => {

  const [quantity, setQuantity] = useState(1);
  const { addItem } = useContext(CartContext);

  return (
    <div key={item.name}>
        <h1>{item.name}</h1>
        <p>{item.price}</p>
        <label>
            Quantity
            <input type='number' min={1} value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))} />
        </label>
        <button onClick={() => addItem({...item, quantity})}>Add to Cart</button>
    </div>
  )
}

export default Product