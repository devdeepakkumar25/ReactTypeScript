import { useState } from "react";
// import StyledListGroup from "./StyledListGroup";
import ListGroup from "./ListGroup";

const ListGroupApp = () => {
  const items = ["New York", "New Delhi", "Paris", "San Francisco", "Dubai"];
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleSelectItem = (index: number) => {
    setSelectedIndex(index);
    console.log("Selected index:", index);
  };

  return (
    <div>
      {/* <StyledListGroup */}
      <ListGroup
        heading="Cities"
        items={items}
        selectedIndex={selectedIndex}
        onSelectItem={handleSelectItem}
      />
    </div>
  );
};

export default ListGroupApp;
