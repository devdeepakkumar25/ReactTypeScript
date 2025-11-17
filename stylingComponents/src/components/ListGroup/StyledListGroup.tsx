import type { FC } from "react";

import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  padding: 0;
`;
interface ListItemProps {
  active: boolean;
}

const ListItem = styled.li<ListItemProps>`
  padding: 5px 0;
  background: ${(props) => (props.active ? "blue" : "none")};
`;

interface Props {
  heading: string;
  items: string[];
  selectedIndex: number;
  onSelectItem: (index: number) => void;
}

const StyledListGroup: FC<Props> = ({
  heading,
  items,
  selectedIndex,
  onSelectItem,
}) => {
  return (
    <>
      <h2 style={{ backgroundColor: "yellow" }}>{heading}</h2>

      <List>
        {items.map((item, index) => {
          const isActive = index === selectedIndex;
          return (
            <ListItem
              active={selectedIndex === index}
              key={item}
              className={`list-group-item ${isActive ? "active" : ""}`}
              onClick={() => onSelectItem(index)}
            >
              {item}
            </ListItem>
          );
        })}
      </List>

      <button className="btn btn-primary mt-3">MyButton</button>
    </>
  );
};

export default StyledListGroup;
