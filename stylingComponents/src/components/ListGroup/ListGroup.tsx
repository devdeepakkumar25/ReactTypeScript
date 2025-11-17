import type { FC } from "react";
import styles from "./ListGroup.module.css";
import { BsCalendarFill } from "react-icons/bs";

interface Props {
  heading: string;
  items: string[];
  selectedIndex: number;
  onSelectItem: (index: number) => void;
}

const ListGroup: FC<Props> = ({
  heading,
  items,
  selectedIndex,
  onSelectItem,
}) => {
  return (
    <>
      <h2>{heading}</h2>
      <BsCalendarFill color="red" size="40" />

      {/* <ul className={styles["list-group"]}> */}
      {/* <ul className={styles.listGroup}> */}
      <ul className={[styles.listGroup, styles.container].join(" ")}>
        {items.map((item, index) => {
          const isActive = index === selectedIndex;
          return (
            <li
              key={item}
              className={`list-group-item ${isActive ? "active" : ""}`}
              onClick={() => onSelectItem(index)}
            >
              {item}
            </li>
          );
        })}
      </ul>

      <button className="btn btn-primary mt-3">MyButton</button>
    </>
  );
};

export default ListGroup;
