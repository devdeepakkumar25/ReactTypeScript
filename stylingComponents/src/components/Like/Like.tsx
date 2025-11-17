import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { useState } from "react";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [color, setColor] = useState(false);
  const [status, setStatus] = useState(false);
  const toggle = () => {
    setStatus(!status);
    onClick();
  };

  const handleOnClick = () => {
    setColor(!color);
    console.log(color);
  };

  if (status)
    return (
      <AiFillHeart
        color="#ff6b81"
        size={20}
        // onClick={() => setStatus(!status)}
        onClick={toggle}
      />
    );
  return <AiOutlineHeart onClick={toggle} />;
  return (
    <>
      <div>
        <button
          className={`btn btn-${color ? "danger" : ""}`}
          onClick={handleOnClick}
        >
          <AiFillHeart color="ff6b81" size={20} />
        </button>
      </div>
    </>
  );
};

export default Like;
