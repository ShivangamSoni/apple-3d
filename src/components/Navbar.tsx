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
        <header className="w-full py-3 sm:px-10 px-5 relative mb-14">
            <div className="flex items-center justify-center gap-6">
                <img src={appleImg} alt="Apple" className="w-5 h-5" />
                <nav className="flex items-center justify-center gap-6">
                    <ul className="flex items-center justify-center gap-6">
                        {navItems.map((item) => (
                            <li key={item}>
                                <a
                                    href="#"
                                    className="text-sm text-primary-gray outline-none hover:text-white focus-visible:text-white transition-colors"
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <button type="button">
                        <span className="sr-only">Search</span>
                        <img src={searchImg} alt="" className="w-4 h-4" />
                    </button>

                    <button type="button">
                        <span className="sr-only">Cart</span>
                        <img src={cartBagImg} alt="" className="w-4 h-4" />
                    </button>
                </nav>
            </div>

            <div className="absolute left-0 w-screen mt-3 py-3 bg-primary-gray-300">
                <p className="text-center text-sm">
                    Get $180-$650 credit towards iPhone 15 or iPhone 15 Pro when
                    you trade in iPhone 11 or higher*
                </p>
            </div>
        </header>
    );
}
