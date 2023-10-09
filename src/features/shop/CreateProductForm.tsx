import { useForm, type SubmitHandler } from "react-hook-form";

type CreateProductDto = {
  name: string;
  price: number;
  description: string;
};

export const CreateProductForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<CreateProductDto>();

  const onSubmit: SubmitHandler<CreateProductDto> = (data) => {
    console.log(data);
  };

  const realPrice = watch("price");

  console.log({ errors });

  return (
    <div>
      <p>Price: {realPrice}</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Name</label>
          <input id="name" {...register("name", { required: true })} />
          {errors.name && <span>{errors.name.message}</span>}
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input
            id="price"
            type="number"
            {...register("price", { required: true })}
          />
          {errors.price && <span>{errors.price.message}</span>}
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input
            id="description"
            {...register("description", { required: true })}
          />
          {errors.description && <span>{errors.description.message}</span>}
        </div>
        <div>
          <button type="submit">Create</button>
        </div>
      </form>
    </div>
  );
};
