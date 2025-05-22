import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";


function ProductDetails() {

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
    <div className="p-4 min-h-full ">
      <h1 className="text-2xl mb-4 text-center">{product.title}</h1>
      <img src={product.image} alt={product.title} className=" mt-4 h-64 mx-auto object-contain rounded-lg" />
      <p className="mt-4 text-gray-600 font-semibold">{product.description}</p>
      <p className="mt-2 font-bold text-2xl text-center">${product.price}</p>
    </div>
  );
}
export default ProductDetails;
