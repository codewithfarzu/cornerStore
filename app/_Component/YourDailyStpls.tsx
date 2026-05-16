'use client';
import React, { useState, useEffect } from "react";
import { addProduct, fetchData } from "../serverFunction";
import postgres from "postgres";
import Image from "next/image";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";

const YourDailyStpls = () => {
    const [products, setProducts] = useState<postgres.Row[]>([]);
    const { isSignedIn, user } = useUser();
    const [toast, setToast] = useState(false);

    useEffect(() => {
        const product = async () => {
            const res = await fetchData();
            setProducts(res);
        }
        product();
    }, []);

    const handleCart = (p_id: number, p_name: string, p_price: number, p_imagepath: string) => {
        if (!isSignedIn) {
            alert("Please SignUp or Login to Add Products");
            return;
        }
        const email = user.emailAddresses[0].emailAddress;
        addProduct(email, p_id, 1, p_name, p_price, p_imagepath);

        // Tell SearchBar to re-fetch cart count
        window.dispatchEvent(new Event("cartUpdated"));

        // Show toast
        setToast(true);
        setTimeout(() => setToast(false), 3000);
    }

    return (
        <>
            {/* ===== Toast Notification ===== */}
            <div className={`fixed top-20 right-5 z-50 bg-green-700 text-white text-[14px] font-semibold px-7 py-3 rounded-lg shadow-lg
                transition-all duration-500 ease-in-out ${toast ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20 pointer-events-none"}`}>
                ✅ Added to cart
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 pt-10">
                {
                    products.map(item => {
                        return (
                            <div key={item.p_id}>
                                <div className="product-box p-2">
                                    <div className="product-item p-3">
                                        <Link href="" className="block justify-items-center">
                                            <Image src={item.p_imagepath} alt="image" width={160} height={160}></Image>
                                        </Link>
                                        <p className="text-[#252422bb] mt-[1.5em] mb-[1em]">{item.p_name}</p>
                                        <h4 className="text-[1em] font-bold">${item.p_price} <span className="ml-5 font-normal line-through text-[#252422bb]"> ${item.p_old_price}</span></h4>
                                        {/* Cart Button */}
                                        <input type="submit" name="submit" value="ADD TO CART" className="C-button" onClick={() => handleCart(item.p_id, item.p_name, item.p_price, item.p_imagepath)} />
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default YourDailyStpls;
