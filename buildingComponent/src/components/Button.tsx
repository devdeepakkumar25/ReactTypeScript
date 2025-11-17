import { useState } from "react";

interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger";
  onClick: () => void;
}

// interface Props {
//   children: string;
//   color?: "primary" | "secondary" | "danger";
//   onClick: () => void;
// }

// interface Props {
//   children: string;
//   color?: string;
//   onClick: () => void;
// }

const Button = ({ children, onClick, color = "primary" }: Props) => {
  const [alert, setAlert] = useState(false);
  const handleOnClick = () => {
    setAlert(!alert);
  };
  return (
    <>
      {alert && (
        <div
          className="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          <strong>My Alert</strong>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={handleOnClick}
          ></button>
        </div>
      )}

      <button
        type="button"
        className={"btn btn-" + color}
        onClick={() => {
          handleOnClick();
          onClick();
        }}
      >
        {children}
      </button>
    </>
  );
};

export default Button;

// interface Props {
//   children: string;
//   color: string;
//   onClick: () => void;
// }

// const Button = ({ children, color, onClick }: Props) => {
//   return (
//     <>
//       <button type="button" className={"btn btn-" + color} onClick={onClick}>
//         {children}
//       </button>
//     </>
//   );
// };

// export default Button;
