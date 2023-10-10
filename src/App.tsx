import "./App.css";
import { MouseEventHandler, useEffect, useRef } from "react";
import { ShoppingCart } from "./features/shop";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ShopContextProvider } from "./features/shop/ShopContext";
import { CreateProductForm } from "./features/shop/CreateProductForm";
import { Paths } from "@consts/router.paths";
import { Layout } from "@ui/molecules";
import ErrorPage from "@pages/ErrorPage";
import { Shop } from "@features/shop/Shop";
import { LoginFormRefs } from "@components/LoginForm/LoginFormRefs";
import { LoginForm } from "@components/LoginForm";
import { Stepper } from "@components/Stepper/Stepper";
import { AuthInfo } from "@components/Auth";
import { Provider } from "react-redux";
import { store } from "./store";
import { AccountPage } from "@pages/AccountPage";
import { LoginPage } from "@pages/LoginPage";

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
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: Paths.HOME,
        element: <Shop />,
      },
      {
        path: Paths.BASKET,
        element: <ShoppingCart />,
      },
      {
        path: Paths.CREATE_PRODUCT,
        element: <CreateProductForm />,
      },
      {
        path: Paths.PRODUCTS,
        element: <Shop />,
      },
      {
        path: Paths.LOGIN,
        element: <LoginPage />,
      },
      {
        path: Paths.STEPPER,
        element: <Stepper />,
      },
      {
        path: Paths.AUTH,
        element: <AuthInfo />,
      },
      {
        path: Paths.ACCOUNT,
        element: <AccountPage />,
      },
    ],
  },
]);

const queryClient = new QueryClient();

function App() {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.style.backgroundColor = "red";
      buttonRef.current.style.color = "white";
    }
  }, []);

  // @ts-expect-error
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
      {/* <h1>App component</h1> */}
      {/* <Products /> */}
      {/* <ThemeProvider>
        <AuthProvider>
          <AuthInfo />
        </AuthProvider>
      </ThemeProvider>

      <ErrorBoundary fallback={<p>Oh no!</p>}>
        <AuthInfo />
      </ErrorBoundary> */}
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <ShopContextProvider>
            <RouterProvider router={routes} />
          </ShopContextProvider>
          <ReactQueryDevtools initialIsOpen={true} />
        </QueryClientProvider>
      </Provider>
    </div>
  );
}

export default App;
