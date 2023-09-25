const API_URL = "https://scholarship-backend.up.railway.app";
export const filterScholarships = async (grade: string, userData: any) => {
  const data = await fetch(API_URL + "/findscholarship/filter", {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json; charset=UTF-8",
    }),
    body: JSON.stringify({ grade, data: userData }),
  });
  return data;
};

// exam filter
export const filterExams = async (userData: any) => {
  const data = await fetch(API_URL + "/exam/filter", {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json; charset=UTF-8",
    }),
    body: JSON.stringify(userData),
  });
  return data;
};

export const getAllLive = async () => {
  const data = await fetch(API_URL + "/getalllive", {
    headers: new Headers({
      "Content-Type": "application/json; charset=UTF-8",
    }),
  });
  return data;
};
