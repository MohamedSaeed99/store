import Button from "../../../../components/Button/Button";
import { useAppSelector } from "../../../../redux/store";
import { ICart } from "../../../../models/Cart";
import { useCheckout } from "../../../../api/Checkout/useCheckout";


const Checkout = () => {
    const cart = useAppSelector((state: { cart: { cartState: ICart[]; }; }) => state.cart.cartState);
    const { mutate } = useCheckout();
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });

    const calculateTotal = () => {
        let total = 0;
        cart.forEach((cart) => {
            total += cart.count * cart.product.price.unit_price
        });

        return total;
    }
    
    const handleCheckout = async () => {
       mutate(cart);
    }

    return (
        <div className="sticky right-[65%] translate-x-[35%] bottom-0 pb-4 z-50 w-[60%]">
            <Button className="bg-blue-500 p-2 w-[100%] gap-4 justify-center items-center" onClick={handleCheckout}>
                <div>
                    ({formatter.format(calculateTotal())})
                </div>
                <div>
                    Checkout
                </div>
            </Button>
        </div>
    )
};

export default Checkout;