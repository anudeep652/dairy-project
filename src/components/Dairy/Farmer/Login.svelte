<script>
  import { Link, navigate } from "svelte-routing";
  import { loginFarmer } from "../../../api/auth";
  import Input from "../../Input.svelte";
  import loading from "../../../assets/loading.svg";

  let data = {
    email: "",
    password: "",
  };
  let isError = false;
  let errorMsg = "";
  let isLoading = false;

  const handleSubmit = async () => {
    isLoading = true;
    const resp = await loginFarmer(data.email, data.password);
    let respJson = await resp.json();
    if (resp.status === 400) {
      isError = true;
      errorMsg = respJson.message;
      isLoading = false;
    } else {
      console.log(respJson);
      localStorage.setItem("user", JSON.stringify(respJson));
      console.log(resp);
      isError = false;
      errorMsg = "";
      isLoading = false;
      navigate("/home");
    }
  };
</script>

<main class="flex justify-center h-[100%]">
  <h2 class="text-center text-xl">Login</h2>
  <div class="form-wrapper">
    <form on:submit|preventDefault={handleSubmit}>
      <Input placeholder="Email" icon="email" {data} />
      <Input placeholder="Password" icon="password" {data} />
      {#if isError}
        <span class="text-sm text-red-600">{errorMsg}</span>
      {/if}

      <div class="forgot-p flex justify-between">
        <div class="remember flex">
          <input
            type="checkbox"
            class=" checkbox inline-flex h-3.4 rounded-sm"
          />
        </div>
        <!-- <h2 class="text-blue-600 text-sm cursor-pointer">Forgot Password</h2> -->
      </div>

      <button
        class="text-white login-btn rounded-full text-lg p-1.5 text-[Raleway]"
      >
        {#if isLoading}
          <img src={loading} alt="loading" class="svg" />
        {:else}
          Login
        {/if}
      </button>
    </form>
  </div>
  <Link to="/signup" class="text-center">
    <button class="text-[Raleway] text-sm text-center mt-5 text-blue-700">
      Dont Have an Account? Sign Up
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
    display: flex;
    flex-direction: column;
    gap: 1rem;
    /* justify-content: center; */
    /* align-items: center; */
  }
  .login-btn {
    background-color: rgb(20, 127, 221);
  }
  .form-wrapper {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    /* position: sticky/; */
  }
  form {
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-top: 2rem;
  }
  .top-wrapper {
    /* position: relative; */
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

  input:focus,
  input.form-control:focus {
    outline: none !important;
    outline-width: 0 !important;
    box-shadow: none;
    -moz-box-shadow: none;
    -webkit-box-shadow: none;
  }
</style>
