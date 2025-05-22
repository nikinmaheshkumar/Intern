import '../styles/index.css'

function ProductCard({ product }) {
  return (
    <div className="bg-[#fcbf49] text-white rounded-xl p-4 w-full max-w-xs flex flex-col transition duration-300 hover:scale-105 hover:shadow-lg">
      <div className="flex flex-col items-center px-2">
        <h2 className="text-lg text-black text-center font-bold">{product.title}</h2>
      </div>
      <div className="mt-4 overflow-hidden rounded-xl">
        <img
          src={product.image}
          alt={product.title}
          className="w-full object-contain h-[200px] rounded-2xl bg-white"
        />
      </div>
      <p className="text-md font-semibold mt-3 text-black text-center">${product.price}</p>
      <div className="mt-auto pt-4 flex justify-center space-x-3">
        <button className="px-4 py-2 bg-[#001524] text-[#d62828] rounded-lg text-sm font-medium ">
          More Details
        </button>
        <button className="px-4 py-2 bg-[#15616D] text-white rounded-lg text-sm font-medium ">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;



