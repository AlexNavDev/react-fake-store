import ICONCART from "../../assets/icon-cart-cat.png";
import { useModal } from "../../hooks/useModal";
import ModalCart from "../modal-cart/ModalCart";
import Products from "./Products";
import { useSaveShoppingCart } from "../../hooks/useSaveShoppingCart";

const Main = ({ data }) => {
  const { isOpen, openModal, closeModal } = useModal(false);

  const {
    shopping,
    products,
    cart,
    total,
    count,
    addCart,
    delFromCart,
    clearCart,
    handleDescription,
  } = useSaveShoppingCart(data, closeModal);

  return (
    <div className="relative w-full flex flex-col items-center">
      <h1 className="font-serif text-5xl tracking-wide text-custom-white font-bold text-shadow absolute">
        Products
      </h1>

      <div className="w-16 h-16 z-20 bg-slate-700   rounded-full sticky top-0 left-full mx-3 flex flex-col items-center justify-center">
        <button onClick={openModal} disabled={count > 0 ? false : true}>
          <img className="w-12" src={ICONCART} alt="icon-cart" />
        </button>

        {count > 0 && (
          <p className="absolute w-6 h-6 font-bold font-sans  text-center text-lg text-secondary rounded-full bg-white top-3 right-1">
            {shopping.length}
          </p>
        )}
      </div>
      <section>
        <Products
          products={products}
          shopping={shopping}
          addCart={addCart}
          delFromCart={delFromCart}
          handleDescription={handleDescription}
        />
      </section>

      <section
        className={`w-screen bg-gray-900 bg-gray-900/90 fixed top-0 bottom-0 left-0 right-0 z-30 ${
          isOpen ? "flex" : "hidden"
        } flex-col justify-center items-center`}>
        <div className="w-screen h-20 max-w-screen-sm  flex justify-around items-center bg-slate-200 border-b-4 border-b-primary">
          <h3 className="font-bold tracking-wider p-2 text-center text-3xl text-red-600">
            Your shopping
          </h3>
          <button
            className="w-28 h-10  px-3 font-bold text-white bg-blue-500 border border-blue-500 w-22 hover:bg-blue-700 rounded-md"
            onClick={clearCart}>
            Clear Cart
          </button>
        </div>
        <ModalCart
          closeModal={closeModal}
          cart={cart}
          addCart={addCart}
          delFromCart={delFromCart}
          clearCart={clearCart}
          total={total}
          count={count}
        />
      </section>
    </div>
  );
};

export default Main;
