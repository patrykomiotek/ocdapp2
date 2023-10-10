// kudos Tomasz Ducin! ;)
import { memo, useState } from "react";
import { renderAction } from "@stories/utils";
import { Checkbox } from "./Checkbox";

export default {
  title: "Performance/Memo",
};

interface MemoizedComponentProps {
  children: React.ReactNode;
  checked?: boolean;
}

const MemoizedComponent = memo(
  ({ children, checked }: MemoizedComponentProps) => {
    renderAction("render MemoizedComponent");
    return (
      <div>
        Displaying <code>children</code>: "{children}"
        {checked !== undefined && <> and {checked ? "is" : "is not"} checked</>}
      </div>
    );
  }
  // (prevProps) => {
  //   if (prevProps.checked === true) {
  //     return true;
  //   }
  // }
);

export const ReactMemoWithPropsAndTextChildren = () => {
  const [isChecked, setIsChecked] = useState(false);
  const toggle = () => setIsChecked((value) => !value);

  renderAction(`render parent (ReactMemoWithPropsAndTextChildren)`);

  return (
    <>
      <Checkbox
        id="demo-checkbox"
        label="toggle checkbox"
        defaultChecked={isChecked}
        onChange={toggle}
      />
      <MemoizedComponent checked={isChecked}>text and props</MemoizedComponent>
    </>
  );
};

export const ReactMemoChildrenTextOnly = () => {
  const [isChecked, setIsChecked] = useState(false);
  const toggle = () => setIsChecked((value) => !value);

  renderAction(`render parent (ReactMemoChildrenTextOnly)`);

  return (
    <>
      <Checkbox
        id="demo-checkbox"
        label="toggle checkbox"
        defaultChecked={isChecked}
        onChange={toggle}
      />
      <MemoizedComponent>text only</MemoizedComponent>
    </>
  );
};

export const ReactMemoChildrenWithMarkup = () => {
  const [isChecked, setIsChecked] = useState(false);
  const toggle = () => setIsChecked((value) => !value);

  renderAction(`render parent (ReactMemoChildrenWithMarkup)`);

  return (
    <>
      <Checkbox
        id="demo-checkbox"
        label="toggle checkbox"
        defaultChecked={isChecked}
        onChange={toggle}
      />
      <MemoizedComponent>
        <div>text only</div>
      </MemoizedComponent>
    </>
  );
};
