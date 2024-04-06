import Checkout from "./components/Checkout/Checkout";
import ProductCart from "./components/ProductCart/ProductCart";

const Cart = () => {
    return (
        <div className="flex flex-col">
            <ProductCart />
            <Checkout />
        </div>
    )
}

export default Cart;