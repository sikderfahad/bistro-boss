import Card from "../../../shared/Card/Card";

const OrderTab = ({ items }) => {
  return (
    <div className="grid grid-cols-3 gap-10">
      {items.map((menu) => (
        <Card key={menu._id} menu={menu}></Card>
      ))}
    </div>
  );
};

export default OrderTab;
