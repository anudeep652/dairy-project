<script lang="ts">
  import { onMount } from "svelte";
  import {
    getDoctorProfile,
    getFarmerProfile,
    updateDoctorProfile,
    updateFarmerProfile,
  } from "../../../api/auth";
  import EditIcon from "../../../assets/EditIcon.svelte";
  import BugerWithNav from "../../BugerWithNav.svelte";
  import { Camera, CameraResultType } from "@capacitor/camera";

  export let doctor: any;
  onMount(async () => {
    const resp = await getDoctorProfile(doctor._id);
    const respJson = await resp.json();
    doctor = respJson.data;

    localStorage.setItem(
      "user",
      JSON.stringify({ ...respJson.data, role: respJson.role })
    );
  });
  let isError = false;
  let errorMsg = "";
  let isLoading = false;
  const handleProfileImg = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      width: screen.width * 1.5,
      height: screen.height * 1.5,
      saveToGallery: true,
      resultType: CameraResultType.DataUrl,
    });
    doctor.photo = image.dataUrl!;

    let resp = await updateDoctorProfile(image.dataUrl || "", doctor._id);
    let respJson = await resp.json();
    if (resp.status === 400) {
      isError = true;
      errorMsg = respJson.message;
      isLoading = false;
    } else {
      console.log(respJson);
      //   localStorage.setItem("user", JSON.stringify(respJson));
      console.log(resp);
      isError = false;
      errorMsg = "";
      isLoading = false;
    }
  };
</script>

<div class="my-5 mx-5">
  <BugerWithNav />
</div>
<div
  class="px-6 rounded text-center max-w-sm flex flex-col justify-center items-center"
>
  <button on:click|preventDefault={handleProfileImg}>
    {#if doctor?.photo}
      <div class="relative">
        <img
          class="w-32 h-32 rounded-full mx-auto"
          src={doctor?.photo}
          alt="S"
        />
        <div class="absolute right-2 bottom-1">
          <EditIcon />
        </div>
      </div>
    {:else}
      <div
        class="relative avatar rounded-[50%] flex justify-center items-center bg-blue-500 text-white w-[70px] h-[70px] text-2xl"
      >
        {doctor?.name[0]?.toUpperCase()}
        <div class="absolute bottom-1 right-1">
          <EditIcon />
        </div>
      </div>
    {/if}
  </button>
  <div class="text-lg font-bold mt-5">
    <p>{doctor?.name}</p>
  </div>

  <p class="mt-2 text-sm text-gray-900">
    {doctor?.email}
  </p>

  <div class="w-[100%] px-5 my-10 flex flex-col gap-10">
    <div class="">
      <div class="flex fex-col justify-between">
        <h2>Address</h2>
        <h2 class=" text-gray-900">
          {doctor?.address}
        </h2>
      </div>
    </div>
    <div class="flex fex-col justify-between">
      <h2>City</h2>
      <h2 class=" text-gray-900">
        {doctor?.city}
      </h2>
    </div>
    <div class="flex fex-col justify-between">
      <h2>Pincode</h2>
      <h2 class=" text-gray-900">
        {doctor?.pincode}
      </h2>
    </div>
    <div class="flex fex-col justify-between">
      <h2>Phone Number</h2>
      <h2 class=" text-gray-900">
        {doctor?.phone}
      </h2>
    </div>
  </div>
</div>

<style>
</style>
