import ProductsWrapper from "../../components/ProductsWrapper/ProductsWrapper";

export default function Home() {
  return (
    <div className="flex flex-col h-full bg-white">
        <div className="p-12">
            <ProductsWrapper />
        </div>
    </div>
  );
}