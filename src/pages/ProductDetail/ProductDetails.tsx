import { useParams } from "react-router-dom";
import { useProductById } from "../../api/Products/useProducts";

const ProductDetail = () => {
    const { product_id } = useParams();
    const { data: product, isLoading } = useProductById(product_id!);
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });

    return (
        <div className="flex">
            <div className='w-3/5 h-full'>
                <img className='object-cover' src={product?.image}/>
            </div>
            <div className="border-solid border-[1px] border-black"/>
            <div>
                <h1>{product?.name}</h1>
                <p>{product?.description}</p>
                {/* <p>{formatter.format(product!.price.unit_price)}</p> */}
            </div>
        </div>
    )

}

export default ProductDetail;