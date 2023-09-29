<script lang="ts">
  import { onMount } from "svelte";
  import { getFarmerProfile, updateFarmerProfile } from "../../../api/auth";
  import EditIcon from "../../../assets/EditIcon.svelte";
  import BugerWithNav from "../../BugerWithNav.svelte";
  import { Camera, CameraResultType } from "@capacitor/camera";

  export let farmer: any;
  onMount(async () => {
    const resp = await getFarmerProfile(farmer._id);
    const respJson = await resp.json();
    farmer = respJson.data;

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
    farmer.photo = image.dataUrl!;

    let resp = await updateFarmerProfile(image.dataUrl || "", farmer._id);
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
    {#if farmer.photo}
      <img class="w-32 h-32 rounded-full mx-auto" src={farmer?.photo} alt="S" />
    {:else}
      <div
        class="relative avatar rounded-[50%] flex justify-center items-center bg-blue-500 text-white w-[70px] h-[70px] text-2xl"
      >
        {farmer?.name[0]?.toUpperCase()}
        <div class="absolute bottom-1 right-1">
          <EditIcon />
        </div>
      </div>
    {/if}
  </button>
  <div class="text-lg mt-5 font-[Raleway] font-[800]">
    <p>{farmer?.name}</p>
  </div>

  <p class="mt-2 text-sm text-gray-600 font-[Raleway] font-[600]">
    {farmer?.email}
  </p>

  <div class="w-[100%] px-5 my-10 flex flex-col gap-10">
    <div class="">
      <div class="flex fex-col justify-between">
        <h2 class="font-[Raleway] font-[600]">Address</h2>
        <h2 class=" text-gray-900 font-[Raleway] font-[600]">
          {farmer?.address}
        </h2>
      </div>
    </div>
    <div class="flex fex-col justify-between">
      <h2 class="font-[Raleway] font-[600]">City</h2>
      <h2 class=" text-gray-900 font-[Raleway] font-[600]">
        {farmer?.city}
      </h2>
    </div>
    <div class="flex fex-col justify-between">
      <h2 class="font-[Raleway] font-[600]">Pincode</h2>
      <h2 class=" text-gray-900 font-[Raleway] font-[600]">
        {farmer?.pincode}
      </h2>
    </div>
    <div class="flex fex-col justify-between">
      <h2 class="font-[Raleway] font-[600]">Phone Number</h2>
      <h2 class=" text-gray-900 font-[Raleway] font-[600]">
        {farmer?.phone}
      </h2>
    </div>
  </div>
</div>

<style>
</style>
