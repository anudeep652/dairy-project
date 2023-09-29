<script lang="ts">
  import { onMount } from "svelte";
  import { getAllCases } from "../../api/case";
  import Carousel from "./Carousel.svelte";
  import BugerWithNav from "../BugerWithNav.svelte";

  let cases: any[];
  onMount(async () => {
    const resp = await getAllCases();
    const respJson = await resp.json();
    console.log(respJson.data);
    cases = respJson.data;
    console.log(cases);
  });
</script>

<div class="p-5">
  <BugerWithNav />
</div>
<main class="mx-5">
  {#if cases}
    {#each cases as c}
      <div class="flex flex-col gap-6">
        <h1>Farmer Name</h1>
        <h1>{c.name}</h1>
        <div class="location mt-5 gap-5" />
        {#if c.cases.length > 0}
          <h1 class="font-bold text-[1.27rem]">
            Some Images of the infected cow
          </h1>
          <div class="images">
            {#each c.cases as caseImg}
              <Carousel images={caseImg.images} />
            {/each}
          </div>
        {/if}
      </div>
    {/each}
  {/if}
</main>
