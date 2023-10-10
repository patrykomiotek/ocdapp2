import axios from "axios";

type LoginCredentialsDto = {
  email: string;
  password: string;
};

type LoginResponseDto = {
  id: string;
  email: string;
};

export const logIn = (credentials: LoginCredentialsDto) => {
  return axios.post<LoginResponseDto>("/login", credentials);
};
