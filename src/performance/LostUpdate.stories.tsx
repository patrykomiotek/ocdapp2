import { useRef, useState } from "react";
import { action } from "@storybook/addon-actions";
import { Text, Button } from "@ui/atoms";

export default {
  title: "Rendering/LostUpdate",
};

const countAction = action("count");

export const ReactRefLostUpdate = () => {
  const [countA, setCountA] = useState(0);
  const countB = useRef(0);

  return (
    <>
      <Text>
        values: A={countA}, B={countB.current}
      </Text>
      <div className="flex">
        <Button
          onClick={() => {
            setCountA((a) => a + 1);
            countAction("a");
          }}
          label="increment A"
        />
        <Button
          onClick={() => {
            countB.current += 1;
            countAction("b");
          }}
          label="increment B"
          className="ml-6"
        />
      </div>
    </>
  );
};
