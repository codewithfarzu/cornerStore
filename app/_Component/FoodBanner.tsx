import Image from "next/image";

const FoodBanner = () => {
    return (
        <>
            <div className="food-img relative">
                <Image src="/BrandedBanner_img-1.jpg" alt="Food Banner" width={1680} height={300} className="Image h-[300px] object-cover relative"/>
                <h2 className=" best-deal absolute bg-white text-[2em] text-orange-600 font-[350] right-97 top-16 px-[.9em] py-[.2em] rounded-sm">Best Deals For New Products</h2>
            </div>
        </>
    );
}
export default FoodBanner;