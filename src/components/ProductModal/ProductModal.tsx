import { IProduct } from "../../models/Product"
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { addProduct } from "../../redux/features/product_slice";

interface ProductModalProps {
    product: IProduct;
    setCloseModal: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, setCloseModal }) => {
    const dispatch = useDispatch<AppDispatch>();

    const handleAddProduct = (product: IProduct) => {
        dispatch(addProduct(product));
    }

    return (
        <div className="sticky right-0 flex flex-col h-screen w-[600px] border-solid border-[1px] border-black bg-white">
            <div className="flex flex-col">
                <img src={product.image}/>
                <div className="flex flex-col">
                    <h1>{product.name}</h1>
                    <h2>{product.description}</h2>
                    <h2>{product.price.unit_price}</h2>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <Button onClick={() => handleAddProduct(product)}>Add to Cart</Button>
            </div>
        </div>
    )
}

export default ProductModal;