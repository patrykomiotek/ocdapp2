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
import { Products } from "./components/Products";
import { Shop, ShoppingCart } from "./features/shop";
import {
  createBrowserRouter,
  BrowserRouter as Router,
  RouterProvider,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ShopContextProvider } from "./features/shop/ShopContext";
import { CreateProductForm } from "./features/shop/CreateProductForm";
import { Stepper } from "./components/Stepper/Stepper";

{
  /* <a href="/">Home</a>
<a href="/basket">Basket</a>

document.getElementsByName('a')
clickListener = (event) => {
  event.preventDefault();
  history.push('/basket')
} */
}

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Stepper />,
    // element: <Shop />,
  },
  {
    path: "/basket",
    element: <ShoppingCart />,
  },
  {
    path: "/create",
    element: <CreateProductForm />,
  },
]);

const queryClient = new QueryClient();

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
      {/* <Products /> */}
      {/* <ThemeProvider>
        <AuthProvider>
          <AuthInfo />
        </AuthProvider>
      </ThemeProvider>

      <ErrorBoundary fallback={<p>Oh no!</p>}>
        <AuthInfo />
      </ErrorBoundary> */}
      <QueryClientProvider client={queryClient}>
        <ShopContextProvider>
          <RouterProvider router={routes} />
        </ShopContextProvider>
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
    </div>
  );
}

export default App;
