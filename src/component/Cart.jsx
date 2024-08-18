import { useDispatch, useSelector } from "react-redux";
// import ItemCard from "./ItemCard";
import ItemCard from "./ItemCard";
import { clearCart } from "../utils/cartSlice";
const Cart = () => {
  const cartItem = useSelector((store) => store.cart.items);
  console.log(cartItem);

  const dispatch = useDispatch();
  const handleClearCart = ()=>{
    dispatch(clearCart())
  }

  return (
    <div className="top-20 relative w-6/12 m-auto">
      <div className="flex justify-end">
        <button className="m-2   p-2 bg-black text-white rounded-md" onClick={handleClearCart}>
          Clear Cart
        </button>
      </div>

      <ItemCard items={cartItem} />
      {}
    </div>
  );
};
export default Cart;

