<script lang="ts">
  import { Link, navigate } from "svelte-routing";
  import { registerDoctor, registerFarmer } from "../../../api/auth";
  import Input from "../../Input.svelte";
  import DropDown from "../../DropDown.svelte";
  import loading from "../../../assets/loading.svg";
  import ImageInput from "../ImageInput.svelte";
  import DropFileIcon from "../../../assets/DropFileIcon.svelte";

  import { Camera, CameraResultType } from "@capacitor/camera";
  let DoctorData = {
    name: "",
    address: "",
    city: "",
    pincode: "",
    email: "",
    phone: "",
    photo: "sample",
    doctorCertificate: "",
    aadhar: "",
    degree: "",
    profession: "",
    availabilityTime: "",
    noOfDaysAvailable: "",
    clinicAddress: "",
    clinicCity: "",
    clinicPincode: "",
    password: "",
    confirmPassword: "",
  };

  let isLoading = false;
  let isError = false;
  let errorMsg = "";
  // async function addImage(field: keyof typeof DoctorData) {
  //   const image = await Camera.getPhoto({
  //     quality: 90,
  //     width: screen.width * 1.5,
  //     height: screen.height * 1.5,
  //     saveToGallery: true,
  //     resultType: CameraResultType.DataUrl,
  //   });
  //   DoctorData[field] = image.dataUrl!;
  // }

  const handleSubmit = async () => {
    console.log(DoctorData);
    isLoading = true;
    const resp = await registerDoctor(DoctorData);
    let respJson = await resp.json();
    if (resp.status === 400) {
      isError = true;
      errorMsg = respJson.message;
      isLoading = false;
    } else {
      localStorage.setItem("user", JSON.stringify(respJson));
      console.log(resp);
      isError = false;
      errorMsg = "";
      isLoading = false;
      navigate("/home");
    }
  };
</script>

<main>
  <h3 class="text-[Raleway] text-[2rem] font-medium my-10">Sign Up</h3>
  <div class="form-wrapper">
    <form on:submit|preventDefault={handleSubmit}>
      <Input placeholder="Name" icon="name" data={DoctorData} />
      <Input placeholder="Email" icon="email" data={DoctorData} />
      <Input placeholder="Address" icon="address" data={DoctorData} />
      <Input placeholder="City" icon="city" data={DoctorData} />
      <Input placeholder="Pincode" icon="pincode" data={DoctorData} />
      <Input placeholder="Phone number" icon="phone" data={DoctorData} />

      <!-- {#if DoctorData.photo}
        <img src={DoctorData.photo} />
      {:else}
        <label
          for="dropzone-file"
          class="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div class="flex flex-col justify-center items-center pt-5 pb-6">
            <DropFileIcon />
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span class="font-semibold">Click to add photos</span>
            </p>
          </div>
          <input
            id="dropzone-file"
            type="button"
            class="hidden"
            on:click={async () => {
              const image = await Camera.getPhoto({
                quality: 90,
                width: screen.width * 1.5,
                height: screen.height * 1.5,
                saveToGallery: true,
                resultType: CameraResultType.DataUrl,
              });
              DoctorData["photo"] = image.dataUrl || "";
            }}
          />
        </label>
      {/if} -->
      {#if DoctorData.doctorCertificate}
        <img src={DoctorData.doctorCertificate} />
      {:else}
        <label
          for="dropzone-file"
          class="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div class="flex flex-col justify-center items-center pt-5 pb-6">
            <DropFileIcon />
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span class="font-semibold">Click to add photos</span>
            </p>
          </div>
          <input
            id="dropzone-file"
            type="button"
            class="hidden"
            on:click={async () => {
              const image = await Camera.getPhoto({
                quality: 90,
                width: screen.width * 1.5,
                height: screen.height * 1.5,
                saveToGallery: true,
                resultType: CameraResultType.DataUrl,
              });
              DoctorData["doctorCertificate"] = image.dataUrl || "this";
            }}
          />
        </label>
      {/if}
      {#if DoctorData.aadhar}
        <img src={DoctorData.aadhar} />
      {:else}
        <label
          for="dropzone-file"
          class="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div class="flex flex-col justify-center items-center pt-5 pb-6">
            <DropFileIcon />
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span class="font-semibold">Click to add photos</span>
            </p>
          </div>
          <input
            id="dropzone-file"
            type="button"
            class="hidden"
            on:click={async () => {
              const image = await Camera.getPhoto({
                quality: 90,
                width: screen.width * 1.5,
                height: screen.height * 1.5,
                saveToGallery: true,
                resultType: CameraResultType.DataUrl,
              });
              DoctorData["aadhar"] = image.dataUrl || "This2";
            }}
          />
        </label>
      {/if}

      <Input placeholder="profession" icon="profession" data={DoctorData} />
      <Input placeholder="Degree" icon="degree" data={DoctorData} />
      <Input
        placeholder="Availability Time"
        icon="availabilityTime"
        data={DoctorData}
      />
      <Input
        placeholder="Available days in week"
        icon="noOfDaysAvailable"
        data={DoctorData}
      />
      <Input
        placeholder="Clinic Address(if any)"
        icon="clinicAddress"
        data={DoctorData}
      />
      <Input
        placeholder="clinic City"
        icon="clinicCity(if any)"
        data={DoctorData}
      />
      <Input
        placeholder="Clinic Pincode"
        icon="clinicPincode(if any)"
        data={DoctorData}
      />

      <Input placeholder="Password" icon="password" data={DoctorData} />
      <Input
        placeholder="Confirm Password"
        icon="confirmPassword"
        data={DoctorData}
      />

      {#if isError}
        <span class="text-sm text-red-600">{errorMsg}</span>
      {/if}
      <button
        class="text-white login-btn rounded-full text-lg p-1.5 text-[Raleway]"
      >
        {#if isLoading}
          <img src={loading} alt="loading" class="svg" />
        {:else}
          Sign Up
        {/if}
      </button>
    </form>
  </div>
  <Link to="/login" class="text-center mb-5">
    <button class="text-[Raleway] text-sm text-center mt-5 text-blue-700">
      Already Have an Account? Login
    </button>
  </Link>
</main>

<style>
  .img-wrapper {
    margin-left: 5rem;
    position: absolute;
    z-index: 100;
    /* transform: translateX(-20%); */
  }
  .svg {
    margin-inline: auto;
    height: 28px;
  }
  main {
    text-align: center;
    display: flex;
    flex-direction: column;
  }

  h3 {
    /* transform: translateY(-100%); */
  }
  .login-btn {
    background-color: rgb(20, 127, 221);
  }
  .form-wrapper {
    /* margin-top: 2rem; */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  form {
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    /* margin-top: 2rem; */
  }
  /* height: 100vh; */
  /* position: relative; */
  .top-wrapper {
    /* min-height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgb(20, 127, 221);
    border-radius: 4rem;
    transform: translateY(-35%);
    height: 45vh; */
    min-height: 380px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* height: 100vh; */
    background-color: rgb(20, 127, 221);
    border-radius: 4rem;
    transform: translateY(-6%);
    height: 45vh;
  }

  img.man {
    transform: translateY(5%);
    /* position: absolute; */
    /* display: none; */
  }

  h1 {
    font-family: "Raleway";
    margin-top: 11rem;
    color: white;
    font-size: 1.9rem;
    font-weight: bolder;
  }
</style>
