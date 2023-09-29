<script lang="ts">
  import { onMount } from "svelte";
  import { caseFarmers } from "../../api/auth";
  import BugerWithNav from "../BugerWithNav.svelte";
  const user = JSON.parse(localStorage.getItem("user"));
  let farmer: any[];
  onMount(async () => {
    const resp = await caseFarmers(user.appointments);
    const respJson = await resp.json();
    farmer = respJson.data;
  });
</script>

<div class="m-5">
  <BugerWithNav />
</div>
<main class="h-full">
  {#if farmer}
    <div class="m-10 h-full flex fex-col gap-10">
      {#each farmer as f}
        <div class="h-full flex flex-col gap-5">
          <div>
            <h2 class="font-bold text-xl">Name</h2>
            <h2>{f.name}</h2>
          </div>
          <div>
            <h2 class="font-bold text-xl">Email</h2>
            <h2>{f.email}</h2>
          </div>
          <div>
            <h2 class="font-bold text-xl">Address</h2>
            <h2>{f.address}</h2>
          </div>
          <div>
            <h2 class="font-bold text-xl">Phone Number</h2>
            <h2>{f.phone}</h2>
          </div>
        </div>
      {/each}
    </div>
  {/if}
</main>
