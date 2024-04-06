import { AppDispatch, useAppSelector } from "../../../../redux/store";
import Product from "../../../../components/Product/Product";
import Button from "../../../../components/Button/Button";
import { IProduct } from "../../../../models/Product";
import { addProduct, removeProduct } from "../../../../redux/features/product_slice";
import { useDispatch } from "react-redux";

const ProductCart = () => {
    const dispatch = useDispatch<AppDispatch>();
    const cart = useAppSelector((state) => state.cart.cartState);

    const handleAddProduct = (product: IProduct) => {
        dispatch(addProduct(product))
    }

    const handleRemoveProduct = (product: IProduct) => {
        dispatch(removeProduct(product))
    }

    return (
        <div className="flex flex-col">
            {
                cart!.map((cart, index) => {
                    return (
                        <div key={index} className="border-solid border-[1px] p-2 m-2 hover:shadow-md">
                            <Product className="flex flex-row gap-4" product={cart.product} key={index} />
                            <div className="flex justify-center items-center">
                                <Button onClick={() => handleRemoveProduct(cart.product)}>{cart.count == 1 ? "trash" : "-"}</Button>
                                <div className="flex justify-center items-center border-solid border-[1px] w-10">
                                    {cart.count}
                                </div>
                                <Button onClick={() => handleAddProduct(cart.product)}>+</Button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProductCart;