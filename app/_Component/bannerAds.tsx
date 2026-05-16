import Image from "next/image";
const BannerAds = () => {
    return (
        <>
            <div className="banner-bottom overflow-hidden">
                <div className="banner-bottom_sub"> </div>
                <div className="flex flex-col md:flex-row gap-4 banner-bottom_sub1 px-4 py-8">
                    <div className="relative w-full md:w-1/3">
                        <Image src="/banner_bottom_img-1.jpg" alt="banner" width={640} height={426} className="rounded-[4px] w-full" />
                        <div className="discount text-center">
                            <p className="text-xl font-bold text-black">Discount Offer
                                <span className="span-1 text-white">25%</span>
                            </p>
                        </div>
                    </div>
                    <div className="relative w-full md:w-1/3">
                        <Image src="/banner_bottom_img-2.jpg" alt="banner" width={640} height={426} className="rounded-[4px] w-full" />
                        <div className="bestStore absolute text-lg top-4 w-max">
                            <p>Introducing</p>
                            <p className="pl-[4em] font-semibold text-blue-600">Best Store</p>
                            <p>For <span className="font-semibold text-orange-500">GROCERIES</span></p>
                        </div>
                    </div>
                    <div className="relative w-full md:w-1/3">
                        <Image src="/banner_bottom_img-3.jpg" alt="banner" width={640} height={426} className="rounded-[4px] w-full" />
                        <div className="saveUpto absolute">
                            <p className="text-xl font-bold">
                                SAVE
                                <span className="font-[350] text-orange-500 block">UPTO</span>
                                $10
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BannerAds;