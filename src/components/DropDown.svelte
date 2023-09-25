<script lang="ts">
  import { selected } from "../store";

  export let options: any[];
  export let field;
  export let data;

  $: {
    selected;
    selected.update((prev) => {
      // console.log($selectedOption);
      return { ...prev, [field]: data[field] };
    });
  }
</script>

<!-- <label for="pet-select" class="">dind</label> -->

<select
  bind:value={data[field]}
  name="pets"
  id="pet-select"
  class="p-2.5 text-sm border-white bg-gray-100 rounded-lg w-[100%] mt-2"
>
  <!-- <option value="">--choose an option</option> -->
  {#each options as op}
    <option value={op} class="text-black">{op}</option>
  {/each}
</select>

<style>
  select {
    /* border-radius: 4rem; */
  }
  select:focus {
    outline: none;
  }
  option {
    border: none;
  }
  option:focus {
    outline: none;
  }

  option,
  option:focus,
  option:active {
    border: 0 !important;
    outline: 0 !important;
  }
</style>
