// kudos Tomasz Ducin! ;)
import { renderAction } from "@stories/utils";
import { memo, useCallback, useMemo, useState } from "react";
import { Checkbox } from "./Checkbox";

export default {
  title: "Performance/WithHooks",
};

interface MemoizedComponentProps {
  data: { value: string };
  onClick(): void;
}

const MemoizedComponent = memo(({ data, onClick }: MemoizedComponentProps) => {
  renderAction("render MemoizedComponent");
  return (
    <div>
      This is data value: <code>{data.value}</code>
      <button onClick={onClick}>Click me</button>
    </div>
  );
});

/* const elem1Ref = useRef<HtmlButtonElement>(null);
    const handleClick = useCallback(() => {
      const elemId = elem1.current.target['data-element-id']
    }, []);

    <div>Title <button ref={elem1Ref} data-element-id="3456" onClick={handleClick}>Delete</button></div>*/

export const ReactUseMemoWithoutCallback = () => {
  const [isChecked, setIsChecked] = useState(false);
  const toggle = () => setIsChecked((value) => !value);

  renderAction(`render parent (ReactUseMemo)`);

  return (
    <>
      <Checkbox
        id="demo-checkbox"
        label="toggle checkbox"
        defaultChecked={isChecked}
        onChange={toggle}
      />
      <MemoizedComponent
        data={{ value: "test test test" }}
        onClick={() => alert("hey!")}
      />
    </>
  );
};

export const ReactUseMemoWithCallback = () => {
  const [isChecked, setIsChecked] = useState(false);
  const toggle = () => setIsChecked((value) => !value);

  renderAction(`render parent with (ReactUseMemo)`);

  const data = useMemo(
    () => ({ value: `test test test ${new Date().toLocaleTimeString()}` }),
    []
  );
  const onClick = useCallback(() => alert("hey!"), []);

  return (
    <>
      <Checkbox
        id="demo-checkbox"
        label="toggle checkbox"
        defaultChecked={isChecked}
        onChange={toggle}
      />
      <MemoizedComponent data={data} onClick={onClick} />
    </>
  );
};
