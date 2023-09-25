const API_URL = "https://scholarship-backend.up.railway.app";
export const login = async (email: string, password: string) => {
  const data = await fetch(API_URL + "/user/login", {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json; charset=UTF-8",
    }),
    body: JSON.stringify({ password, email }),
  });
  return data;
};

export const register = async (
  email: string,
  username: string,
  password: string,
  confirmPassword: string
) => {
  const data = await fetch(API_URL + "/user/register", {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json; charset=UTF-8",
    }),
    body: JSON.stringify({ password, email, username, confirmPassword }),
  });
  return data;
};
