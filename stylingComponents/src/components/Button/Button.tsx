import styles from "./Button.module.css";

const Button = () => {
  const color = "primary";
  return (
    <>
      {/* <button
        className={[styles.btn, styles.container, styles["btn-primary"]].join(
          " "
        )}
      > */}
      <button
        className={[styles.btn, styles.container, styles["btn-" + color]].join(
          " "
        )}
      >
        My Button
      </button>
    </>
  );
};

export default Button;
