<script lang="ts">
  import { onMount } from "svelte";
  import { getAllLive } from "../api/filter";
  import { data } from "../assets/liveschdata.json";

  // let data: any[] = [];

  let currentIndex = 0;
  let interval;

  const nextMessage = () => {
    currentIndex = (currentIndex + 1) % data.length;
  };

  const initInterval = async () => {
    // data = JSON.parse(localStorage.getItem("live"));
    // if (!data) {
    //   let respJson = await getAllLive();
    //   let resp = await respJson.json();
    //   console.log(resp);
    //   localStorage.setItem("live", JSON.stringify(resp.data));
    // data = resp.data;
    // }
    console.log(data);
    interval = setInterval(nextMessage, 3000);
  };

  onMount(initInterval);
</script>

<main class="mt-5">
  <span
    class="font-bold"
    style="font-size:1rem;font-family:serif;color:darkblue;"
  >
    Available live scholarships:
  </span>
  <div class="carousel flex justify-center items-center">
    <div
      class="message-container"
      style={`animation-duration:${data.length * 3}s`}
    >
      {#each data as d, i (d)}
        <a
          href={d.link}
          target="_blank"
          class="message text-[#007bff] underline"
          style=""
        >
          {d.name}
        </a>
      {/each}
    </div>
  </div>
</main>

<style>
  a:hover {
    text-decoration: underline;
  }
  .carousel {
    box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.125);
    position: relative;
    width: 300px;
    height: 50px;
    overflow: hidden;
  }

  .message-container {
    display: flex;
    animation: slide linear infinite;
  }

  .message {
    flex-shrink: 0;
    padding: 0 20px;
  }

  @keyframes slide {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }
</style>
