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
    console.log(cases);
  });
</script>

<main>
  {#if cases}
    {#each cases as c}
      <div class="flex flex-col gap-6">
        <div class="location mt-5 gap-5" />
        <div class="images">
          <h1 class="font-bold text-[1.27rem]">
            Some Images of the infected cow
          </h1>
          {#each c.cases as caseImg}
            <Carousel images={caseImg.images} />
          {/each}
        </div>
      </div>
    {/each}
  {/if}
</main>
