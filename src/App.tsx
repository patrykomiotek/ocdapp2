import "./App.css";
import { LoginForm } from "./components/LoginForm";
import { LoginFormRefs } from "./components/LoginForm/LoginFormRefs";
import { Button } from "./ui/atoms/Button";
import { Text } from "./ui/atoms/Text";
import { Generator } from "./ui/molecules/Generator";
import { MagicButton } from "./ui/atoms/MagicButton";
import { MouseEventHandler, useEffect, useRef, useState } from "react";
import { ViewPort } from "./components/ViewPort";
import { Counter } from "./components/Counter";
import { AuthInfo } from "./components/Auth";
import { AuthContext } from "./components/Auth/AuthContext";

function App() {
  const [showCounter, setShowCounter] = useState(true);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [authState, setAuthState] = useState(false);

  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.style.backgroundColor = "red";
      buttonRef.current.style.color = "white";
    }
  }, []);

  const handleMouseEnter: MouseEventHandler<HTMLButtonElement> = () => {
    const ref = buttonRef.current;
    if (ref) {
      ref.style.backgroundColor = "green";
      ref.style.color = "black";
    }
  };

  // const handleSumit = (data) => {
  //   console.log(data);
  // }

  return (
    <div>
      {/* <MagicButton ref={buttonRef} onMouseEnter={handleMouseEnter} /> */}
      {/* <Text>Today is <span>payday</span></Text> */}
      {/* <Text>Today is payday</Text> */}
      {/* <Button label="Click" /> */}
      {/* <Generator /> */}
      {/* <LoginForm /> */}
      {/* <LoginFormRefs /> */}
      {/* <ViewPort /> */}
      {/* {showCounter ? <Counter /> : null}
      <button onClick={() => setShowCounter((value) => !value)}>
        Show / Hide
      </button> */}
      <h1>App component</h1>
      <AuthContext.Provider
        value={{
          isLogged: authState,
          toggleIsLogged: setAuthState,
        }}
      >
        <AuthInfo />
      </AuthContext.Provider>
    </div>
  );
}

export default App;
