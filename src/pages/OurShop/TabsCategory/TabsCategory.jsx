import { useState } from "react";
import useLoadMenu from "../../../custom/useLoadMenu";
import OrderTab from "../OrderTab/OrderTab";

const TabsCategory = ({ category }) => {
  const categories = [
    "salad",
    "pizza",
    "soups",
    "desserts",
    "drinks",
    "offered",
  ];

  const initialIndex = categories.indexOf(category);
  console.log(initialIndex);

  const [activeTab, setActiveTab] = useState(
    initialIndex === -1 ? 0 : initialIndex
  );

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const tabHead = [
    { tabName: "salad", tabIndex: 0 },
    { tabName: "pizza", tabIndex: 1 },
    { tabName: "soups", tabIndex: 2 },
    { tabName: "desserts", tabIndex: 3 },
    { tabName: "drinks", tabIndex: 4 },
    { tabName: "offered", tabIndex: 5 },
  ];

  const salad = useLoadMenu("salad");
  const soup = useLoadMenu("soup");
  const pizza = useLoadMenu("pizza");
  const dessert = useLoadMenu("dessert");
  const drinks = useLoadMenu("drinks");
  const offered = useLoadMenu("offered");

  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="flex mx-auto w-fit">
        {tabHead.map((tab, idx) => (
          <div key={idx} className="">
            <div
              className={`py-2 px-4 cursor-pointer text-center border-b-2 ${
                activeTab === tab.tabIndex
                  ? "border-[#BB8506] text-[#BB8506]"
                  : "border-gray-300 text-gray-600"
              }`}
              onClick={() => handleTabClick(tab.tabIndex)}
            >
              <span className="uppercase font-semibold">{tab.tabName}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="py-12">
        {activeTab === 0 && <OrderTab items={salad}></OrderTab>}
        {activeTab === 1 && <OrderTab items={soup}></OrderTab>}
        {activeTab === 2 && <OrderTab items={pizza}></OrderTab>}
        {activeTab === 3 && <OrderTab items={dessert}></OrderTab>}
        {activeTab === 4 && <OrderTab items={drinks}></OrderTab>}
        {activeTab === 5 && <OrderTab items={offered}></OrderTab>}
      </div>
    </div>
  );
};

export default TabsCategory;
