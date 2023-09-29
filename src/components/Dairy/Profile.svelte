<script lang="ts">
  import DoctorProfile from "./Doctor/DoctorProfile.svelte";
  import FarmerProfile from "./Farmer/FarmerProfile.svelte";

  export let photo: string;
  const user = JSON.parse(localStorage.getItem("user"));
</script>

<main>
  {#if user.role === "farmer"}
    <FarmerProfile farmer={user} />
  {:else}
    <DoctorProfile doctor={user} />
  {/if}
</main>
