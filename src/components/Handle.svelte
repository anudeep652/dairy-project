<script lang="ts">
  import { onMount } from "svelte";
  import { navigate } from "svelte-routing";
  import { user } from "../store";
  import Sidebar from "./Sidebar.svelte";

  onMount(() => {
    let data = localStorage.getItem("user") ?? "{}";
    console.log(data);
    if (data == "{}") {
      navigate("/login");
    } else {
      user.set(JSON.parse(data));
    }
  });
</script>

<div>
  <Sidebar />

  Hello {$user.name}
</div>
