<script>
  import svelteLogo from './assets/svelte.svg'
  import viteLogo from '/vite.svg'
  import Counter from './lib/Counter.svelte'
  import NavigationBar from './components/NavigationBar.svelte';
</script>

<main class="container ">

  <NavigationBar/>
  <div class="blue-gradient"></div>
</main>

<style>
.container {
  
}
.blue-gradient {
  position: absolute;
  left: 50%;
  transform: translate(-50%, 60%);
  height: 300px;
  width: 1000px;
  border-radius: 100%;
  background-color: blue;
  filter: blur(150px);
}

</style>
