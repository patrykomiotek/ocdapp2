import { useForm, type SubmitHandler, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { Input } from "@ui/molecules";

const schema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  price: z
    .number()
    .min(1, { message: "Price is required" })
    .max(100, { message: "Too expensive!" }),
  description: z.string().min(1, { message: "Description is required" }),
});

type CreateProductDto = z.infer<typeof schema>;

export const CreateProductForm = () => {
  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<CreateProductDto>({
    resolver: zodResolver(schema),
  });

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
            {...register("price", { required: true, valueAsNumber: true })}
          />
          {errors.price && <span>{errors.price.message}</span>}
        </div>
        <div>
          <Controller
            name="description"
            control={control}
            render={({ field }) => <Input label="Description" {...field} />}
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
