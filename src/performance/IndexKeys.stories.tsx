import { Button, Header } from "@ui/atoms";
import { Input } from "@ui/molecules/Input";
import { useState, useId } from "react";

export default {
  title: "Rendering/IndexKeys",
};

export const ReactKeysIndex = () => {
  const [items, setItems] = useState([
    { id: useId(), name: "A", value: "pierwszy" },
    { id: useId(), name: "B", value: "drugi" },
  ]);
  const newId = useId();

  const addItem = () => {
    setItems([{ id: newId, name: "C", value: "trzeci" }, ...items]);
  };

  return (
    <>
      <Header>index keys</Header>
      {items.map((elem, index) => (
        <div key={index}>
          <div>
            <Input
              type="text"
              label={`index ${index}`}
              defaultValue={elem.value}
              style={{ border: "#c0c0c0 1px solid " }}
            />
          </div>
        </div>
      ))}
      <div className="my-6"></div>
      <Header>id keys</Header>
      {items.map((elem, _index) => (
        <div key={elem.id}>
          <div>
            <Input
              type="text"
              label={`id ${elem.id}`}
              defaultValue={elem.value}
              style={{ border: "#c0c0c0 1px solid " }}
            />
          </div>
        </div>
      ))}
      <div>
        <Button label="add" onClick={addItem} />
      </div>
    </>
  );
};
