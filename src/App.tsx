import "./App.css";
import { LoginForm } from "./components/LoginForm";
import { LoginFormRefs } from "./components/LoginForm/LoginFormRefs";
import { Button } from "./ui/atoms/Button";
import { Text } from "./ui/atoms/Text";
import { Generator } from "./ui/molecules/Generator";

function App() {
  return (
    <div>
      {/* <Text>Today is <span>payday</span></Text> */}
      {/* <Text>Today is payday</Text> */}
      {/* <Button label="Click" /> */}
      {/* <Generator /> */}
      {/* <LoginForm /> */}
      <LoginFormRefs />
    </div>
  );
}

export default App;
