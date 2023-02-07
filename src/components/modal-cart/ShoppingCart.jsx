const ShoppingCart = ({ product, addCart, delFromCart, count }) => {
  if (!product) return;

  const { id, title, image, price, quantity } = product;

  const TableShopping = ({ quantity, price }) => {
    const subTotal = quantity * price;
    return (
      <table className="w-full h-20 bg-slate-200">
        <thead>
          <tr>
            <th>Amount</th>
            <th>Price</th>
            <th>SubTotal</th>
          </tr>
        </thead>
        <tbody className="text-center">
          <tr>
            <td>{quantity}</td>
            <td>${price}</td>
            <td>${subTotal.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    );
  };

  const handleClear = (id) => {
    count === 1 ? delFromCart(id, true) : delFromCart(id);
  };

  return (
    <div className="w-11/12 h-52 m-auto bg-slate-200 flex">
      <div className="w-1/4 bg-white grid place-items-center">
        <img className="w-5/6 h-3/5" src={image} alt={title} />
      </div>
      <div className="w-3/4 h-full flex flex-col justify-evenly">
        <div className="h-12">
          <p className="text-sm text-center tracking-wide pt-2 px-3 ">
            {title}
          </p>
        </div>

        <TableShopping quantity={quantity} price={price} />

        <div className="w-full h-14 bg-slate-400 flex justify-around items-center">
          <button
            onClick={() => handleClear(id)}
            className="w-10 h-10 bg-blue-500 hover:bg-blue-700 text-white font-bold border border-blue-700 rounded-full">
            <span>-</span>
          </button>

          <button
            onClick={() => addCart(id)}
            className="w-10 h-10 bg-blue-500 hover:bg-blue-700 text-white font-bold border border-blue-700 rounded-full">
            <span>+</span>
          </button>

          <button
            onClick={() => delFromCart(id, true)}
            className=" bg-blue-500 hover:bg-blue-700 text-white font-bold px-3 py-2 border border-blue-700">
            Quit to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
