import { useReducer } from "react";

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
}

type Action = {
  type: ActionType;
  payload?: Record<string, string>;
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case ActionType.INCREMENT:
      return { count: state.count + 1 };
    case ActionType.DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const decrement = { type: ActionType.DECREMENT };
const increment = { type: ActionType.INCREMENT };

export const Stepper = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <button onClick={() => dispatch(decrement)}>-</button>
      <span>{state.count}</span>
      <button onClick={() => dispatch(increment)}>+</button>
    </div>
  );
};
