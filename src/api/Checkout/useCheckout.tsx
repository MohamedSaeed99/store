import { loadStripe } from "@stripe/stripe-js";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { ICart } from "../../models/Cart";

const stripePromise = loadStripe(
    import.meta.env.VITE_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

const postCheckout = async (cart: ICart[]) => {
    try {
        const stripe = await stripePromise;
        const quantityWithId = cart.map(cart => {
            return {
                quantity: cart.count,
                product: cart.product
            }
        })

        const sessionId = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/checkout/`, {
            cart: quantityWithId
        }).then(res => res.data)

        await stripe!.redirectToCheckout({
            sessionId: sessionId,
        });
    } catch(error) {
        console.log(error)
    }
}

export const useCheckout = () => {
    return useMutation({
        mutationFn: (cart: ICart[]) => postCheckout(cart)
    });
}