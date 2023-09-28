<script lang="ts">
  import FarmerLogin from "../components/Dairy/Farmer/Login.svelte";
  import DoctorLogin from "../components/Dairy/Doctor/Login.svelte";

  import { failure } from "../mytheme";
  let role: string;
  const options = ["", "farmer", "doctor"];
  let showForm = false;
  const handleClick = () => {
    if (role === "") failure("Please choose any one");
    showForm = true;
  };
</script>

{#if showForm}
  {#if role === "farmer"}
    <FarmerLogin />
  {:else}
    <DoctorLogin />
  {/if}
{:else}
  <main class="flex flex-col justify-center items-center mx-5 h-[100%]">
    <label for="" class="self-start py-5">Select your role</label>
    <select
      bind:value={role}
      name="pets"
      id="pet-select"
      class="p-2.5 text-sm border-white bg-gray-100 rounded-lg w-[100%] mt-2"
    >
      {#each options as op}
        <option value={op} class="text-black">{op}</option>
      {/each}
    </select>
    <button
      class="bg-blue-600 py-2 px-5 text-white rounded-md self-end my-10"
      on:click|preventDefault={handleClick}>Next</button
    >
  </main>
{/if}
