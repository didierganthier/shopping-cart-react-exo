import './App.css';
import Cart from './components/Cart';
import ProductList from './components/ProductList';
import { CartProvider } from './providers/CartProvider';


function App() {
  return (
    <CartProvider>
      <h1>Welcome</h1>
      <Cart />
      <ProductList />
    </CartProvider>
  );
}

export default App;
