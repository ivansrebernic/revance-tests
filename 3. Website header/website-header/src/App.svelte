<script>
  import Sidebar from "./components/Sidebar.svelte";

  import Thumbnail from "./components/Thumbnail.svelte";
</script>

<div class="container">
  <Thumbnail />
  <Sidebar />
</div>

<style>
  .container {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    height: auto;
  }

  @media (min-width: 1240px) {
    .container {
      width: 100vw;
      height: 100vh;
      display: grid;
      grid-template-columns: 65% 35%;
    }
  }
</style>
