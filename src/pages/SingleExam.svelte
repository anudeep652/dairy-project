<script lang="ts">
  import { onMount } from "svelte";
  import { scholarships } from "../store";
  import ArrowLeft from "../assets/arrowLeft.svelte";

  export let id;
  let scholarship;
  let closed;

  scholarship = JSON.parse(localStorage.getItem("exams"));
  scholarship = scholarship.data.filter((sch) => sch._id === id)[0];
  let scholarshipEligibility = scholarship.eligibility
    .split("•")
    .filter((el) => el !== "");

  let isYetToAnnounce = scholarship.lastDate === "YET TO ANNOUNCE";

  let today: any = new Date().toLocaleDateString();
  today = today.split("/").map((d) => parseInt(d));
  let lastDate = scholarship.lastDate.split("/").map((d) => parseInt(d));
  if (lastDate[2] < today[2]) {
    closed = true;
  } else if (lastDate[1] < today[1]) {
    closed = true;
  } else if (lastDate[0] < today[0]) {
    if (lastDate[1] < today[1]) {
      closed = true;
    } else {
      closed = false;
    }
  } else {
    closed = false;
  }
</script>

<main class="flex flex-col gap-7">
  <h2 class="mt-10 px-10 font-[Raleway] font-bold text-left text-2xl">
    {scholarship.name}
  </h2>

  <div class="eligibility px-10">
    <h3 class="py-3 font-[Raleway] text-xl font-semibold">Eligibility:</h3>
    <p>
      {#each scholarshipEligibility as sche}
        <li class="p-1">{sche}</li>
      {/each}
    </p>
  </div>

  <div class="benefits px-10">
    <h3 class="py-3 font-[Raleway] text-xl font-semibold">Benefits:</h3>
    <p>
      {scholarship.benefits}
    </p>
  </div>

  <div class="btn text-center mt-5 mb-10">
    <a href={scholarship.link} target="_blank">
      <button
        disabled={closed}
        class={`text-white py-2 ${
          closed ? "bg-red-400" : "bg-blue-600"
        } rounded-full w-[80%] ${isYetToAnnounce ? "yet" : ""}`}
        >{isYetToAnnounce
          ? "Yet To Announce"
          : closed
          ? "Registration Closed"
          : "Apply now"}</button
      >
    </a>
  </div>
</main>

<style>
  .yet {
    /* background: yellow !important; */
    background-color: rgb(250 202 21 / 1);
    /* color: black; */
  }
</style>
