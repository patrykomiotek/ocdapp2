import { Helmet } from "react-helmet";
import { useStore, useSelector } from "react-redux";
import { RootState } from "src/store";

export const AccountPage = () => {
  // const store = useStore();
  // store.dispatch()
  const userState = useSelector((state: RootState) => state.user);

  return (
    <>
      <Helmet>
        <title>User account</title>
      </Helmet>
      <div>
        <h1>Hello user</h1>
        <div>{JSON.stringify(userState, null, 2)}</div>
      </div>
    </>
  );
};
