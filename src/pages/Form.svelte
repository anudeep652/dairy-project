<script lang="ts">
  import { Camera, CameraResultType } from "@capacitor/camera";
  import { newCase } from "../api/case";
  import { success } from "../mytheme";
  import { navigate } from "svelte-routing";
  import BugerWithNav from "../components/BugerWithNav.svelte";

  let images: string[] = [];
  let place: string;
  let isError = false;
  let errorMsg = "";
  let isLoading = false;

  async function addImage() {
    const image = await Camera.getPhoto({
      quality: 90,
      width: screen.width * 1.5,
      height: screen.height * 1.5,
      saveToGallery: true,
      resultType: CameraResultType.DataUrl,
    });

    images.push(image.dataUrl!);
    images = [...images];
  }

  const handleFormSubmit = async () => {
    const resp = await newCase(place, images);
    const respJson = await resp.json();
    if (resp.status === 400) {
      isError = true;
      errorMsg = respJson.message;
      isLoading = false;
    } else {
      console.log(respJson);
      success("Successfully posted case");
      localStorage.setItem(
        "newcase",
        JSON.stringify({
          place: respJson.place,
          images: respJson.images,
        })
      );
      console.log(resp);
      isError = false;
      errorMsg = "";
      isLoading = false;
      navigate("/successcaseupload");
    }
  };
</script>

<div class="m-5">
  <BugerWithNav />
</div>
<form action="" class="my-5 flex flex-col justify-center items-center gap-10">
  <h3 class="mx-5">
    Give us more details about the disease by filling the details below
  </h3>
  <!-- <input type="text" class="outline-2 outline-black" /> -->
  <div class="px-5">
    <label for="place" class="block mb-3"
      >Enter your place(enter your city name with district)</label
    >
    <input
      class="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="place"
      type="text"
      placeholder="place"
      bind:value={place}
    />
  </div>
  <div class="px-5">
    <div class="flex flex-col gap-5 justify-center items-center">
      <h2>Upload few images of the cow suffering from the disease</h2>
      <label
        for="dropzone-file"
        class="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
      >
        <div class="flex flex-col justify-center items-center pt-5 pb-6">
          <svg
            aria-hidden="true"
            class="mb-3 w-10 h-10 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            />
          </svg>
          <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span class="font-semibold">Click to add photos</span>
          </p>
        </div>
        <input
          id="dropzone-file"
          type="button"
          class="hidden"
          on:click={addImage}
        />
      </label>
      {#if images.length}
        <div class="carousel w-[100%] rounded-xl gap-10 flex flex-col">
          {#each images as image, i}
            <div id="#img{i}" class="carousel-item w-full">
              <img src={image} alt="" class="w-full" />
            </div>
          {/each}
        </div>
      {/if}
    </div>
  </div>
  <button
    class="bg-blue-500 text-white px-5 py-2 rounded-md self-end mx-5"
    on:click|preventDefault={handleFormSubmit}>Submit</button
  >
</form>
