// const API_URL = "https://scholarship-backend.up.railway.app";
const API_URL = "http://localhost:3000";
export const loginFarmer = async (email: string, password: string) => {
  const data = await fetch(API_URL + "/farmer/login", {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json; charset=UTF-8",
    }),
    body: JSON.stringify({ password, email }),
  });
  return data;
};

export const registerFarmer = async (farmerData: any) => {
  const data = await fetch(API_URL + "/farmer/new", {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json; charset=UTF-8",
    }),
    body: JSON.stringify({ ...farmerData }),
  });
  return data;
};
