<script>
  import c3 from "../assets/carousel images/c3.jpeg";
  import c4 from "../assets/carousel images/c4.jpeg";
  import c5 from "../assets/carousel images/c5.jpeg";
  import c6 from "../assets/carousel images/c6.jpeg";
  import c7 from "../assets/carousel images/c7.jpeg";
  import c8 from "../assets/carousel images/c8.jpeg";
  import c9 from "../assets/carousel images/c9.jpeg";
  import c10 from "../assets/carousel images/c10.jpeg";
  let images = [c3, c4, c5, c6, c7, c8, c9, c10];
</script>

<div class="slider">
  <div class="slide-track">
    {#each images as img}
      <div class="slide flex justify-center object-cover">
        <!-- <p>{img}</p> -->
        <img src={img} height="200" width="250" alt="img" />
      </div>
    {/each}
  </div>
</div>

<style>
</style>
