'use client';
import SideBar from "@/app/_Component/SideBar";
import { useEffect, useState, } from "react";
import { DelData, getCartProducts, UpdateQty, UpdatePrice } from "@/app/serverFunction";
import { useUser } from "@clerk/nextjs";
import postgres from "postgres";
import Image from "next/image";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import { MdLocationOn } from "react-icons/md";

const Cart = () => {
    const [product, setProduct] = useState<postgres.Row[]>([]);
    const { isSignedIn, user } = useUser();
    const [msg, setMsg] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [orderPlaced, setOrderPlaced] = useState(false);
    const [form, setForm] = useState({ fullName: "", phone: "", pincode: "", state: "", city: "", address: "", landmark: "", addressType: "Home", });


    let email = "";
    if (isSignedIn) {
        email = user.emailAddresses[0].emailAddress;
    }

    useEffect(() => {
        if (isSignedIn) {
            const getchData = async () => {
                const res = await getCartProducts(email);
                setProduct(res);
                console.log(res);
            }
            getchData();
        };
    }, [isSignedIn, email, msg]);

    // Calculate total Price
    const totalPrice = product.reduce((acc, item) => acc + Number(item.p_price), 0)


    // { ========== Delete Function ========== }
    const handleDelete = (sno: number) => {
        DelData(sno);
        setMsg("" + Math.random());
        // Tell SearchBar to re-fetch cart count
        window.dispatchEvent(new Event("cartUpdated"));
        console.log(sno);
    }

    // { ========== Quantity Increase ==========}
    const handleIncrease = async (sno: number, currentQty: number, currentPrice: number) => {
        const unitPrice = Number(currentPrice) / currentQty;
        const newQty = currentQty + 1;
        const newPrice = Number(currentPrice) + unitPrice;
        setProduct(prev => prev.map(item =>
            item.sno === sno ? { ...item, p_qty: newQty, p_price: newPrice } : item
        ));
        await UpdateQty(sno, newQty);
        await UpdatePrice(sno, newPrice);
    }

    // { ========== Quantity Decrease ==========}
    const handleDecrease = async (sno: number, currentQty: number, currentPrice: number) => {
        if (currentQty > 1) {
            const unitPrice = Number(currentPrice) / currentQty;
            const newQty = currentQty - 1;
            const newPrice = Number(currentPrice) - unitPrice;
            setProduct(prev => prev.map(item =>
                item.sno === sno ? { ...item, p_qty: newQty, p_price: newPrice } : item
            ));
            await UpdateQty(sno, newQty);
            await UpdatePrice(sno, newPrice);
        }
    }

    // Handle Form Change
    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    // Order submit button
    const handleOrderSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setShowModal(false);
        setOrderPlaced(true);
        setForm({ fullName: "", phone: "", pincode: "", state: "", city: "", address: "", landmark: "", addressType: "Home", });

        // Show msg
        setOrderPlaced(true);
        setTimeout(() => setOrderPlaced(false), 3000);
    }

    // Run loop and Do calculation 
    return (
        <>
            <div className="banner">
                <aside>
                    <SideBar />
                </aside>
                <div className="pl-6">
                    <h2 className="text-2xl font-bold">My Cart</h2>
                    {isSignedIn && product.length === 0 && (
                        <div className="px-10">
                            <div className="empty-cart justify-items-center">
                                <Image src="/EmptyCart-image/empty-cart.svg" alt="Empty Cart" width={138} height={138} />
                            </div>
                            <p className="text-center text-black text-lg font-medium">Oops Your Cart is Empty !</p>
                            <p className="text-center text-gray-500 text-[16px] font-normal">It&#39;s a nice day to buy the items you saved for later! <br /> or <Link href="/" className="text-[#2874f0] text-[13px] font-medium">Continue Shopping</Link></p>
                        </div>
                    )}
                    {!isSignedIn && (
                        <div className="text-center text-[#000] text-lg font-medium mt-10">
                            ! Please Sign in to view your cart
                        </div>
                    )}

                    {/* ===== Order Placed Success Message ===== */}
                    {orderPlaced && (
                        <div className="mx-5 mt-4 p-4 bg-green-100 border border-green-400 rounded-lg text-green-700 font-medium text-[15px]">
                            ✅ Your order has been placed successfully! We will deliver soon.
                        </div>
                    )}

                    {isSignedIn && product.length > 0 && (
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 pt-6">
                            <div className="CartProduct">
                                {
                                    product.map(item => {
                                        return (
                                            <div key={item.sno} className="cart-box p-3 border-1 border-[#d9d9d9] rounded-lg shadow mb-3 w-[100%] h-[150px]">
                                                <div className=" p-mainbox flex">
                                                    <div className="proimage p-[4px]">
                                                        <Image src={item.p_imagepath} alt={item.p_name} width={100} height={100} />
                                                    </div>
                                                    <div className="pl-3 w-full relative">
                                                        <h3 className="text-gray-500 font-medium mb-1 text-[14px]">{item.p_name}</h3>
                                                        <p className="font-bold text-[18px] mb-1">${Number(item.p_price).toFixed(2)}</p>
                                                        <p className="font-medium text-[14px] mb-2">Quantity : {item.p_qty}</p>
                                                        {/* Delete Product Button */}
                                                        <input type="button" value="Remove" onClick={() => handleDelete(item.sno)} className="absolute -top-1 right-0 text-[16px] font-semibold hover:text-red-600 cursor-pointer" />
                                                        {/* Quantity Control Button */}
                                                        <input type="button" value="&#8722;" onClick={() => handleDecrease(item.sno, item.p_qty, item.p_price)} className="text-[18px] w-[30px] height-[30px] border-[1px] border-[#9f9d9d] hover:border-[#2874f0] rounded-lg mr-2 text-center items-center cursor-pointer" />
                                                        <input type="button" value="&#43;" onClick={() => handleIncrease(item.sno, item.p_qty, item.p_price)} className="text-[18px] w-[30px] height-[30px] border-[1px] border-[#9f9d9d] hover:border-[#2874f0] rounded-lg ml-2 text-center items-center cursor-pointer" />
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>

                            <div className="paymentDetailes border-1 border-[#d9d9d9] rounded-lg shadow mr-5 pt-3 pr-5 pl-5 pb-5 flex flex-col justify-between min-h-[200px] mb-[12px]">
                                <div>
                                    <h3 className="text-2xl font-bold mb-4">Payment Details</h3>
                                    <div className="border-b border-[#d9d9d9] pb-3 mb-3">
                                        {product.map(item => (
                                            <div key={item.sno} className="flex justify-between text-[14px] text-gray-600 mb-2">
                                                <span className="font-semibold">{item.p_name} x {item.p_qty}</span>
                                                <span className="font-semibold text-[15px]">${Number(item.p_price).toFixed(2)}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <div className="total-amount flex justify-between font-bold text-[16px] mb-4">
                                        <span className="text-[20px]">Total</span>
                                        <span className="text-[#2874f0] text-[20px]">${totalPrice.toFixed(2)}</span>
                                    </div>
                                    <button onClick={() => setShowModal(true)} className="w-full bg-[#fb641b] hover:bg-[#2874f0] text-white font-bold text-[15px] py-3 rounded-lg cursor-pointer transition duration-300 ease-in-out">
                                        Place Order
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div >

            {/* ===== Address Modal ===== */}
            {
                showModal && (
                    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
                        <div className="bg-white w-[95vw] sm:w-[550px] max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl">

                            {/* Modal Header */}
                            <div className="flex items-center justify-between bg-[#2874f0] px-6 py-4 rounded-t-xl">
                                <div className="flex items-center gap-2 text-white">
                                    <MdLocationOn className="text-[22px]" />
                                    <h2 className="text-[18px] font-bold">Delivery Address</h2>
                                </div>
                                <button onClick={() => setShowModal(false)} className="text-white hover:text-gray-200 cursor-pointer">
                                    <IoClose className="text-[24px]" />
                                </button>
                            </div>

                            {/* Modal Form */}
                            <form onSubmit={handleOrderSubmit} className="px-6 py-5 flex flex-col gap-4">

                                {/* Full Name & Phone */}
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <div className="flex flex-col w-1/2">
                                        <label className="text-[13px] font-semibold text-gray-600 mb-1">Full Name <span className="text-red-500">*</span></label>
                                        <input
                                            type="text"
                                            name="fullName"
                                            value={form.fullName}
                                            onChange={handleFormChange}
                                            required
                                            placeholder="Enter full name"
                                            className="border border-gray-300 rounded-md px-3 py-2 text-[14px] outline-none focus:border-[#2874f0]"
                                        />
                                    </div>
                                    <div className="flex flex-col w-1/2">
                                        <label className="text-[13px] font-semibold text-gray-600 mb-1">Phone Number <span className="text-red-500">*</span></label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={form.phone}
                                            onChange={handleFormChange}
                                            required
                                            placeholder="10-digit mobile number"
                                            pattern="[0-9]{10}"
                                            className="border border-gray-300 rounded-md px-3 py-2 text-[14px] outline-none focus:border-[#2874f0]"
                                        />
                                    </div>
                                </div>

                                {/* Pincode & State */}
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <div className="flex flex-col w-1/2">
                                        <label className="text-[13px] font-semibold text-gray-600 mb-1">Pincode <span className="text-red-500">*</span></label>
                                        <input
                                            type="text"
                                            name="pincode"
                                            value={form.pincode}
                                            onChange={handleFormChange}
                                            required
                                            placeholder="6-digit pincode"
                                            pattern="[0-9]{6}"
                                            className="border border-gray-300 rounded-md px-3 py-2 text-[14px] outline-none focus:border-[#2874f0]"
                                        />
                                    </div>
                                    <div className="flex flex-col w-1/2">
                                        <label className="text-[13px] font-semibold text-gray-600 mb-1">State <span className="text-red-500">*</span></label>
                                        <input
                                            type="text"
                                            name="state"
                                            value={form.state}
                                            onChange={handleFormChange}
                                            required
                                            placeholder="Enter state"
                                            className="border border-gray-300 rounded-md px-3 py-2 text-[14px] outline-none focus:border-[#2874f0]"
                                        />
                                    </div>
                                </div>

                                {/* City */}
                                <div className="flex flex-col">
                                    <label className="text-[13px] font-semibold text-gray-600 mb-1">City / District / Town <span className="text-red-500">*</span></label>
                                    <input
                                        type="text"
                                        name="city"
                                        value={form.city}
                                        onChange={handleFormChange}
                                        required
                                        placeholder="Enter city"
                                        className="border border-gray-300 rounded-md px-3 py-2 text-[14px] outline-none focus:border-[#2874f0]"
                                    />
                                </div>

                                {/* Address */}
                                <div className="flex flex-col">
                                    <label className="text-[13px] font-semibold text-gray-600 mb-1">Address (House No, Building, Street) <span className="text-red-500">*</span></label>
                                    <textarea
                                        name="address"
                                        value={form.address}
                                        onChange={handleFormChange}
                                        required
                                        rows={3}
                                        placeholder="Enter complete address"
                                        className="border border-gray-300 rounded-md px-3 py-2 text-[14px] outline-none focus:border-[#2874f0] resize-none"
                                    />
                                </div>

                                {/* Landmark */}
                                <div className="flex flex-col">
                                    <label className="text-[13px] font-semibold text-gray-600 mb-1">Landmark (Optional)</label>
                                    <input
                                        type="text"
                                        name="landmark"
                                        value={form.landmark}
                                        onChange={handleFormChange}
                                        placeholder="E.g. near Apollo Hospital"
                                        className="border border-gray-300 rounded-md px-3 py-2 text-[14px] outline-none focus:border-[#2874f0]"
                                    />
                                </div>

                                {/* Address Type */}
                                <div className="flex flex-col">
                                    <label className="text-[13px] font-semibold text-gray-600 mb-2">Address Type</label>
                                    <div className="flex gap-4">
                                        {["Home", "Work", "Other"].map(type => (
                                            <label key={type} className="flex items-center gap-2 cursor-pointer text-[14px]">
                                                <input
                                                    type="radio"
                                                    name="addressType"
                                                    value={type}
                                                    checked={form.addressType === type}
                                                    onChange={handleFormChange}
                                                    className="accent-[#2874f0]"
                                                />
                                                {type}
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Order Summary inside modal */}
                                <div className="bg-[#f1f3f6] rounded-lg p-4 text-[14px]">
                                    <p className="font-semibold text-gray-700 mb-2">Order Summary</p>
                                    {product.map(item => (
                                        <div key={item.sno} className="flex justify-between text-gray-600 mb-1">
                                            <span>{item.p_name} x {item.p_qty}</span>
                                            <span>${Number(item.p_price).toFixed(2)}</span>
                                        </div>
                                    ))}
                                    <div className="flex justify-between font-bold text-[15px] mt-2 border-t border-gray-300 pt-2">
                                        <span>Total Payable</span>
                                        <span className="text-[#fb641b]">${totalPrice.toFixed(2)}</span>
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <button type="submit" className="w-full bg-[#fb641b] hover:bg-[#2874f0] text-white font-bold text-[15px] py-3 rounded-lg cursor-pointer transition duration-300 ease-in-out mt-2">
                                    Confirm Order — ${totalPrice.toFixed(2)}
                                </button>

                            </form>
                        </div>
                    </div>
                )
            }
        </>
    );

}
export default Cart;
