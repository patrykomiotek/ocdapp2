import { FormEventHandler, useRef } from "react";
import { Input } from "../../ui/molecules/Input/Input";
import { CreateProductDto, createProduct } from "@services/products";

export const CreateProduct = () => {
  const nameFieldRef = useRef<HTMLInputElement>(null);
  const priceFieldRef = useRef<HTMLInputElement>(null);
  const descriptionFieldRef = useRef<HTMLInputElement>(null);

  const save = async (data: CreateProductDto) => {
    try {
      // @ts-expect-error
      const response = await createProduct(data);
      // const responseData = await response.json() as ;
    } catch (e) {
      console.error(e);
    }
  };

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();

    const product = {
      name: nameFieldRef.current?.value || "",
      price: parseInt(priceFieldRef.current?.value || "", 10) || 0,
      description: descriptionFieldRef.current?.value || "",
    };

    void save(product);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input type="text" label="Name" ref={nameFieldRef} />
        <Input type="number" label="Price" ref={priceFieldRef} />
        <Input type="text" label="Description" ref={descriptionFieldRef} />
      </form>
    </div>
  );
};
