<script lang="ts">
  import { onMount } from "svelte";

  export let placeholder;
  export let type;
  export let field;
  export let data;

  let ref: HTMLInputElement;

  onMount(() => {
    ref.type = type;
    if (field === "marksPercentage") {
      ref.step = "0.01";
    }
  });
</script>

<input
  bind:value={data[field]}
  bind:this={ref}
  id="email-address-icon"
  class="bg-gray-100 text-gray-900 text-sm rounded-full block w-full pl-5 p-3.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
  {placeholder}
/>
