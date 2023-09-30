const API_URL = "http://localhost:3000";
export const getAllCases = async (doctor_id: string) => {
  const data = await fetch(API_URL + "/doctor/get-cases/" + doctor_id, {
    headers: new Headers({
      "Content-Type": "application/json; charset=UTF-8",
    }),
  });
  return data;
};

export const newCase = async (_id: string, images: string[]) => {
  const data = await fetch(API_URL + "/farmer/new-case", {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json; charset=UTF-8",
    }),
    body: JSON.stringify({ _id, images }),
  });
  return data;
};
