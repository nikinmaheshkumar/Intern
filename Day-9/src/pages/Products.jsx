import { useState, useEffect } from 'react';
import axios from 'axios'
import Loading from '../components/Loading';
import ProductCard from '../components/ProductCard';

function Products() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error fetching products: ", error);
        setLoading(false);
      })
  }, [])

  return (
    <>
      <div className="p-4">
      <h1 className="text-3xl mb-4 text-center font-semibold">All Products</h1>
      {loading ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
    </>
  );
}

export default Products;
