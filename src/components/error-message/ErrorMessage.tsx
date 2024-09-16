// @ts-ignore
import styles from "./error-message.module.scss";

interface IErrorMessageProps {
  error: string | undefined;
}

const ErrorMessage = ({ error }: IErrorMessageProps) => {
  return (
    <span className={styles.errorMessage}>
      {error ? error : "This field is required"}
    </span>
  );
};

export { ErrorMessage };
