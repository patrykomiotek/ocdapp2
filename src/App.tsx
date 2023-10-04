import "./App.css";
import { LoginForm } from "./components/LoginForm";
import { LoginFormRefs } from "./components/LoginForm/LoginFormRefs";
import { Button } from "./ui/atoms/Button";
import { Text } from "./ui/atoms/Text";
import { Generator } from "./ui/molecules/Generator";
import { MagicButton } from "./ui/atoms/MagicButton";
import {
  MouseEventHandler,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { ViewPort } from "./components/ViewPort";
import { Counter } from "./components/Counter";
import { AuthInfo } from "./components/Auth";
import { AuthContext, AuthProvider } from "./components/Auth/AuthContext";
import { ThemeProvider } from "./components/Theme/ThemeContext";
import { ErrorBoundary } from "./components/ErrorBoundary/ErrorBoundary";

function App() {
  const [showCounter, setShowCounter] = useState(true);
  const buttonRef = useRef<HTMLButtonElement>(null);

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
      <ThemeProvider>
        <AuthProvider>
          <AuthInfo />
        </AuthProvider>
      </ThemeProvider>

      <ErrorBoundary fallback={<p>Oh no!</p>}>
        <AuthInfo />
      </ErrorBoundary>
    </div>
  );
}

export default App;
