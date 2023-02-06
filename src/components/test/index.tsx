import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
const validationSchema = yup.object().shape({
  firstName: yup.string().required("Харьяалал оруулна уу"),
  //   lastName: yup.string().required("Харьяалал оруулна уу"),
});

type UserSubmitForm = {
  firstName: string;
};

export default function Test() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserSubmitForm>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmitHandler = (data: UserSubmitForm) => {
    console.log(data, "data");
  };
  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <input {...register("firstName")} placeholder="Bill" />
      {errors?.firstName && <p>{errors.firstName.message}</p>}

      {/* <input {...register("lastName")} placeholder="Luo" /> */}

      <input type="submit" />
    </form>
  );
}
