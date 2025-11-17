// import { MouseEvent } from "react";
import { useState } from "react";
function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleClick = (index: number ) => {
    setSelectedIndex(index);
    console.log(selectedIndex);
  };

  //   items = [];

  //   if (items.length === 0) return <p> No item found!</p>;

  //   const message = items.length === 0 ? <p> No item found!</p> : null;

  const getMessage = () => {
    return items.length === 0 ? <p>No item found!</p> : null;
  };

  //   const handleClick = (event: MouseEvent) => console.log(event);

  //   const handleClick = (item: string) => {
  //     console.log(item);
  //   };
  return (
    <>
      <h3>List Group</h3>
      {/* {message} */}
      {/* {items.length === 0 ? <p> Not item found</p> : null} */}
      {/* {items.length === 0 && <p> No items found!</p>} */}
      {getMessage()}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={index}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => handleClick(index)}
            // onClick={() => handleClick(item)}
            // onClick={ handleClick}
            // onClick={(event) => console.log(item, index, "Clicked", event)}
          >
            {item}
          </li>
        ))}

        <li className="list-group-item">item 1</li>
        <li className="list-group-item">item 2</li>
        <li className="list-group-item">item 3</li>
        <li className="list-group-item">item 4</li>
      </ul>
    </>
  );
}

export default ListGroup;
