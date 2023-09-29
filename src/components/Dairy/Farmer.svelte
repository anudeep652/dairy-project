<script lang="ts">
  import { Link } from "svelte-routing";
  import {
    Pharmacy,
    Medicare,
    Awareness,
    Vaccine,
    Disease,
  } from "../../assets/button-icons";

  const btns = [
    {
      text: "Vaccine Chart",
      icon: Vaccine,
      to: "/vaccine-chart",
    },
    {
      text: "Instant Medicare",
      icon: Medicare,
      to: "/instant-medicare",
    },
    {
      text: "Awareness",
      icon: Awareness,
      to: "/awareness",
    },
    {
      text: "Doctors Nearby",
      icon: Vaccine,
      to: "/doctors-nearby",
    },
    {
      text: "Seasonal Diseases",
      icon: Disease,
      to: "/disease",
    },
    {
      text: "Nearby Pharmacy",
      icon: Pharmacy,
      to: "/pharmacy",
    },
  ];
</script>

<main>
  <h2 class="my-5 text-xl font-[Raleway] font-[600]">
    What service do you want today ?
  </h2>
  <div class="btns flex flex-col gap-10">
    {#each btns as btn}
      <Link to={btn.to} class="w-[100%]">
        <button
          class="bg-blue-800 text-white p-6 rounded-md justify-between items-center flex w-[100%]"
        >
          {@html btn.icon}
          <h2 class="flex-1 text-lg font-[Raleway] font-[600]">
            {btn.text}
          </h2>
        </button>
      </Link>
    {/each}
  </div>
</main>
