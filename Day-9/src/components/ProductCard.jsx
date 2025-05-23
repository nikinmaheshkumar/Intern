import { useNavigate } from 'react-router-dom';
import '../styles/index.css'

function ProductCard({ product }) {

    const navigate = useNavigate();
  return (
   <div className="bg-[#32004f] text-white rounded-xl p-4 w-full max-w-xs flex flex-col transition duration-300 hover:scale-105 hover:shadow-lg mb-10">
      <div className="mt-2 overflow-hidden rounded-xl bg-white p-2">
        <img
          src={product.image}
          alt={product.title}
          className="w-full object-contain h-[200px] rounded-xl"
        />
      </div>
      <div className="mt-4 text-center">
        <h2 className="text-lg font-bold">{product.title}</h2>
      </div>
      <p className="text-md font-semibold mt-2 text-white text-center">${product.price}</p>
      <div className="mt-auto pt-4 flex flex-col sm:flex-row sm:justify-center sm:space-x-3 space-y-2 sm:space-y-0">
        <button
          className="px-4 py-2 bg-[#190028] text-white rounded-lg text-sm font-medium"
          onClick={() => navigate(`/product/${product.id}`)}
        >
          ℹ️ More Details
        </button>
      </div>
    </div>
  );
}

export default ProductCard;



