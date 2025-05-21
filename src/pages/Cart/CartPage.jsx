import { CartEmpty } from "./components/CartEmpty";
import { CartList } from "./components/CartList";
import { useCart } from "../../context";

export const CartPage = () => {
  const { cartList } = useCart();

  return (
    <main>
      {!cartList.length ? <CartEmpty /> : <CartList />}
    </main>
  )
}