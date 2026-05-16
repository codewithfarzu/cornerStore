import Link from "next/link";
import Image from "next/image";
import { FaAngleRight } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { GrGooglePlus } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <div className="container mx-auto">
                <div className="flex flex-wrap gap-y-8">
                    <div className="w-full sm:w-1/2 lg:w-1/4 px-4">
                        <div className="info-sec">
                            <h3 className="text-white text-[1.2em] font-bold uppercase">information</h3>
                            <ul>
                                <li><FaAngleRight /><Link href="/event">Event</Link></li>
                                <li><FaAngleRight /><Link href="/about">About</Link></li>
                                <li><FaAngleRight /><Link href="/services">Services</Link></li>
                                <li><FaAngleRight /><Link href="/bestDeal">Best Deals</Link></li>
                                <li><FaAngleRight /><Link href="/">Short Codes</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/4 px-4">
                        <div className="info-sec">
                            <h3 className="text-white text-[1.2em] font-bold uppercase">policy info</h3>
                            <ul>
                                <li><FaAngleRight /><Link href="/">FAQ</Link></li>
                                <li><FaAngleRight /><Link href="/">Privacy Policy</Link></li>
                                <li><FaAngleRight /><Link href="/">Terms Of Use</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/4 px-4">
                        <div className="info-sec">
                            <h3 className="text-white text-[1.2em] font-bold uppercase">what in stores</h3>
                            <ul>
                                <li><FaAngleRight /><Link href="/">Pet Food</Link></li>
                                <li><FaAngleRight /><Link href="/">Frozen Snacks</Link></li>
                                <li><FaAngleRight /><Link href="/">Kitchen</Link></li>
                                <li><FaAngleRight /><Link href="/BrandedFood">Branded Food</Link></li>
                                <li><FaAngleRight /><Link href="/HouseHold">Household</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/4 px-4">
                        <div className="info-sec">
                            <h3 className="text-white text-[1.2em] font-bold uppercase">twitter posts</h3>
                            <ul>
                                <li className="twitter">
                                    <div className="flex items-center">
                                        <FaTwitter className="text-[#007bff]" />
                                        <i className="ml-[1em]">01 day ago</i>
                                    </div>
                                    <span>
                                        Nonnumquam
                                        <Link href="/">http://sd.ds/13jklf# </Link>
                                        eius modi tempora incidunt ut labore et
                                        <Link href="/">http://sd.ds/1389kjklf# </Link>
                                        quo nulla.
                                    </span>
                                </li>
                                <li className="twitter">
                                    <div className="flex items-center">
                                        <FaTwitter className="text-[#007bff]" />
                                        <i className="ml-[1em]">02 day ago</i>
                                    </div>
                                    <span>
                                        Nonnumquam
                                        <Link href="/">http://sd.ds/13jklf# </Link>
                                        eius modi tempora incidunt ut labore et
                                        <Link href="/">http://sd.ds/1389kjklf# </Link>
                                        quo nulla.
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap gap-y-6 pt-4">
                    <div className="w-full sm:w-1/2 px-4">
                        <div className="payment">
                            <h4 className="text-[1em] capitalize mb-[1em] font-bold text-[#2874f0]">100% Secure Payments</h4>
                            <Image src="/footer/payment-img.png" alt="image" width={210} height={210} />
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 px-4">
                        <div className="social-media">
                            <h4 className="text-[1em] text-[#fff] font-bold capitalize mb-[1em]">Connect with us</h4>
                            <ul className="flex text-[#fff]">
                                <li><Link href="/" className="border-2 hover:bg-[#3b5998] hover:border-[#3b5998] duration-500 ease-in"><FaFacebookF /></Link></li>
                                <li><Link href="/" className="border-2 hover:bg-[#55acee] hover:border-[#55acee] duration-500 ease-in"><FaTwitter /></Link></li>
                                <li><Link href="/" className="border-2 hover:bg-[#dd4b39] hover:border-[#dd4b39] duration-500 ease-in text-[22px]"><GrGooglePlus /></Link></li>
                                <li><Link href="/" className="border-2 hover:bg-[#833ab4] hover:border-[#833ab4] duration-500 ease-in"><FaInstagram /></Link></li>
                                <li><Link href="/" className="border-2 hover:bg-[#ea4c89] hover:border-[#ea4c89] duration-500 ease-in"><FaDribbble /></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="copy-right border-t-1 border-[#474a4ead] mt-[4em] pt-[3em] text-center">
                    <p className="text-[1em] text-[#878787]">© 2021 Corner Store. All rights reserved | Design by <span className="text-white hover:text-[#fb641b] duration-502">Md Farzan</span></p>
                </div>
            </div>
        </>
    );
}

export default Footer;