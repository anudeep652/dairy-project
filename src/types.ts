export type Tuser = {
  name: string;
  email: string;
};

export const findGrade = (grade: string) => {
  switch (grade) {
    case "less than or equal to 10th":
      return Grade.UTENTH;

    case "11th":
      return Grade.ATENTH;
    case "12th":
      return Grade.ATENTH;

    case "UG":
      return Grade.UG;
    case "PG":
      return Grade.PG;
    default:
      return Grade.DIPLOMA;
  }
};

export enum Grade {
  UTENTH = "UTENTH",
  ATENTH = "ATENTH",
  UG = "UG",
  PG = "PG",
  DIPLOMA = "DIPLOMA",
}
