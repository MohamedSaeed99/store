import { useAppSelector } from "../../redux/store";
import { Link } from "react-router-dom";

const Header = () => {
    const cart = useAppSelector((state) => state.cart.cartState);
    const count = cart.map(cart => cart.count).reduce((a, b) => a + b, 0);

    return (
        <header className="sticky top-0 z-50 p-4 w-full flex flex-row items-center justify-between bg-slate-200 shadow-md">
            <div>
                Store
            </div>
            <div className="flex flex-row justify-center items-center gap-4">
                <Link to="/" >
                    <div className="rounded-sm flex items-center border-solid border-black border-[1px] pl-4 pr-4">
                        Home
                    </div>
                </Link>
                <Link to="/analytics">
                    <div className="rounded-sm flex items-center border-solid border-black border-[1px] pl-4 pr-4">
                        Analytics
                    </div>
                </Link>
                <Link to="/cart">
                    <div className="rounded-sm flex items-center border-solid border-black border-[1px] pl-4 pr-4">
                        <div className="mr-1">
                            {count}
                        </div>
                        <div className="ml-1">
                            Cart
                        </div>
                    </div>
                </Link>
            </div>
        </header>
    )
}

export default Header;