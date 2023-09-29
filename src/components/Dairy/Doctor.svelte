<script lang="ts">
  import { onMount } from "svelte";
  import { getAllCases } from "../../api/case";
  import Carousel from "./Carousel.svelte";
  import LocationIcon from "./LocationIcon.svelte";
  import { Link } from "svelte-routing";
</script>

<main class="h-[100%]">
  <div class="btns flex flex-col gap-10 my-5 h-[100%] mt-15">
    <Link to="/appointments" class="w-[100%]">
      <button
        class="bg-blue-800 text-white p-6 rounded-md justify-between items-center flex w-[100%]"
      >
        <!-- {@html btn.icon} -->
        <h2 class="flex-1 text-xl">
          <!-- {btn.text} -->
          My Appointments
        </h2>
      </button>
    </Link>
    <Link to="/cases" class="w-[100%]">
      <button
        class="bg-blue-800 text-white p-6 rounded-md justify-between items-center flex w-[100%]"
      >
        <!-- {@html btn.icon} -->
        <h2 class="flex-1 text-xl">
          <!-- {btn.text} -->
          All Cases
        </h2>
      </button>
    </Link>
  </div>
</main>
