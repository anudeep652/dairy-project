const API_URL = "http://localhost:3000";
export const getAllCases = async () => {
  const data = await fetch(API_URL + "/cases", {
    headers: new Headers({
      "Content-Type": "application/json; charset=UTF-8",
    }),
  });
  return data;
};

export const newCase = async (place: string, images: string[]) => {
  const data = await fetch(API_URL + "/new/case", {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json; charset=UTF-8",
    }),
    body: JSON.stringify({ place, images }),
  });
  return data;
};
