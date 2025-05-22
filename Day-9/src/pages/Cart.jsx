import Navbar from "../components/Navbar";

function Cart({ cart }) {
  return (
    <>
      <Navbar />
      <h1 className="text-2xl p-4">Your Cart</h1>
      {console.log("Cart contents:", cart)}
      {cart.length === 0 ? (
        <p className="px-4">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-4">
          {cart.map((item, index) => (
            <div key={index} className="border p-2 rounded shadow-sm">
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <img
                src={item.image}
                alt={item.title}
                className="h-32 object-contain mx-auto"
              />
              <p className="text-sm mt-2">${item.price}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Cart;
