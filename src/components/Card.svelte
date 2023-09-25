<script lang="ts">
  import { Link } from "svelte-routing";

  export let sch;
  export let category: "scholarship" | "exam";
  let closed = false;
  let isYetToAnnounce = false;

  if (category === "scholarship") {
    let today: any = new Date().toLocaleDateString();
    today = today.split("/").map((d) => parseInt(d));
    let lastDate = sch.lastDate.split("-").map((d) => parseInt(d));
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
  } else {
    isYetToAnnounce = sch.lastDate === "YET TO ANNOUNCE";
    console.log(isYetToAnnounce);
    let today: any = new Date().toLocaleDateString();
    today = today.split("/").map((d) => parseInt(d));
    let lastDate = sch.lastDate.split("/").map((d) => parseInt(d));
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
  }
</script>

<div
  class="bg-white px-5 py-7 text-lg rounded-lg w-[90%] card-container bg-[aqua]"
>
  <h1 class="text-lg font-[serif] font-bold text-[1.3rem]">
    {sch.name}
  </h1>
  <p class="text-base font-semibold mt-5">
    <span class="font-bold text-red-700 text-[1rem] font-[sans-serif]">
      Last Date :</span
    >
    {sch.lastDate}
  </p>

  <p class="text-base font-semibold mt-5">
    <span class="font-bold text-red-700 text-[1rem] font-[serif]"
      >Benefits :</span
    >
    {sch.benefits}
  </p>

  <div
    class="bg-white button-wrapper flex justify-between mt-10 font-[Raleway] bg-[aqua]"
  >
    <Link to={`/${category}/${sch._id}`}>
      <button
        class="bg-green-600 py-3 px-3 mt-4 rounded text-sm font-semibold hover:bg-opacity-75 text-white"
        >View Details</button
      >
    </Link>

    <a href={sch.link} target="_blank">
      <button
        disabled={closed}
        class={`button ${
          closed ? "bg-red-400" : "bg-blue-600"
        } py-3 px-3 mt-4 rounded text-sm font-semibold hover:bg-opacity-75 text-white ${
          isYetToAnnounce ? "yet" : ""
        }`}
      >
        {isYetToAnnounce
          ? "Yet To Announce"
          : closed
          ? "Registration Closed"
          : "Apply Now"}</button
      >
    </a>
  </div>
</div>

<style>
  .card-container {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }

  .yet {
    /* background: yellow !important; */
    background-color: rgb(250 202 21 / 1);
    /* color: black; */
  }
</style>
