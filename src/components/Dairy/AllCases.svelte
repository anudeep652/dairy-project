<script lang="ts">
  import { onMount } from "svelte";
  import { getAllCases } from "../../api/case";
  import Carousel from "./Carousel.svelte";
  import BugerWithNav from "../BugerWithNav.svelte";
  import { getFarmerProfile } from "../../api/auth";

  let cases: any[] = [];
  onMount(async () => {
    // @ts-ignore
    const user = JSON.parse(localStorage.getItem("user"));
    const resp = await getAllCases(user._id);
    const respJson = await resp.json();
    console.log(respJson.data);
    cases = respJson.data.appointments;
    console.log(cases);
  });
</script>

<div class="p-5">
  <BugerWithNav />
</div>
<main class="mx-5">
  {#each cases as c}
    {#await getFarmerProfile(c.farmer_id)}
      <div />
    {:then resp}
      {#await resp.json()}
        <div />
      {:then respJson}
        {#if respJson.data}
          <div class="flex flex-col gap-5 shadow-xl p-5 pb-20 rounded-lg">
            <div class="name">
              <h1 class="font-[Raleway] font-[800] text-lg">Farmer Name</h1>
              <h1 class="font-[Raleway] font-[600]">{respJson.data.name}</h1>
            </div>
            <div class="address">
              <h2 class="font-[Raleway] font-[800] text-lg">Address</h2>
              <div class="location gap-5 font-[Raleway] font-[600]">
                {respJson.data.address}
              </div>
            </div>
            <div class="images">
              {#if c.images.length > 0}
                <h1 class="font-bold text-[1.27rem]">
                  Some Images of the infected cow
                </h1>
                <div class="images">
                  <!-- {#each c.images as caseImg} -->
                  <Carousel images={c.images} />
                  <!-- {/each} -->
                </div>
              {/if}
            </div>
          </div>
        {:else}
          <div
            class="flex justify-center items-center font-[Raleway] text-lg font-[700]"
          >
            No Appointments
          </div>
        {/if}
      {/await}
      <div />
    {/await}
  {/each}
</main>
