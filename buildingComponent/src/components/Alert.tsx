import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({ children, onClose }: Props) => {
  return (
    <>
      <div
        className="alert alert-warning alert-dismissible fade show"
        role="alert"
      >
        {children}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          onClick={onClose}
        ></button>
      </div>
    </>
  );
};

export default Alert;

// interface Props {
//   children: string;
// }

// const Alert = ({ children }: Props) => {
//   return <div className="alert alert-primary">{children}</div>;
// };

// export default Alert;

// interface Props {
//   text: string;
// }

// const Alert = ({ text }: Props) => {
//   return <div className="alert alert-primary">{text}</div>;
// };

// export default Alert;
