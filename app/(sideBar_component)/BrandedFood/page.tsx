import SideBar from "@/app/_Component/SideBar";
import FoodBanner from "@/app/_Component/FoodBanner";

const Branded = () => {
    return (
        <>
            <div className="banner">
                <aside>
                    <SideBar />
                </aside>
                <div className="Brand_banner">
                    <FoodBanner />
                    <div>
                        
                    </div>
                </div>
            </div>
        </>
    );
}

export default Branded;
