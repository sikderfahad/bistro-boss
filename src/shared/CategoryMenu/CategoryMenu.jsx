import "./CategoryMenu.css";
import useCategory from "../../custom/useCategory";

const CategoryMenu = ({ type }) => {
  const [menu] = useCategory();
  const popularCat = menu.filter((item) => item.category === type);
  // console.log(popularCat);

  return (
    <div className="text-center">
      <div className="grid grid-cols-2 gap-6">
        {popularCat.map((cat, idx) => (
          <div key={idx} className="flex gap-8">
            <div className="cat-thumb relative border overflow-hidden bg-[#D9D9D9] rounded-tr-full rounded-b-full  w-28 h-24">
              <img className="absolute w-full h-full" src={cat.image} alt="" />
            </div>
            <div className="flex">
              <div className="text-start">
                <h1 className="text-[#151515] text-xl">
                  {cat.name} ------------------
                </h1>
                <p className="text-[#737373] ">{cat.recipe}</p>
              </div>
              <div>
                <p className="text-[#BB8506] ">${cat.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryMenu;
