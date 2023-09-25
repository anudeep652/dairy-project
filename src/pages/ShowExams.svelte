<script lang="ts">
  import { onMount } from "svelte";
  import { scholarshipsExams } from "../store";
  import manstanding from "../assets/manstanding.png";
  import ArrowLeft from "../assets/arrowLeft.svelte";
  import Card from "../components/Card.svelte";
  import logo from "../assets/logo.png";

  let scholarshipExams = $scholarshipsExams;
  onMount(() => {
    scholarshipExams = JSON.parse(localStorage.getItem("exams")).data;
  });

  let filter: "all" | "live" | "closed" | "upcoming" = "all";

  $: filter;
  const handleFilterclick = (
    myFilter: "all" | "live" | "closed" | "upcoming"
  ) => {
    filter = myFilter;
  };

  let upcoming = scholarshipExams.filter(
    (sc) => sc.lastDate === "YET TO ANNOUNCE"
  );

  let closed = scholarshipExams.filter((sc) => {
    let today: any = new Date().toLocaleDateString();
    today = today.split("/").map((d) => parseInt(d));
    let lastDate = sc.lastDate.split("/").map((d) => parseInt(d));
    if (lastDate[2] < today[2]) return true;
    if (lastDate[1] < today[1]) return true;
    if (lastDate[0] < today[0]) {
      if (lastDate[1] < today[1]) {
        return true;
      }
    }
    return false;
  });

  let live = scholarshipExams.filter((sc) => {
    if (sc.lastDate === "YET TO ANNOUNCE") return false;
    let today: any = new Date().toLocaleDateString();
    let lastDate = sc.lastDate.split("/").map((d) => parseInt(d));
    today = today.split("/").map((d) => parseInt(d));
    if (lastDate[2] < today[2]) return false;
    if (lastDate[1] < today[1]) return false;
    if (lastDate[0] < today[0]) {
      if (lastDate[1] < today[1]) {
        return false;
      }
    }

    return true;
  });
</script>

<main class="pb-10">
  <img src={manstanding} alt="man" class="man" />
  <div class="top flex mt-5">
    <!-- <div
        class="flex arrow mt-3 p-2 cursor-pointer text-center"
        on:keydown
        on:keypress
      -->
    <!-- > -->
    <ArrowLeft />
    <!-- </div> -->
    <div class="top flex justify-center items-center ml-[5rem]">
      <h2 class="text-xl font-bold">
        <img src={logo} alt="" class="logo" />
      </h2>
    </div>
  </div>
  <h2 class="text-center mb-5 text-[1.05rem] font-semibold font-[sans-serif]">
    We have found {scholarshipExams.length} scholarships for you
  </h2>
  <ul class="flex justify-around mb-7">
    <li
      on:click={() => handleFilterclick("all")}
      class={`font-bold shadow-md px-4 py-1  text-black rounded-xl cursor-pointer  ${
        filter === "all" ? "active" : ""
      }`}
    >
      All
    </li>
    <li
      on:click={() => handleFilterclick("live")}
      class={`font-bold shadow-md px-4 py-1 text-black rounded-xl cursor-pointer ${
        filter === "live" ? "active" : ""
      }`}
    >
      Live
    </li>
    <li
      on:click={() => handleFilterclick("closed")}
      class={`font-bold shadow-md px-3 py-1 text-black rounded-xl cursor-pointer ${
        filter === "closed" ? "active" : ""
      }`}
    >
      Closed
    </li>
    <li
      on:click={() => handleFilterclick("upcoming")}
      class={`font-bold shadow-md px-3 py-1 text-black rounded-xl cursor-pointer ${
        filter === "upcoming" ? "active" : ""
      }`}
    >
      Upcoming
    </li>
  </ul>
  <div class="cards flex flex-col gap-[3rem] justify-evenly items-center">
    {#if filter === "all"}
      {#each scholarshipExams as sch}
        <Card {sch} category={"exam"} />
      {/each}
    {:else if filter === "live"}
      {#each live as sch}
        <Card {sch} category={"exam"} />
      {/each}
    {:else if filter === "upcoming"}
      {#each upcoming as sch}
        <Card {sch} category={"exam"} />
      {/each}
    {:else}
      {#each closed as sch}
        <Card {sch} category={"exam"} />
      {/each}
    {/if}
  </div>
</main>

<style>
  .logo {
    transform: translateY(10%);
    height: 80px;
    width: 180px;
  }
  img.man {
    position: absolute;
    z-index: -1;
    position: fixed;
    height: 680px;
    width: 390px;
    transform: translateY(20%);
  }
  h2 {
    transform: translateY(-40%);
  }

  .active {
    background-color: rgb(28 100 242 / 1);
    color: white;
  }
  /* img {
      background: url("../assets/manstanding.png");
      background-repeat: no-repeat;
      position: sticky;
    } */
</style>
