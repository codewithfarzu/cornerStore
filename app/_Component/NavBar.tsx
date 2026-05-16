'use client';
import Link from "next/link";
import { MdLocalPhone } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import { usePathname } from "next/navigation";

const NavBar = () => {
    const pathname = usePathname();

    return (
        <div className="logo_product">
            <div className="site-header grid">
                <section>
                    <div className="container mx-auto">
                        <nav className="flex items-center justify-between flex-wrap gap-3">
                            <h1>
                                <Link href="/" className="navbar-brand">
                                    <span className="caption bg-orange-500 font-bold text-white">C</span>orner
                                    <span className="subCaption ml-2">Store</span>
                                </Link>
                            </h1>

                            <ul className="nav-bar flex flex-wrap">
                                <li className="nav-items"><Link href="/event" className={pathname === "/" ? "active" : " "}>Event</Link></li>
                                <li className="nav-items"><Link href="/about" className={pathname === "/about" ? "active" : " "}>About</Link></li>
                                <li className="nav-items"><Link href="/beastDeal" className={pathname === "/beastDeal" ? "active" : ""}>Best Deals</Link></li>
                                <li className="nav-items"><Link href="/services" className={pathname === "/services" ? "active" : ""}>Services</Link></li>
                            </ul>

                            <ul className="hidden lg:flex phone-email">
                                <li className="flex items-center mr-[2em] hover:text-orange-500 duration-500 ease-in">
                                    <MdLocalPhone className="mr-4" />
                                    <Link href="tel:(+91)890040608">(+91) 8900406***</Link>
                                </li>
                                <li className="flex items-center hover:text-orange-500 duration-500 ease-in">
                                    <MdOutlineMailOutline className="mr-4" />
                                    <Link href="mailto:farzanakhtar5491@gmail.com">corner_store@gmail.com</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default NavBar;