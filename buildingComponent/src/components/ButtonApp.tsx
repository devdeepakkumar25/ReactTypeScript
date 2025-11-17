import { useState } from "react";
import Button from "./Button";
import Alert from "./Alert";

const ButtonApp = () => {
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      {/* <Button color="danger" onClick={() => console.log("click")}> */}

      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(!alertVisible)}>
          My Alert
        </Alert>
      )}

      <Button color="danger" onClick={() => setAlertVisibility(!alertVisible)}>
        Click Me
      </Button>
    </div>
  );
};

export default ButtonApp;
