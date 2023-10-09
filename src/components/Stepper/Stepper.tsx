import { useState } from "react";

export const Stepper = () => {
  const [state, setState] = useState({ count: 0 });

  return (
    <div>
      <button onClick={() => setState((value) => ({ count: value.count - 1 }))}>
        -
      </button>
      <span>{state.count}</span>
      <button onClick={() => setState((value) => ({ count: value.count + 1 }))}>
        +
      </button>
    </div>
  );
};
