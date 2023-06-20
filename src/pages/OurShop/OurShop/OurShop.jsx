// import React from "react";
import { useParams } from "react-router-dom";
import shopCover from "../../../assets/shop/banner2.jpg";
import Cover from "../../../shared/Cover/Cover";
import TabsCategory from "../TabsCategory/TabsCategory";

const OurShop = () => {
  const { category } = useParams();
  // console.log(category);
  return (
    <div>
      <Cover
        title={"OUR SHOP"}
        subTitle={"WOULD YOU LIKE TO TRY A DISH!"}
        contentBg={"bg-[#15151599]"}
        round={true}
        fullScreen={true}
        parallaxBg={shopCover}
      ></Cover>

      <div className="mt-20">
        <TabsCategory category={category}></TabsCategory>
      </div>
    </div>
  );
};

export default OurShop;
