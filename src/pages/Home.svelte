<script>
  import { Link } from "svelte-routing";
  import Navbar from "../components/Navbar.svelte";
  import logo from "../assets/logo.png";
  import examImg from "../assets/scholarshipexamimg.jpeg";
  import scholarshipImg from "../assets/scholarshipimg.jpeg";
  import BugerWithNav from "../components/BugerWithNav.svelte";
  import TextCarousel from "../components/TextCarousel.svelte";
  let paragraphs = [
    `1. Scholarship Search: Easily search and filter through a diverse range of
      scholarships based on your field of interest, academic achievements, and
      more.`,
    `2. Personalized Recommendations: Our intelligent algorithm provides you
      with personalized scholarship recommendations tailored to your profile,
      ensuring you never miss out on an opportunity.`,
    `3. Scholarship Details: Get comprehensive information about each
      scholarship, including eligibility criteria, application requirements, and
      award details.`,
    `4. Notifications: Receive timely updates about new scholarships,
      approaching deadlines, and important application milestones.`,
    `5. User-Friendly Interface: Our app is designed with a user-friendly
      interface, making it intuitive and easy to navigate, ensuring a seamless
      experience.`,
    `Don't miss out on your chance to pursue your dreams without financial constraints.
    Join our Scholarship App community today and unlock a world of educational possibilities!!`,
  ];

  // history.back()
</script>

<main class="p-5">
  <BugerWithNav />
  <!-- <div class="img-wrapper flex justify-center">
    <img src={logo} alt="logo" class=" w-[180px] h-[80px]" />
  </div> -->
  <h1 class="font-semibold text-[1.4rem] mt-5 text-center">
    Welcome to SCHOLRCONNECT!
  </h1>
  <p class="mt-2 text-[.95rem] text-center">
    The place to find the right scholarship for you!
  </p>
  <TextCarousel />

  <div class="path mt-10 flex flex-col gap-[5rem] pb-10">
    <div class="exam rounded-lg shadow-lg dark:bg-[#2F2525]">
      <img src={examImg} alt="" class="rounded-lg pb-5" />
      <p
        class="pl-3 pr-2 text-left text-[.97rem]
      "
      >
        Our app is designed to connect students with exciting opportunities for
        educational advancement. Whether you're pursuing higher education or
        looking to enhance your skills, our platform is here to help you to find
        scholarship exams that align with your goals.
      </p>
      <div class="button-wrapper p-8">
        <Link to="/exams">
          <button
            class="bg-blue-600 text-white text-center p-3 rounded-full w-full"
            >Find Scholarship Exams</button
          >
        </Link>
      </div>
    </div>

    <div class="scholarship rounded-lg shadow-lg dark:bg-[#2F2525]">
      <img src={scholarshipImg} alt="" class="rounded-lg pb-5" />
      <p
        class="pl-3 pr-2 text-left text-[1rem]
      "
      >
        Our app is designed to connect students with exciting opportunities for
        educational advancement. Whether you're pursuing higher education or
        looking to enhance your skills, our platform is here to help you to find
        scholarship exams that align with your goals.
      </p>
      <div class="button-wrapper p-8">
        <Link to="/find">
          <button
            class="bg-blue-600 text-white text-center p-3 rounded-full w-full"
            >Find Scholarships</button
          >
        </Link>
      </div>
    </div>
  </div>

  <!-- 
  <div class="about mt-3">
    About the App: Our Scholarship App is designed to connect students with
    exciting opportunities for educational advancement. Whether you're pursuing
    higher education or looking to enhance your skills, our platform is here to
    help you discover and apply for scholarships that align with your goals.
  </div>
  <div class="features mt-5">
    <span class="font-semibold text-lg"> Features of the App: </span>
    {#each paragraphs as p}
      <p class="py-3">{p}</p>
    {/each}
  </div>

  <div class="buttons flex justify-between">
    <Link to="/find" class="order-1">
      <button class="bg-blue-500 text-white p-3 rounded-full my-5"
        >Find Scholarship</button
      >
    </Link>
    <Link class="order-0" to="/exam">
      <button class="bg-blue-500 text-white p-3 rounded-full my-5"
        >Find Scholarship Exams</button
      >
    </Link>
  </div> -->
</main>
