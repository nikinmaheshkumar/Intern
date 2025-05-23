import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";


function ProductDetails({addToCart}) {

  const { id } = useParams();
  const [product,setProduct] = useState(null);
  const [loading,setLoading] = useState(true);

  useEffect( () => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch product ",error);
        setLoading(false)
      });

  }, [id]);

  if (loading) return <Loading />;
  if (!product) return <p className="p-4">Product not found.</p>;

  return( 
    <div className="p-6 min-h-screen flex flex-col items-center text-center bg-white rounded-xl shadow-md">
  <h1 className="text-2xl font-bold text-gray-800 mb-4">{product.title}</h1>

  <img
    src={product.image}
    alt={product.title}
    className="h-64 w-full max-w-xs object-contain rounded-lg bg-white mb-6"
  />

  <p className="text-gray-600 font-medium mb-4">{product.description}</p>

  <p className="text-2xl font-bold text-gray-900 mb-6">${product.price}</p>

  <button
    className="px-6 py-2 bg-[#190028] text-white rounded-lg text-sm font-medium transition hover:bg-[#300048]"
    onClick={() => addToCart(product)}
  >
    ➕ Add to Cart
  </button>
</div>

  );
}
export default ProductDetails;
