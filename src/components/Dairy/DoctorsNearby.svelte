<script lang="ts">
  import { onMount } from "svelte";
  import { getAllDoctors } from "../../api/auth";
  import BugerWithNav from "../BugerWithNav.svelte";

  let doctors: any[] = [];
  onMount(async () => {
    const resp = await getAllDoctors();
    const respJson = await resp.json();
    doctors = respJson.data;
    console.log(respJson);
  });
</script>

<div class="m-5">
  <BugerWithNav />
</div>
<main>
  <section class="antialiased bg-gray-100 text-gray-600 h-screen px-4">
    <div class="flex flex-col h-full my-10">
      <!-- Table -->
      <div
        class="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200"
      >
        <header class="px-5 py-4 border-b border-gray-100">
          <h2 class="font-semibold text-gray-800 text-lg">Available Doctors</h2>
        </header>
        <div class="p-3">
          <div class="overflow-x-auto">
            <table class="table-auto w-full">
              <thead class="text-xs font-semibold text-gray-400 bg-gray-50">
                <tr>
                  <th class="p-2 whitespace-nowrap">
                    <div class="font-semibold text-left text-base">Name</div>
                  </th>
                  <th class="p-2 whitespace-nowrap">
                    <div class="font-semibold text-left text-base">
                      Profession
                    </div>
                  </th>
                  <th class="p-2 whitespace-nowrap">
                    <div class="font-semibold text-left text-base">
                      Phone number
                    </div>
                  </th>
                  <th class="p-2 whitespace-nowrap">
                    <div class="font-semibold text-center text-base">
                      Location
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody class="text-sm divide-y divide-gray-100">
                {#each doctors as doc}
                  <tr>
                    <td class="p-2 whitespace-nowrap">
                      <div class="flex items-center">
                        <div
                          class="text-base text-gray-800 font-[Raleway] font-[600]"
                        >
                          {doc.name}
                        </div>
                      </div>
                    </td>
                    <td class="p-2 whitespace-nowrap">
                      <div
                        class="text-left text-base font-[Raleway] font-[600]"
                      >
                        {doc.profession}
                      </div>
                    </td>

                    <td class="p-2 whitespace-nowrap">
                      <div class="text-base text-center">
                        {doc.phone}
                      </div>
                    </td>
                    <td class="p-2 whitespace-nowrap">
                      <div
                        class="text-base text-center font-[Raleway] font-[600]"
                      >
                        {doc.city}
                      </div>
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
</main>
