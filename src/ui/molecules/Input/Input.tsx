import { useId, type ComponentPropsWithRef, Ref, forwardRef } from "react";
import { Label } from "../../atoms/Label/Label";

type Props = {
  label: string;
};

export const Input = forwardRef(
  (
    { label, ...rest }: ComponentPropsWithRef<"input"> & Props,
    ref: Ref<HTMLInputElement>
  ) => {
    const labelId = useId();
    return (
      <>
        <Label id={labelId}>{label}</Label>
        <input id={labelId} ref={ref} {...rest} />
      </>
    );
  }
);
