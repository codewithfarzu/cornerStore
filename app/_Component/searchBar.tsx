'use client';
import { IoSearch } from "react-icons/io5";
import { RiShoppingCartLine } from "react-icons/ri";
import { GoPersonFill } from "react-icons/go";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
import { useEffect, useState, useCallback } from "react";
import { getCartCount } from "../serverFunction";

const SearchBar = () => {
    const { isSignedIn, user } = useUser();
    const [cartCount, setCartCount] = useState(0);

    const fetchCount = useCallback(async () => {
        if (isSignedIn) {
            const email = user.emailAddresses[0].emailAddress;
            const count = await getCartCount(email);
            setCartCount(count);
        }
    },[isSignedIn, user]);

    // Fetch on login
    useEffect(() => {
        if (isSignedIn) {
            fetchCount();
        } else {
            setCartCount(0);
        }
    }, [isSignedIn, user, fetchCount]);

    // Re-fetch when product added to cart
    useEffect(() => {
        window.addEventListener("cartUpdated", fetchCount);
        return () => window.removeEventListener("cartUpdated", fetchCount);
    }, [fetchCount]);
    return (
        <>
            {/* Upper Header */}
            <div className="first-header bg-zinc-950 items-center text-white fixed w-full">
                <div className="Offer w-max">
                    <p>Today&apos;s special Offers !</p>
                </div>
                <div className="search-bar">
                    <form action="/">
                        <input type="search" placeholder="Search.." name="search" className="bg-white text-black text-[15px]" />
                        <button type="submit" className="w-[15%] outline-none text-xl pt-[6.8px] pb-[16.7px] justify-items-center">
                            <IoSearch className="font-bold" />
                        </button>
                    </form>
                </div>

                <div className="cart-section">
                    <div className="view-cart w-max ml-8 flex items-center my-[3px]">
                        <Link href="./cart" className="pr-[14px] py-[11px]">View Your Cart</Link>
                        <div className="relative">
                            <RiShoppingCartLine className="text-[18px]" />
                            {cartCount > 0 && (
                                <span className="absolute -top-2 -right-5 bg-red-500 text-white text-[14px] font-bold w-[19px] h-[19px] rounded-full flex items-center justify-center">
                                    {cartCount}
                                </span>
                            )}
                        </div>
                    </div>

                    <div className="auth content-center justify-items-center cursor-pointer relative">
                        <ul>
                            <li className="Dropdown flex items-center gap-1"><GoPersonFill />&#9013;
                                <div className="drop-content absolute bg-white text-neutral-600 w-33 content-center pt-0 py-0 inset-ring-1 inset-ring-neutral-300 rounded-[3px] h-0 top-7 -right-23 overflow-hidden">
                                    <SignedOut >
                                        <SignInButton mode="modal">
                                            <button className="block mx-auto cursor-pointer hover:text-orange-500 duration-500 ease-in">
                                                Log in
                                            </button>
                                        </SignInButton>
                                        <SignUpButton mode="modal">
                                            <button className="block mx-auto pt-4 cursor-pointer hover:text-orange-500 duration-500 ease-in">
                                                Sign Up
                                            </button>
                                        </SignUpButton>
                                    </SignedOut>
                                    <SignedIn>
                                        <UserButton />
                                    </SignedIn>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="contact font-bold text-center content-center ml-[24px]">
                        <Link href="./contact">Contact</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SearchBar;