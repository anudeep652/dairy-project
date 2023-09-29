<script lang="ts">
  import BugerWithNav from "../BugerWithNav.svelte";
  import Model from "./Model.svelte";

  let showModel = false;
  const setShowModel = (val: boolean) => {
    showModel = val;
  };
  const vaccines = [
    {
      name: "Foot and Mouth Disease (FMD)",
      firstDoseAge: "4 months and  above",
      boosterDose: "1 month after first dose",
      subsequentDose: "Six monthly",
    },
    {
      name: "Haemorrhagic Septicaemia (HS)",
      firstDoseAge: "6 months and  above",
      boosterDose: "-",
      subsequentDose: "Annually in endemic areas.",
    },
    {
      name: "Black Quarter (BQ)",
      firstDoseAge: "6 months and  above",
      boosterDose: "-",
      subsequentDose: "Annually in endemic areas.",
    },
    {
      name: "Brucellosis",
      firstDoseAge: "4-8 months of age(Only female calves)",
      boosterDose: "-",
      subsequentDose: "Once in a lifetime",
    },
    {
      name: "Theileriosis",
      firstDoseAge: "3 months of age and above",
      boosterDose: "-",
      subsequentDose:
        "Once in a lifetime. Only required for crossbred and exotic cattle.",
    },
    {
      name: "Anthrax",
      firstDoseAge: "4 months and  above",
      boosterDose: "-",
      subsequentDose: "Annually in endemic areas.",
    },
    {
      name: "IBR",
      firstDoseAge: "3 months and  above",
      boosterDose: "1 month after first dose",
      subsequentDose: "Six monthly (vaccine presently not produced in India)",
    },
    {
      name: "Rabies (Post bite therapy only)",
      firstDoseAge: "Immediately after suspected bite.",
      boosterDose: "4th day",
      subsequentDose: "7,14,28 and 90 (optional) days after first dose.",
    },
  ];
</script>

<div class="m-5">
  <BugerWithNav />
</div>
<section class="antialiased bg-gray-100 text-gray-600 h-screen px-4">
  {#if showModel}
    <Model {setShowModel} />
  {/if}
  <div class="flex flex-col h-full my-10">
    <!-- Table -->
    <div
      class="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200"
    >
      <header class="px-5 py-4 border-b border-gray-100">
        <h2 class=" text-gray-800 text-lg font-[Raleway] font-[700]">
          Available Vaccines
        </h2>
      </header>
      <div class="p-3">
        <div class="overflow-x-auto">
          <table class="table-auto w-full">
            <thead class="text-xs font-semibold text-gray-400 bg-gray-50">
              <tr>
                <th class="p-2 whitespace-nowrap">
                  <div class=" text-left text-base font-[Raleway] font-[600]">
                    Name of the Disease
                  </div>
                </th>
                <th class="p-2 whitespace-nowrap">
                  <div class=" text-left text-base font-[Raleway] font-[600]">
                    Age at first dose
                  </div>
                </th>
                <th class="p-2 whitespace-nowrap">
                  <div class="font-[Raleway] font-[600] text-left text-base">
                    Booster Dose
                  </div>
                </th>
                <th class="p-2 whitespace-nowrap">
                  <div class="font-[Raleway] font-[600] text-center text-base">
                    Subsequent Dose
                  </div>
                </th>
                <th class="p-2 whitespace-nowrap">
                  <div class="font-[Raleway] font-[600] text-center text-base">
                    Book Appointment
                  </div>
                </th>
              </tr>
            </thead>
            <tbody class="text-sm divide-y divide-gray-100">
              {#each vaccines as v}
                <tr class="">
                  <td class="p-2 py-7 whitespace-nowrap">
                    <div class="flex items-center">
                      <div
                        class=" text-base text-gray-800 font-[Raleway] font-[600]"
                      >
                        {v.name}
                      </div>
                    </div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-left text-base font-[Raleway] font-[600]">
                      {v.firstDoseAge}
                    </div>
                  </td>

                  <td class="p-2 whitespace-nowrap">
                    <div
                      class="text-base text-center font-[Raleway] font-[600]"
                    >
                      {v.boosterDose}
                    </div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div
                      class="text-base text-center font-[Raleway] font-[600]"
                    >
                      {v.subsequentDose}
                    </div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <button
                      class="text-base text-center text-white px-4 py-3 bg-blue-600 rounded-md font-[Raleway] font-[600]"
                      on:click|preventDefault={() => (showModel = true)}
                      >Book Vaccine</button
                    >
                  </td>
                </tr>
              {/each}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</section>
