import { Menu } from "@ui/molecules/Menu";
import { KeyboardEventHandler, useReducer } from "react";

const initialState = {
  count: 0,
};

type State = typeof initialState;

// action:
// {
// type: string,
// payload?: Record
// }

enum ActionType {
  INCREMENT = "INCREMENT",
  DECREMENT = "DECREMENT",
  SET = "SET",
}

type Action = {
  type: ActionType;
  payload?: string;
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case ActionType.INCREMENT:
      return { count: state.count + 1 };
    case ActionType.DECREMENT:
      return { count: state.count - 1 };
    case ActionType.SET:
      return { count: parseInt(action.payload || "", 10) };
    default:
      return state;
  }
};

const decrement = { type: ActionType.DECREMENT };
const increment = { type: ActionType.INCREMENT };

export const Stepper = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChangeCount: KeyboardEventHandler<HTMLInputElement> = (event) => {
    // console.log(event.target);
    if (event.key.toLowerCase() === "enter") {
      // @ts-expect-error
      dispatch({ type: ActionType.SET, payload: event.target.value });
    }
  };

  return (
    <>
      <div>
        <Menu />
        <button onClick={() => dispatch(decrement)}>-</button>
        <span>{state.count}</span>
        <button onClick={() => dispatch(increment)}>+</button>
      </div>
      <div>
        <input type="number" onKeyDown={handleChangeCount} />
      </div>
    </>
  );
};
