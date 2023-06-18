import useCategory from "./useCategory";

const useLoadMenu = (cat) => {
  const [food] = useCategory();
  const menu = food.filter((item) => item.category === cat);
  return menu;
};
export default useLoadMenu;
