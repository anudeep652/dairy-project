<script lang="ts">
  import BugerWithNav from "../components/BugerWithNav.svelte";
  import Farmer from "../components/Dairy/Farmer.svelte";

  let user = JSON.parse(localStorage.getItem("user"));
  console.log(user.role);
</script>

<main class="p-5">
  <BugerWithNav />

  {#if user.role === "Farmer"}
    <div class="farmer">
      <Farmer />
      <button class="bg-blue-500 text-white p-2 rounded-md">Click here</button>
    </div>
  {/if}
</main>
