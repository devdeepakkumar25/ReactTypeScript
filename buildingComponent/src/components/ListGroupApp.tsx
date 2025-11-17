import ListGroupProps from "./ListGroupProps";

const ListGroupApp = () => {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroupProps
        items={items}
        heading="Cities"
        // onSelectItem={(item) => console.log(item, "Item Selected")}
        onSelectItem={handleSelectItem}
      />
    </div>
  );
};

export default ListGroupApp;
