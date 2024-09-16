import {
  ILoginFormInputs,
  ILoginResponse,
  IRegistrationFormInputs,
  IRegistrationResponse,
} from "../types";

const getRequestOption = (body: string) => {
  return {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: body,
  };
};

const login = async ({
  email,
  password,
}: ILoginFormInputs): Promise<ILoginResponse | undefined> => {
  const body = JSON.stringify({ identifier: email, password: password });
  const requestOptions = getRequestOption(body);

  const response = await fetch(
    "http://localhost:1337/api/auth/local",
    requestOptions,
  );

  if (response.ok) {
    return response.json();
  }
};

const registration = async (
  data: IRegistrationFormInputs,
): Promise<IRegistrationResponse | undefined> => {
  const body = JSON.stringify(data);
  const requestOptions = getRequestOption(body);
  const response = await fetch(
    "http://localhost:1337/api/auth/local/register",
    requestOptions,
  );

  if (response.ok) {
    return response.json();
  }
};

export { login, registration };
