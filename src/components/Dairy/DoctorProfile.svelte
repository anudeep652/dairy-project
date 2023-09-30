<script lang="ts">
  import { onMount } from "svelte";
  import { getDoctorProfile } from "../../api/auth";
  import {} from "svelte-routing";
  import BugerWithNav from "../BugerWithNav.svelte";
  export let doctorId: string;
  let doctor: any;

  onMount(async () => {
    const resp = await getDoctorProfile(doctorId);
    const respJson = await resp.json();
    doctor = respJson.data;
  });
</script>

<main>
  <div class="p-5">
    <BugerWithNav />
  </div>
  <div class="flex justify-center items-center w-[100%] h-[100%]">
    {#if doctor}
      <div
        class="flex flex-col gap-5 shadow-xl p-5 pb-20 rounded-lg w-[90%] px-10"
      >
        <div class="name">
          <h1 class="font-[Raleway] font-[800] text-lg">Doctor Name</h1>
          <h1 class="font-[Raleway] font-[600]">{doctor.name}</h1>
        </div>
        <div class="email">
          <h1 class="font-[Raleway] font-[800] text-lg">Email</h1>
          <h1 class="font-[Raleway] font-[600]">{doctor.email}</h1>
        </div>
        <div class="phone">
          <h1 class="font-[Raleway] font-[800] text-lg">Phone Number</h1>
          <h1 class="font-[Raleway] font-[600]">{doctor.phone}</h1>
        </div>
        <div class="address">
          <h2 class="font-[Raleway] font-[800] text-lg">Address</h2>
          <div class="location gap-5 font-[Raleway] font-[600]">
            {doctor.address}
          </div>
        </div>
        <div class="city">
          <h2 class="font-[Raleway] font-[800] text-lg">City</h2>
          <div class="location gap-5 font-[Raleway] font-[600]">
            {doctor.city}
          </div>
        </div>
        <div class="profession">
          <h2 class="font-[Raleway] font-[800] text-lg">Profession</h2>
          <div class="location gap-5 font-[Raleway] font-[600]">
            {doctor.profession}
          </div>
        </div>
      </div>
    {/if}
  </div>
</main>
