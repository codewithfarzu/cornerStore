import Link from "next/link";
import { FaCheck } from "react-icons/fa";
import Image from "next/image";

const TopProducts = () => {
    return (
        <>
            <div className="mt-10 rounded-[4px] bg-[#f1f3f6] p-4 flex flex-col lg:flex-row gap-4">

                {/* ===== Left Category List ===== */}
                <div className="w-full lg:w-1/4">
                    <div className="bg-white p-4 uppercase rounded-[4px]">
                        <ul>
                            {["All Brands", "Vegetables", "Fruits", "Juices", "Pet Food", "Bread & Bakery", "Cleaning", "Spices", "Dry Fruits", "Dairy Products"].map((cat) => (
                                <li key={cat} className="mb-5">
                                    <Link href="/" className="flex items-center text-[14px] hover:text-[#2874f0] transition-colors duration-300">
                                        <FaCheck className="text-[#2874f0] mr-3 shrink-0" />{cat}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* ===== Right Product Images ===== */}
                <div className="w-full lg:w-3/4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">

                        {/* Image 1 — tall left */}
                        <div className="sm:row-span-2">
                            <Image
                                src="/TopPrdct/1-image.jpg"
                                alt="Product 1"
                                width={640}
                                height={960}
                                className="rounded-[4px] w-full h-full object-cover"
                            />
                        </div>

                        {/* Image 2 — top middle */}
                        <div className="relative">
                            <Image
                                src="/TopPrdct/2-image.jpg"
                                alt="Product 2"
                                width={400}
                                height={300}
                                className="rounded-[4px] w-full object-cover"
                            />
                            <button className="absolute top-3 right-3 px-4 py-1.5 bg-blue-600 text-white hover:bg-orange-500 font-semibold rounded-[4px] text-[13px] transition-colors duration-300">
                                <Link href="BrandedFood">SHOP NOW</Link>
                            </button>
                        </div>

                        {/* Image 3 — top right */}
                        <div>
                            <Image
                                src="/TopPrdct/3-image.jpg"
                                alt="Product 3"
                                width={300}
                                height={200}
                                className="rounded-[4px] w-full object-cover"
                            />
                        </div>

                        {/* Image 4 — bottom middle */}
                        <div className="relative">
                            <Image
                                src="/TopPrdct/4-image.jpg"
                                alt="Product 4"
                                width={300}
                                height={200}
                                className="rounded-[4px] w-full object-cover"
                            />
                            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#fb641b] text-white font-bold text-[13px] px-3 py-1 rounded-full">
                                Special Offers
                            </span>
                        </div>

                        {/* Image 5 — bottom right */}
                        <div>
                            <Image
                                src="/TopPrdct/5-image.jpg"
                                alt="Product 5"
                                width={400}
                                height={300}
                                className="rounded-[4px] w-full object-cover"
                            />
                        </div>

                    </div>

                    {/* Offer Banner */}
                    <div className="mt-4 text-center sm:text-right">
                        <h4 className="text-[1em] sm:text-[1.2em] capitalize font-bold">
                            Get <span className="text-orange-500 animate-pulse">25% Off</span> on first order and also get gift voucher
                        </h4>
                    </div>
                </div>

            </div>
        </>
    );
}

export default TopProducts;
