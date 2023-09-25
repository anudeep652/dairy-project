import { writable } from "svelte/store";
import type { Tuser } from "./types";
import data from "./pages/Home.svelte";

export const user = writable<Tuser>({ name: "", email: "" });
export const auth = writable({ username: "", password: "" });
export const selected = writable({
  name: null,
  marksPercentage: null,
  annualIncome: null,
  parentOccupation: null,
  state: "Tamil Nadu",
  community: null,
  Nationality: "India",
  maximumFamilySiblings: null,
  isSpecialCategory: null,
  ageGrp: null,
  isFromMinorCommunity: null,
  yearOfStudy: null,
  isGirl: null,
  grade: null,
});

export const scholarships = writable<any[]>([]);
export const scholarshipsExams = writable<any>(null);
