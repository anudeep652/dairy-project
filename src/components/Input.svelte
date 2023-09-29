<script lang="ts">
  import LockIcon from "../assets/Lock.svelte";
  export let placeholder;
  import UserIcon from "../assets/user.svelte";
  import EyeIcon from "../assets/Eye.svelte";
  import EyeOpen from "../assets/EyeNoStrike.svelte";
  import { onMount } from "svelte";
  import EmailIcon from "../assets/Email.svelte";

  export let icon;
  export let data;

  let isEmail = icon === "email";
  let isPassword = icon === "password" || icon === "confirmPassword";
  let isUsername = icon === "username";
  let isnum = icon === "phone" || icon === "pincode";
  let showPassword = false;

  const togglePasswordType = () => {
    showPassword = !showPassword;
    ref.type = showPassword
      ? isEmail
        ? "email"
        : isnum
        ? "num"
        : "text"
      : "password";
  };

  let ref: HTMLInputElement;

  onMount(() => {
    ref.type = icon === "confirmPassword" ? "password" : icon;
  });
</script>

<div class="relative">
  <input
    name={icon}
    bind:this={ref}
    bind:value={data[icon]}
    id="email-address-icon"
    class="bg-gray-100 text-gray-900 text-sm rounded-full block w-full p-3.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white font-[Raleway] font-[600]"
    {placeholder}
  />

  <div class="absolute inset-y-0 right-0 flex items-center pr-3.5 eye">
    {#if isPassword}
      {#if showPassword}
        <EyeOpen toggleFn={togglePasswordType} />
      {:else}
        <EyeIcon toggleFn={togglePasswordType} />
      {/if}
    {/if}
  </div>
</div>

<style>
</style>
