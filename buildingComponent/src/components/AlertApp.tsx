import Alert from "./Alert";

const AlertApp = () => {
  return (
    <div>
      <Alert>
        Hello <span style={{ color: "red", fontWeight: "bold" }}>World</span>
      </Alert>
    </div>
  );
};

export default AlertApp;

// import Alert from "./Alert";

// const AlertApp = () => {
//   return (
//     <div>
//       <Alert>Hello World</Alert>
//     </div>
//   );
// };

// export default AlertApp;

// import Alert from "./Alert";

// const AlertApp = () => {
//   return (
//     <div>
//       <Alert text="Hello World" />
//     </div>
//   );
// };

// export default AlertApp;
