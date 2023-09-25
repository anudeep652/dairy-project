<script lang="ts">
  import { Link, navigate } from "svelte-routing";
  import { filterExams, filterScholarships } from "../api/filter";
  import ManIcon from "../assets/mancropped2.png";
  import { scholarships, scholarshipsExams, selected } from "../store";
  import { findGrade } from "../types";
  import DropDown from "../components/DropDown.svelte";
  import UserInput from "../components/UserInput.svelte";
  import LoadingIcon from "../assets/loading.svg";
  import Navbar from "../components/Navbar.svelte";
  import { countryList } from "../api/countryList";
  import { districtList } from "../api/districts";
  import Carousel from "../components/Carousel.svelte";

  let countries = countryList.map((c) => c.name);

  let data = {
    name: null,
    class: null,
    mark: null,
    income: null,
    community: null,
    isGovt: null,
  } as const;

  let education = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    "UG",
    "PG",
    "Diploma",
  ];
  let community = ["OC", "BC", "SC", "ST", "MBC"];

  let isError = false;
  let errorMsg;
  let isLoading = false;

  const handleSubmit = async () => {
    isLoading = true;

    data = {
      ...data,
      ["income"]: parseInt(data.income),
      ["mark"]: parseFloat(data.mark),
    };

    if (data.isGovt === "YES") {
      data = { ...data, ["isGovt"]: true };
    } else if (data.isGovt === "NO") {
      data = { ...data, ["isGovt"]: false };
    }

    switch (data.class) {
      case "UG":
        data = { ...data, ["class"]: 13 };
        break;
      case "PG":
        data = { ...data, ["class"]: 14 };
        break;
      case "Diploma":
        data = { ...data, ["class"]: 15 };
        break;
      default:
        break;
    }

    data = JSON.parse(JSON.stringify(data), (key, value) =>
      value === null ? undefined : value
    );

    console.log(data);

    const resp = await filterExams(data);
    let respJson = await resp.json();
    console.log(respJson);
    if (resp.status === 400) {
      isError = true;
      errorMsg = respJson.error;
      isLoading = false;
    } else {
      scholarshipsExams.set(respJson.data);
      localStorage.setItem("exams", JSON.stringify(respJson));
      console.log(resp);
      isError = false;
      errorMsg = "";
      isLoading = false;
      navigate("/showexams");
    }
  };
</script>

<main>
  <!-- <div class="bg-blue-600 img-wrapper py-20 px-0"> -->
  <Navbar />
  <!-- <img src={ManIcon} alt="man" /> -->
  <!-- </div> -->

  <div class="carousel my-7">
    <Carousel />
  </div>
  <h2 class="font-[Raleway] text-lg p-5 font-semibold">
    Please provide your details to check the availability of Scholarships exams
  </h2>
  <div class="form-wrapper mt-3 flex justify-center mb-20">
    <form
      class="w-[90%] flex gap-10 flex-col"
      on:submit|preventDefault={handleSubmit}
    >
      <div class="name">
        <h3 class="px-3.5 mb-2">Enter your name:</h3>
        <UserInput placeholder="Name" type="text" field="name" {data} />
      </div>

      <div class="education">
        Current Educational Qualification
        <DropDown options={education} field="class" {data} />
      </div>
      <div class="community">
        Select your community
        <DropDown options={community} field="community" {data} />
      </div>
      <div class="annual-income">
        <h3 class="px-3.5 mb-2">Enter your family annual income</h3>
        <UserInput
          placeholder="Enter family annual Income"
          type="number"
          field="income"
          {data}
        />
      </div>
      <div class="annual-income">
        <h3 class="px-3.5 mb-2">
          Enter your total mark percentage in previous class
        </h3>
        <UserInput
          placeholder="Enter your total mark percentage"
          type="number"
          field="mark"
          {data}
        />
      </div>

      <div class="isGovt">
        Are you government school student?
        <DropDown options={["YES", "NO"]} field="isGovt" {data} />
      </div>
      <!-- {#if $selected["grade"] === "UG" || $selected["grade"] === "PG"}
        <div class="country px-3.5">
          <h3 class="">Are you government quota student?:</h3>
          <DropDown {data} field="isGovtSch" options={["YES", "NO"]} />
        </div>
      {/if} -->
      <button class="bg-blue-600 rounded-full p-2 text-white mt-10">
        {#if isLoading}
          <img src={LoadingIcon} alt="loading" class="svg" />
        {:else}
          Submit
        {/if}
      </button>
      <Link to="/find" class="ml-auto w-full">
        <button class="bg-blue-600 w-full rounded-full p-2 text-white"
          >Find scholarships</button
        >
      </Link>
    </form>
  </div>
</main>

<style>
  main {
    /* transform: translateY(-5%); */
  }
  .svg {
    margin-inline: auto;
    height: 24px;
  }
  img {
    /* transform: translateY(10%); */
  }
  .img-wrapper {
    /* display: flex; */
    background: url("../assets//mancropped2.png");
    /* justify-content: end; */
    /* align-items: flex-end; */
    /* border-radius: 5rem; */
    transform: translateY(-15%);
  }
</style>
