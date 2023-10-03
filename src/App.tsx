import "./App.css";
import { Button } from "./ui/atoms/Button";
import { Text } from "./ui/atoms/Text";

function App() {
  return (
    <div>
      {/* <Text>Today is <span>payday</span></Text> */}
      <Text>Today is payday</Text>
      <Button label="Click" />
    </div>
  );
}

export default App;
