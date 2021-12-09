import { Navigate } from "react-router-dom"
import { useCart } from "../../contexts/CartContext";

export default function CartPrivateRoute({ children }) {
    const { cart, dispatch } = useCart();
    let redirect = null

    if (cart.length) {
      redirect = children
    } else {
      redirect = <Navigate to="/products" />
    }

    return redirect;
}