import { useForm } from "react-hook-form";

const Form = () => {
  const { handleSubmit, register, formState, watch } = useForm({
    defaultValues: {
      superhero: "",
      superpower: "",
    },
  });

  console.log(formState.errors);

  const country = watch("country");

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="superhero">Superhero: </label>
        <input
          type="text"
          id="superhero"
          {...register("superhero", {
            required: {
              value: true,
              message: "You must provide a superhero name to continue",
            },
          })}
        />
        {formState.errors.superhero ? (
          <p style={{ color: "red" }}>{formState.errors.superhero.message}</p>
        ) : null}
      </div>
      <div>
        <label htmlFor="superpower">Superpower: </label>
        <input type="text" id="superpower" {...register("superpower")} />
      </div>
      <div>
        <label htmlFor="country">Select your country</label>
        <select id="country" {...register("country", { required: true })}>
          <option value="-">-</option>
          <option value="USA">USA</option>
          <option value="Other">Other</option>
        </select>
      </div>
      {country === "USA" ? (
        <div>
          <label htmlFor="terms">
            Accept the terms and conditions to continue
          </label>
          <input
            type="checkbox"
            id="terms"
            {...register("terms", { required: true })}
          />
        </div>
      ) : null}
      <button type="submit" disabled={!formState.isDirty}>
        Submit
      </button>
    </form>
  );
};

export default Form;
