<script lang="ts">
  import { onMount } from "svelte";
  import { getAllCases } from "../../api/case";
  import Carousel from "./Carousel.svelte";
  import LocationIcon from "./LocationIcon.svelte";

  let cases: any[];
  onMount(async () => {
    const resp = await getAllCases();
    const respJson = await resp.json();
    console.log(respJson.data);
    cases = respJson.data;
  });
</script>

<main>
  {#if cases}
    {#each cases as c}
      <div class="flex flex-col gap-6">
        <div class="location mt-5 gap-5">
          <div class="location-header flex gap-2 items-center pt-5">
            <LocationIcon />
            <h1 class="font-bold text-[1.35rem]">Location</h1>
          </div>
          <h2 class="text-[1.15rem]">{c.place}</h2>
        </div>
        <div class="images">
          <h1 class="font-bold text-[1.27rem]">
            Some Images of the infected cow
          </h1>
          <Carousel images={c.images} />
        </div>
      </div>
    {/each}
  {/if}
</main>
