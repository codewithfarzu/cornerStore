import Link from "next/link";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const SideBar = () => {
    return (
        <>
            <aside className="banner_navLeft">
                <nav className="side_navbar">
                    <button type="button" className="sideNav_toggler"></button>
                    <div className="navbar_collapse" id="navbar">
                        <ul className="navbar_nav">
                            <li className="side_nav_item"><Link href="/BrandedFood" className="pr-36">Branded Foods</Link></li>
                            <li className="side_nav_item"><Link href="/" className="pr-36">Households</Link></li>
                            <li className="side_nav_item Dropdown">
                                <Link href="/" className="flex items-center">Veggies & Fruits
                                    <MdOutlineKeyboardArrowDown />
                                </Link>
                                <div className="Dropdown_menu vegetables_menu inset-ring-1 inset-ring-gray-300">
                                    <Link href="/" className="dropDown_item">Vegetables</Link>
                                    <Link href="/" className="dropDown_item">Fruits</Link>
                                </div>
                            </li>
                            <li className="side_nav_item"><Link href="/">Kitchen</Link></li>
                            <li className="side_nav_item"><Link href="/">Short Codes</Link></li>
                            <li className="side_nav_item Dropdown">
                                <Link href="/" className="flex items-center">Beverages
                                    <MdOutlineKeyboardArrowDown />
                                </Link>
                                <div className="Dropdown_menu vegetables_menu inset-ring-1 inset-ring-gray-300">
                                    <Link href="/" className="dropDown_item">Soft Drink</Link>
                                    <Link href="/" className="dropDown_item">Juices</Link>
                                </div>
                            </li>
                            <li className="side_nav_item"><Link href="/">Pet Food</Link></li>
                            <li className="side_nav_item Dropdown">
                                <Link href="/" className=" flex items-center">Frozen Food Snacks
                                    <MdOutlineKeyboardArrowDown />
                                </Link>
                                <div className="Dropdown_menu vegetables_menu inset-ring-1 inset-ring-gray-300">
                                    <Link href="/" className="dropDown_item">Frozen Snacks</Link>
                                    <Link href="/" className="dropDown_item">Frozen Nonveg</Link>
                                </div>
                            </li>
                            <li className="side_nav_item"><Link href="/">Bread & Bakery</Link></li>
                            <li className="side_nav_item Dropdown">
                                <Link href="/" className=" flex items-center">Pages
                                    <MdOutlineKeyboardArrowDown />
                                </Link>
                                <div className="Dropdown_menu vegetables_menu inset-ring-1 inset-ring-gray-300">
                                    <Link href="/" className="dropDown_item">Blog</Link>
                                    <Link href="/" className="dropDown_item">Blog Single</Link>
                                    <Link href="/" className="dropDown_item">404</Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </aside>
        </>
    )
}

export default SideBar;