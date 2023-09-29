<script lang="ts">
  import { onMount } from "svelte";
  import { navigate } from "svelte-routing";
  import { bookDoctor, findDoctorByLocation } from "../../api/auth";

  export let setShowModel: (val: boolean) => void;
  const user = JSON.parse(localStorage.getItem("user"));
  let doctors: any[];
  let isError = false;
  let errorMsg = "";
  let isLoading;
  onMount(async () => {
    const resp = await findDoctorByLocation(user.city);
    const respJson = await resp.json();
    doctors = respJson.data;
    console.log(doctors);
  });

  const handleClick = async (doctorId: string) => {
    const resp = await bookDoctor(doctorId, user._id);
    const respJson = await resp.json();
    if (resp.status === 200) {
      console.log(respJson);
      console.log(resp);
      isError = false;
      errorMsg = "";
      isLoading = false;
      navigate("/booking-success");
    } else {
      isError = true;
      errorMsg = respJson.message;
      isLoading = false;
    }
  };
</script>

<div
  class="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-10"
>
  <div
    class="max-h-full w-[90%] overflow-y-auto sm:rounded-2xl bg-white rounded-xl relative"
  >
    <button
      on:click={() => setShowModel(false)}
      class="cross absolute top-0 right-0 p-5 cursor-pointer text-black text-xl"
    >
      &#x2715;
    </button>
    <div class="w-full">
      <div class="my-10 max-w-[400px] mx-auto">
        {#if doctors}
          {#each doctors as doc}
            <div class="ring-slate-900">
              <div class="mb-8 px-5 flex flex-col gap-5 my-3">
                <div>
                  <h1 class="mb-1 text-xl font-extrabold">Doctor Name</h1>
                  <p class="text-gray-600">{doc.name}</p>
                </div>
                <div>
                  <h1 class="mb-1 text-xl font-extrabold">Address</h1>
                  <p class="text-gray-600">{doc.address}</p>
                </div>
                <div>
                  <h1 class="mb-1 text-xl font-extrabold">Time</h1>
                  <p class="text-gray-600">{doc.availabilityTime}</p>
                </div>
                <div>
                  <h1 class="mb-1 text-xl font-extrabold">Phone Numner</h1>
                  <p class="text-gray-600">{doc.phone}</p>
                </div>
              </div>
              <div class="space-y-4 flex justify-end">
                <button
                  on:click|preventDefault={() => handleClick(doc._id)}
                  class="self-end bg-blue-600 mx-5 px-4 py-2 rounded-md text-white"
                  >Confirm</button
                >
              </div>
            </div>
          {/each}
        {:else}
          <div class="mx-5">No Doctors found in your city</div>
        {/if}
      </div>
    </div>
  </div>
</div>
