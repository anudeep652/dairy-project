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

  {#if user.role === "Farmer"}
    <div class="farmer mt-10 flex flex-col gap-4">
      <Farmer />
      <Link to="/form">
        <button class="bg-blue-500 text-white p-2 rounded-md w-[30%]"
          >Click here</button
        >
      </Link>
    </div>
  {:else if user.role === "Doctor"}
    <Doctor />
  {/if}
</main>
