//@ts-ignore
import styles from "./registration-form.module.scss";
import { IRegistrationFormInputs, Status } from "../../../types";
import { useForm, SubmitHandler } from "react-hook-form";
import { ErrorMessage } from "../../";
import { clsx } from "clsx";
import { registration } from "../../../api";
import { useAuth } from "../../../hooks";
import { useState } from "react";

const RegistrationForm = () => {
  const { setToken, setUser } = useAuth();
  const [status, setStatus] = useState<Status>(Status.pending);
  const [error, setError] = useState<string>("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IRegistrationFormInputs>();

  const onSubmit: SubmitHandler<IRegistrationFormInputs> = async (data) => {
    try {
      setStatus(Status.processing);
      const response = await registration(data);
      if (response) {
        if (setToken) {
          setToken(response.jwt);
        }
        if (setUser) {
          setUser(response.user);
        }
      }
      setStatus(Status.successful);
    } catch (e) {
      console.error(e);
      setStatus(Status.error);
      setError("Server error");
    }
  };

  const disableSubmit = Status.processing === status;

  return (
    <form className={styles.registrationForm} onSubmit={handleSubmit(onSubmit)}>
      <label>
        <span>Username:</span>
        <input
          className={clsx(
            styles.registrationFormInputFields,
            errors.username && styles.registrationFormInputFieldsError,
          )}
          {...register("username", {
            required: { value: true, message: "Username field is required" },
          })}
        />
      </label>
      {errors.username && <ErrorMessage error={errors.username.message} />}
      <label>
        <span>Email:</span>
        <input
          className={clsx(
            styles.registrationFormInputFields,
            errors.email && styles.registrationFormInputFieldsError,
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
      {errors.email && <ErrorMessage error={errors.email.message} />}
      <label>
        <span>Password:</span>
        <input
          className={clsx(
            styles.registrationFormInputFields,
            errors.password && styles.registrationFormInputFieldsError,
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
      {errors.password && <ErrorMessage error={errors.password.message} />}
      <label>
        <span>Confirm password:</span>
        <input
          className={clsx(
            styles.registrationFormInputFields,
            errors.confirmPassword && styles.registrationFormInputFieldsError,
          )}
          type={"password"}
          {...register("confirmPassword", {
            required: {
              value: true,
              message: "Confirm Password field is required",
            },
            validate: (val: string) => {
              if (watch("password") !== val) {
                return "Your passwords do no match";
              }
            },
          })}
        />
      </label>
      {errors.confirmPassword && (
        <ErrorMessage error={errors.confirmPassword.message} />
      )}
      <button
        className={styles.registrationFormSubmit}
        type={"submit"}
        disabled={disableSubmit}
      >SIGN UP NOW</button>
      {error && <ErrorMessage error={error} />}
    </form>
  );
};

export { RegistrationForm };
