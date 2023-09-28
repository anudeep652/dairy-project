<script lang="ts">
  import { Link, navigate } from "svelte-routing";
  import { registerFarmer } from "../../../api/auth";
  import Input from "../../Input.svelte";
  import DropDown from "../../DropDown.svelte";
  import loading from "../../../assets/loading.svg";
  let farmerData = {
    name: "",
    address: "",
    city: "",
    pincode: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  };

  let isLoading = false;
  let isError = false;
  let errorMsg = "";

  const handleSubmit = async () => {
    console.log(farmerData);
    isLoading = true;
    const resp = await registerFarmer(farmerData);
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
      <Input placeholder="Name" icon="name" data={farmerData} />
      <Input placeholder="Email" icon="email" data={farmerData} />
      <Input placeholder="Address" icon="address" data={farmerData} />
      <Input placeholder="City" icon="city" data={farmerData} />
      <Input placeholder="Pincode" icon="pincode" data={farmerData} />
      <Input placeholder="Phone number" icon="phone" data={farmerData} />
      <Input placeholder="Password" icon="password" data={farmerData} />
      <Input
        placeholder="Confirm Password"
        icon="confirmPassword"
        data={farmerData}
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
