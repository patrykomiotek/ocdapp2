import { MouseEventHandler, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { Text } from "../../atoms/Text";

export const Generator = () => {
  // const state = useState();
  // state[0] // value
  // state[1] // setter
  const [id, setId] = useState(uuidv4());

  // ChangeEventHandler<HTMLButtonElement> = () => {
  // FormEvent
  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    setId(uuidv4());
  };

  return (
    <div>
      <Text>{id}</Text>
      <button onClick={handleClick}>Refresh</button>
    </div>
  );
};
