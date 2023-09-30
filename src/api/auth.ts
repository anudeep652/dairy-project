// const API_URL = "https://scholarship-backend.up.railway.app";
const API_URL = "https://scholarship-backend-production.up.railway.app";
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

export const getAllDoctors = async () => {
  const data = await fetch(API_URL + "/doctor/all/", {
    method: "GET",
    headers: new Headers({
      "Content-Type": "application/json; charset=UTF-8",
    }),
  });
  return data;
};

export const findDoctorByLocation = async (city: string) => {
  const data = await fetch(API_URL + "/doctor/find/" + city, {
    method: "GET",
    headers: new Headers({
      "Content-Type": "application/json; charset=UTF-8",
    }),
  });
  return data;
};

export const bookDoctorVaccine = async (doctorId: string, farmerId: string) => {
  const data = await fetch(API_URL + "/doctor/book/vaccine", {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json; charset=UTF-8",
    }),
    body: JSON.stringify({ doctorId, farmerId }),
  });
  return data;
};

export const caseFarmers = async (farmers: string[]) => {
  const data = await fetch(API_URL + "/doctor/case-farmers", {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json; charset=UTF-8",
    }),
    body: JSON.stringify({ farmers }),
  });
  return data;
};

export const bookDoctor = async (
  doctor_id: string,
  farmer_id: string,
  images: string[]
) => {
  const data = await fetch(API_URL + "/doctor/book", {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json; charset=UTF-8",
    }),
    body: JSON.stringify({ doctor_id, farmer_id, images }),
  });
  return data;
};
