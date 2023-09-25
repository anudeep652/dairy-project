<script lang="ts">
  import { onMount } from "svelte";
  import Card from "../components/Card.svelte";
  import { scholarships } from "../store";
  import ArrowLeft from "../assets/arrowLeft.svelte";
  import manstanding from "../assets/manstanding.png";

  let scholarshipsData = $scholarships;
  onMount(() => {
    scholarshipsData = JSON.parse(localStorage.getItem("scholarships")).data;
  });
  let filter: "all" | "live" | "closed" = "all";

  $: filter;
  const handleFilterclick = (myFilter: "all" | "live" | "closed") => {
    filter = myFilter;
  };

  let closed = scholarshipsData.filter((sc) => {
    let today: any = new Date().toLocaleDateString();
    let lastDate = sc.lastDate.split("-").map((d) => parseInt(d));
    today = today.split("/").map((d) => parseInt(d));
    console.log(lastDate);
    console.log(today);
    if (lastDate[2] < today[2]) return true;
    if (lastDate[1] < today[1]) return true;
    if (lastDate[0] < today[0]) {
      if (lastDate[1] < today[1]) {
        return true;
      }
    }
    return false;
  });

  let live = scholarshipsData.filter((sc) => {
    let today: any = new Date().toLocaleDateString();
    let lastDate = sc.lastDate.split("-").map((d) => parseInt(d));
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
  console.log(closed);
</script>

<main class="pb-10">
  <img src={manstanding} alt="man" />
  <div class="top flex mt-5">
    <!-- <div
      class="flex arrow mt-3 p-2 cursor-pointer text-center"
      on:keydown
      on:keypress
    -->
    <!-- > -->
    <ArrowLeft />
    <!-- </div> -->
    <div class="top flex justify-center items-center ml-[6rem]">
      <h2 class="text-xl font-bold">ScholrConnect</h2>
    </div>
  </div>
  <h2 class="text-center my-10 text-[1.01rem] font-semibold font-[sans-serif]">
    We have found {scholarshipsData.length} scholarships for you
  </h2>
  <ul class="flex justify-around mb-7">
    <li
      on:click={() => handleFilterclick("all")}
      class={`shadow-md px-4 py-1  text-black rounded-xl cursor-pointer font-bold  ${
        filter === "all" ? "active" : ""
      }`}
    >
      All
    </li>
    <li
      on:click={() => handleFilterclick("live")}
      class={`shadow-md px-4 py-1 text-black rounded-xl cursor-pointer font-bold ${
        filter === "live" ? "active" : ""
      }`}
    >
      Live
    </li>
    <li
      on:click={() => handleFilterclick("closed")}
      class={`shadow-md px-3 py-1 text-black rounded-xl cursor-pointer font-bold ${
        filter === "closed" ? "active" : ""
      }`}
    >
      Closed
    </li>
  </ul>
  <div class="cards flex flex-col gap-[3rem] justify-evenly items-center">
    {#if filter === "all"}
      {#each scholarshipsData as sch}
        <Card {sch} category={"scholarship"} />
      {/each}
    {:else if filter === "live"}
      {#each live as sch}
        <Card {sch} category={"scholarship"} />
      {/each}
    {:else}
      {#each closed as sch}
        <Card {sch} category={"scholarship"} />
      {/each}
    {/if}
  </div>
</main>

<style>
  img {
    position: absolute;
    z-index: -1;
    position: fixed;
    height: 680px;
    width: 390px;
    transform: translateY(20%);
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
