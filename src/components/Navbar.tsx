import { appleImg, cartBagImg, searchImg } from "../utils";

const navItems = [
    "Store",
    "Mac",
    "iPad",
    "Watch",
    "Vision",
    "AirPods",
    "TV & Home",
    "Entertainment",
    "Accessories",
    "Support",
];

export default function Navbar() {
    return (
        <header className="w-full py-5 sm:px-10 px-5">
            <div className="flex items-center justify-center gap-5">
                <img src={appleImg} alt="Apple" className="w-8 h-8" />
                <nav className="flex items-center justify-center gap-5">
                    <ul className="flex items-center justify-center gap-5">
                        {navItems.map((item) => (
                            <li key={item}>
                                <a href="">{item}</a>
                            </li>
                        ))}
                    </ul>

                    <button type="button">
                        <span className="sr-only">Search</span>
                        <img src={searchImg} alt="" className="w-8 h-8" />
                    </button>

                    <button type="button">
                        <span className="sr-only">Cart</span>
                        <img src={cartBagImg} alt="" className="w-8 h-8" />
                    </button>
                </nav>
            </div>

            <div>
                <p>
                    Get $180-$650 credit towards iPhone 15 or iPhone 15 Pro when
                    you trade in iPhone 11 or higher*
                </p>
            </div>
        </header>
    );
}
