<script lang="ts">
  import Logo from "../assets/Logo.svelte";
  import Cross from "../assets/Cross.svelte";
  import man from "../assets/man standing cropped.png";
  import { Link, navigate } from "svelte-routing";
  let contents = [
    { text: "Home", to: "/home" },
    { text: "About Us", to: "/about" },
    { text: "Services", to: "/services" },
    { text: "Contact", to: "/contact" },
  ];

  let ref: HTMLElement;
  const handleBurger = () => {
    ref.classList.toggle("hidden");
  };

  let user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };
</script>

<div class="text-black nav mb-5">
  <img src={man} alt="man" class="absolute bg-bl-600 z-10 mt-[3rem]" />
  <nav
    class="relative px-4 py-4 flex justify-between items-center bg-blue-600 pb-[17rem] top"
  >
    <div class="lg:hidden">
      <button
        class="navbar-burger flex items-center text-black p-3 cursor-pointer z-20"
        on:click|preventDefault={handleBurger}
      >
        <svg
          class="block h-4 w-4 fill-current"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Mobile menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
      <!-- </button> -->
    </div>
  </nav>
  <div class="navbar-menu relative z-50 hidden" bind:this={ref}>
    <div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" />
    <nav
      class="side fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto nav-inside"
    >
      <div class="flex items-center">
        <div
          class="rounded-[50%] flex justify-center items-center bg-blue-500 text-white mr-5 px-2 py-2 w-[40px] h-[40px]"
        >
          {user.username[0].toUpperCase()}
        </div>
        <a
          class="mr-auto text-lg font-semibold leading-none mt-5 flex flex-col"
          href="#"
        >
          {user.username}
          <span class="text-gray-300 text-sm mt-1">{user.email}</span>
        </a>
        <button class="navbar-close" on:click|preventDefault={handleBurger}>
          <Cross />
        </button>
      </div>
      <div>
        <ul class="mt-10">
          {#each contents as cont}
            <li class="mb-1">
              <Link
                class="block p-4 text-base font-[Raleway] font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                to={cont.to}
                >{cont.text}
              </Link>
            </li>{/each}
        </ul>
      </div>
      <button
        class="mt-auto bg-blue-600 p-2 rounded-full text-white"
        on:click={logout}>Logout</button
      >
    </nav>
  </div>
</div>

<style>
  img {
    transform: translateY(-3%);
  }
  .nav-inside {
    transform: translateY(-2%);
    border-radius: 0 m !important;
  }
  .navbar-burger {
    transform: translateY(50%);
  }
  /* .nav {
    z-index: 10;
  } */
  nav.top {
    transform: translateY(-8%);
    border-radius: 3rem;
    /* background: url("../assets/mancropped2.png"); */
    /* transform: translateY(-250%); */
    /* z-index: 10; */
  }
  .navbar-menu {
    animation: fadeIn 0.5s;
  }

  nav.side {
    border-bottom-left-radius: 3rem;
    border-bottom-right-radius: 3rem;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
</style>
