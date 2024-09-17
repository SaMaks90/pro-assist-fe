//@ts-ignore
import styles from "./login-form.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { clsx } from "clsx";
import { ILoginFormInputs, Status } from "../../../types";
import { login } from "../../../api";
import { useState } from "react";
import { useAuth } from "../../../hooks";

interface ILoginFormProps {
  closeModal: () => void;
}

const LoginForm = ({ closeModal }: ILoginFormProps) => {
  const { setToken, setUser } = useAuth();
  const [status, setStatus] = useState<Status>(Status.pending);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormInputs>();

  const onSubmit: SubmitHandler<ILoginFormInputs> = async (
    data,
  ): Promise<void> => {
    try {
      setStatus(Status.processing);
      const response = await login(data);
      if (response) {
        if (setToken) {
          setToken(response.jwt);
        }
        if (setUser) {
          setUser(response.user);
        }
      }
      setStatus(Status.successful);
      closeModal();
    } catch (e) {
      console.error(e);
      setStatus(Status.error);
    }
  };

  const disableSubmit = Status.processing === status;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.loginForm}>
      <section>
        <label>
          <span>Mail</span>
          <input
            className={clsx(
              styles.loginFormInputField,
              errors.email && styles.loginFormInputFieldError,
            )}
            {...register("email", {
              required: { value: true, message: "Email field is required" },
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "The entered value does not match the email format",
              },
            })}
          />
        </label>
        <label>
          <span>Password</span>
          <input
            className={clsx(
              styles.loginFormInputField,
              errors.password && styles.loginFormInputFieldError,
            )}
            type={"password"}
            {...register("password", {
              required: { value: true, message: "Password field is required" },
              minLength: {
                value: 12,
                message: "The minimum password length must be 12 characters",
              },
            })}
          />
        </label>
      </section>

      <input
        className={styles.loginFormSubmit}
        type={"submit"}
        disabled={disableSubmit}
        value={"log in"}
      />
    </form>
  );
};

export { LoginForm };
