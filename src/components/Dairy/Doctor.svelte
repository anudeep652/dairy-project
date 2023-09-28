<script lang="ts">
  import { onMount } from "svelte";
  import { getAllCases } from "../../api/case";
  import Carousel from "./Carousel.svelte";

  let cases: any[];
  onMount(async () => {
    const resp = await getAllCases();
    const respJson = await resp.json();
    console.log(respJson.data);
    cases = respJson.data;
  });
  //   console.log(cases);
</script>

<main>
  {#if cases}
    {#each cases as c}
      <div>
        <h2>{c.place}</h2>
        <div class="images flex flex-col gap-10">
          {#each c.images as img}
            <img src={img} alt="" />
          {/each}
        </div>
      </div>
      <Carousel images={c.images} />
    {/each}
  {/if}
</main>
