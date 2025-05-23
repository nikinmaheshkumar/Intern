function Cart({ cart, removeFromCart }) {
  return (
    <>
      <h1 className="text-2xl p-4 text-center">Your Cart 🛒</h1>
      {console.log("Cart contents:", cart)}
      {cart.length === 0 ? (
        <h1 className="px-4 text-3xl text-center mt-40">Your cart is empty.</h1>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-4">
          {cart.map((item, index) => (
            <div key={index} className="border p-2 rounded shadow-sm relative">
              <button
                onClick={() => removeFromCart(item.id)}
                className="absolute top-2 right-2 text-red-600 text-xl hover:text-red-800"
                title="Remove from cart"
              >
                ❌
              </button>

              <h2 className="text-lg font-semibold">{item.title}</h2>
              <img
                src={item.image}
                alt={item.title}
                className="h-32 object-contain mx-auto"
              />
              <p className="text-sm mt-2 font-semibold">${item.price}</p>
            </div>
          ))}
          {cart.length > 0 && (
            <div className="px-4 mt-6 text-right">
              <h2 className="text-xl font-bold">
                Total: $
                {cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)}
              </h2>
            </div>
          )}

        </div>

      )}
    </>
  );
}

export default Cart;
