<script lang="ts">
  import { Link } from "svelte-routing";
  import BugerWithNav from "../components/BugerWithNav.svelte";
  import Farmer from "../components/Dairy/Farmer.svelte";
  import Doctor from "../components/Dairy/Doctor.svelte";

  let user = JSON.parse(localStorage.getItem("user"));
  console.log(user.role);
</script>

<main class="p-5">
  <BugerWithNav />

  {#if user.role === "farmer"}
    <div class="farmer flex flex-col gap-4">
      <Farmer />
    </div>
  {:else if user.role === "doctor"}
    <Doctor />
  {/if}
</main>
