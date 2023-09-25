<script>
  import { Link, navigate } from "svelte-routing";
  import { filterScholarships } from "../api/filter";
  import ManIcon from "../assets/mancropped2.png";
  import { scholarships, selected } from "../store";
  import { findGrade } from "../types";
  import DropDown from "../components/DropDown.svelte";
  import UserInput from "../components/UserInput.svelte";
  import LoadingIcon from "../assets/loading.svg";
  import Navbar from "../components/Navbar.svelte";
  import { countryList } from "../api/countryList";
  import Carousel from "../components/Carousel.svelte";

  let countries = countryList.map((c) => c.name);

  export let data = {
    name: null,
    marksPercentage: null,
    annualIncome: null,
    parentOccupation: null,
    state: "Tamil Nadu",
    community: null,
    Nationality: "India",
    maximumFamilySiblings: null,
    isSpecialCategory: null,
    ageGrp: null,
    isFromMinorCommunity: null,
    yearOfStudy: null,
    isGirl: null,
    grade: null,
    isGovtSch: null,
  };

  let isError = false;
  let errorMsg;
  let isLoading = false;

  $: data.grade;

  const handleSubmit = async () => {
    isLoading = true;

    data = {
      ...data,
      ["ageGrp"]: parseInt(data.ageGrp),
      ["annualIncome"]: parseInt(data.annualIncome),
      ["marksPercentage"]: parseFloat(data.marksPercentage),
      ["maximumFamilySiblings"]: parseInt(data.maximumFamilySiblings),
    };
    let tempGrade = data.grade;
    delete data["grade"];

    if (data.isGirl === "FEMALE") {
      data = { ...data, ["isGirl"]: true };
    } else if (data.isGirl === "MALE") {
      data = { ...data, ["isGirl"]: false };
    }
    console.log(data.isSpecialCategory);

    if (data.isSpecialCategory === "YES") {
      data = { ...data, ["isSpecialCategory"]: true };
    } else if (data.isSpecialCategory === "NO") {
      data = { ...data, ["isSpecialCategory"]: false };
    }

    if (data.isGovtSch === "YES") {
      data = { ...data, ["isGovtSch"]: true };
    } else if (data.isGovtSch === "NO") {
      data = { ...data, ["isGovtSch"]: false };
    }

    if (data.isFromMinorCommunity === "YES") {
      data = { ...data, ["isFromMinorCommunity"]: false };
    } else if (data.isFromMinorCommunity === "NO") {
      data = { ...data, ["isFromMinorCommunity"]: true };
    }

    data = JSON.parse(JSON.stringify(data), (key, value) =>
      value === null ? undefined : value
    );

    let grade = findGrade(tempGrade);
    console.log(grade, data);

    const resp = await filterScholarships(grade, data);
    let respJson = await resp.json();
    console.log(respJson);
    if (resp.status === 400) {
      isError = true;
      errorMsg = respJson.error;
      isLoading = false;
    } else {
      scholarships.set(respJson.data);
      localStorage.setItem("scholarships", JSON.stringify(respJson));
      console.log(resp);
      isError = false;
      errorMsg = "";
      isLoading = false;
      navigate("/showscholarships");
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
    Please provide your details to check the availability of Scholarships
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
      <div class="age">
        <h3 class="px-3.5 mb-2">Enter your age</h3>
        <UserInput placeholder="Age" type="text" field="ageGrp" {data} />
      </div>
      <div class="gender">
        Select your gender
        <DropDown options={["MALE", "FEMALE", "OTHER"]} field="isGirl" {data} />
      </div>
      <div class="education">
        Current Educational Qualification
        <DropDown
          options={[
            "less than or equal to 10th ",
            "11th",
            "12th",
            "UG",
            "PG",
            "Diploma",
          ]}
          field="grade"
          {data}
        />
      </div>

      <div class="annual-income">
        <h3 class="px-3.5 mb-2">Enter your family annual income</h3>
        <UserInput
          placeholder="Enter family annual Income"
          type="number"
          field="annualIncome"
          {data}
        />
      </div>
      <div class="occupation">
        Select Parent occupation
        <DropDown
          {data}
          field={"parentOccupation"}
          options={["Driver", "Armed Force", "OTHER"]}
        />
        <!-- <UserInput
          placeholder="Enter father occupation"
          type="text"
          field="parentOccupation"
          {data}
          />
           -->
      </div>
      <div class="state">
        <h3 class="px-3.5 mb-2">Enter your state:</h3>

        <input
          disabled
          value="Tamil Nadu"
          id="email-address-icon"
          class="bg-gray-100 text-gray-400 text-sm rounded-full block w-full pl-5 p-3.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
        />
        <p class="px-3.5">*currently only for Tamil Nadu</p>
        <!-- <DropDown {data} field="state" options={districtList} /> -->
      </div>

      <div class="marks-percentage">
        <h3 class="px-3.5 mb-2">Enter your 12th mark percentage:</h3>
        <UserInput
          placeholder="Enter your mark percentage"
          type="number"
          field="marksPercentage"
          {data}
        />
      </div>
      {#if $selected["grade"] === "UG" || $selected["grade"] === "PG"}
        <div class="minor-community px-3.5">
          Are you Hindu?
          <DropDown
            options={["YES", "NO"]}
            field="isFromMinorCommunity"
            {data}
          />
        </div>

        <div class="yearofstudy">
          <h3 class="px-3.5">Enter the year of study</h3>
          <DropDown options={[1, 2, 3, 4]} field="yearOfStudy" {data} />
        </div>
      {/if}
      <div class="special-category">
        <h3 class="px-3.5">
          Are you from special category? (Differently-abled student/transgender
          student/student with single parent/student who lost their parents due
          to COVID.)
        </h3>
        <DropDown options={["YES", "NO"]} field="isSpecialCategory" {data} />
      </div>

      <div class="no-of-siblings">
        <h3 class="px-3.5 mb-2">Enter number of siblings</h3>
        <UserInput
          placeholder="Enter number of siblings"
          type="number"
          field="maximumFamilySiblings"
          {data}
        />
      </div>

      <!-- <div class="country">
        <h3 class="px-3.5">Enter your country:</h3> -->
      <!-- <select
          bind:value={data["Nationality"]}
          name="pets"
          id="pet-select"
          class="p-2.5 text-sm border-white bg-gray-100 rounded-lg w-[100%] mt-2"
        >
          <option value="Indian" class="text-black">Indian</option>
        </select> -->
      <!-- <input
          type="text"
          value="Indian"
          disabled
          class="bg-gray-100 text-gray-500 text-sm rounded-full block w-full pl-5 p-3.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white mb-2"
        />
        <span class="text-sm px-3.5">
          *Available only for Indian students as of now
        </span> -->
      <!-- <DropDown {data} field="Nationality" options={countries} /> -->
      <!-- <UserInput
            {data}
            field="Nationality"
            placeholder="Nationality"
            type="text"
            /> -->
      <!-- </div> -->
      {#if $selected["grade"] === "UG" || $selected["grade"] === "PG"}
        <div class="country px-3.5">
          <h3 class="">Are you government quota student?:</h3>
          <DropDown {data} field="isGovtSch" options={["YES", "NO"]} />
        </div>
      {/if}
      <button class="bg-blue-600 rounded-full p-2 text-white mt-10">
        {#if isLoading}
          <img src={LoadingIcon} alt="loading" class="svg" />
        {:else}
          Submit
        {/if}
      </button>
      <Link to="/exams" class="w-full">
        <button class="bg-blue-600 rounded-full p-2 text-white w-full"
          >Find scholarships exams</button
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
