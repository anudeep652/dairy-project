<script lang="ts">
  export let images: string[];

  const backIndex = (idx: number) => {
    return idx - 1 < 0 ? images.length - 1 : idx - 1;
  };

  const nextIndex = (idx: number) => {
    return idx + 1 > images.length - 1 ? 0 : idx + 1;
  };
</script>

<div class="bg-gray-100 p-3 relative mt-[300px]">
  <div class=" mx-auto" style="scroll-snap-type: x mandatory">
    <!-- first -->
    {#each images as img, i}
      <div class="h-[90%]">
        <input
          class="sr-only peer"
          type="radio"
          name="carousel"
          id={"#img" + i}
          checked
        />
        <!-- content #1 -->
        <div
          class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg transition-all duration-300 opacity-0 peer-checked:opacity-100 peer-checked:z-10 z-0 w-[100%]"
        >
          <img src={img} alt="" />

          <!-- controls -->
          <div class="absolute top-1/2 flex justify-between z-20 w-[100%]">
            <label
              for={"#img" + backIndex(i)}
              class="inline-block text-red-600 cursor-pointer -translate-x-5 bg-white rounded-full shadow-md active:translate-y-0.5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
                  clip-rule="evenodd"
                />
              </svg>
            </label>
            <label
              for={"#img" + nextIndex(i)}
              class="inline-block text-red-600 cursor-pointer translate-x-5 bg-white rounded-full shadow-md active:translate-y-0.5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </label>
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>
