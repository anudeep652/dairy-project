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

export const registerDoctor = async (doctorData: any) => {
  const data = await fetch(API_URL + "/doctor/new", {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json; charset=UTF-8",
    }),
    body: JSON.stringify({ ...doctorData }),
  });
  return data;
};

export const loginDoctor = async (email: string, password: string) => {
  const data = await fetch(API_URL + "/doctor/login", {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json; charset=UTF-8",
    }),
    body: JSON.stringify({ password, email }),
  });
  return data;
};

export const updateFarmerProfile = async (img: string, _id: string) => {
  const data = await fetch(API_URL + "/farmer/edit", {
    method: "PATCH",
    headers: new Headers({
      "Content-Type": "application/json; charset=UTF-8",
    }),
    body: JSON.stringify({ img, _id }),
  });
  return data;
};

export const getFarmerProfile = async (_id: string) => {
  const data = await fetch(API_URL + "/farmer/get/" + _id, {
    method: "GET",
    headers: new Headers({
      "Content-Type": "application/json; charset=UTF-8",
    }),
  });
  return data;
};

export const updateDoctorProfile = async (img: string, _id: string) => {
  const data = await fetch(API_URL + "/doctor/edit", {
    method: "PATCH",
    headers: new Headers({
      "Content-Type": "application/json; charset=UTF-8",
    }),
    body: JSON.stringify({ img, _id }),
  });
  return data;
};

export const getDoctorProfile = async (_id: string) => {
  const data = await fetch(API_URL + "/doctor/get/" + _id, {
    method: "GET",
    headers: new Headers({
      "Content-Type": "application/json; charset=UTF-8",
    }),
  });
  return data;
};
