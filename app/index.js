// pages/index.js
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../store/productsSlice';
import Product from '../components/Product';

export default function Home() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  const handleAddProduct = () => {
    dispatch(addProduct({ name: `Product ${products.length + 1}`, description: 'Description' }));
  };

  return (
    <div>
      <h1>Products</h1>
      <button onClick={handleAddProduct}>Add Product</button>
      {products.map((product, index) => (
        <Product key={index} product={product} />
      ))}
    </div>
  );
}
