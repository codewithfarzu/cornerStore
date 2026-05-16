'use client';
import SideBar from "./_Component/SideBar";
import Hero_Slider from "./_Component/Hero";
import BannerAds from "./_Component/bannerAds";
import YourDailyStpls from "./_Component/YourDailyStpls";
import TopProducts from "./_Component/TopProducts";
import NewsLetter from "./_Component/newsLetter";
// import { SignedIn, useUser } from "@clerk/nextjs";

const HomePage = () => {
  // const { isSignedIn, user } = useUser();

  // if(!isSignedIn){
  //   return <div className="text-2xl text-center content-center my-50">
  //     Please Sign Up or Login
  //   </div>
  // }
  return (
    <>
      {/* ============== side Bar & slider ============= */}
      <div className="banner">
        <aside>
          <SideBar />
        </aside>

        <div className="slide_banner">
          <Hero_Slider />
        </div>
      </div>
      {/* =========== Advertisement ============ */}
      <div className="banner_container">
        <BannerAds />
      </div>
      {/* ================== Daily Staples =============== */}
      <div className="your_daily_s py-[5em] bg-[#8273fc0d]">
        <div className="container mx-auto">
          <div className="text-[2.5em] font-bold text-center">
            <h3 className="pb-[.5em]">Your Daily Staples</h3>
            <hr className="bottom-line border-1 border-orange-500 w-[8%] mx-auto"></hr>
          </div>
          <YourDailyStpls />
        </div>
      </div>

      {/* ================ Top Products ============= */}
      <div className="your_daily_s py-[5em] bg-[#fff]">
        <div className="container mx-auto">
          <div className="text-[2.5em] font-bold text-center">
            <h3 className="pb-[.5em]">Top Products</h3>
            <hr className="bottom-line border-1 border-orange-500 w-[8%] mx-auto"></hr>
          </div>
          <TopProducts />
        </div>
      </div>

      {/* ================ News Letters ================= */}
      <div className="wrap-3 my-[8px] py-[3em] bg-[#fb641b]">
        <div className="container mx-auto">
          <div className="newsletter justify-center items-center flex flex-col sm:flex-row">
            <NewsLetter />
          </div>
        </div>
      </div>

      {/* ================= Footer Part ================== */}

    </>
  );
}
export default HomePage;