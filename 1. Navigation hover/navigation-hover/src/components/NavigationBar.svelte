<script>
  import NavigationMenuItem from "./NavigationMenuItem.svelte";

  let menuItems = $state(["Animation", "Branding", "Illustration"]);
  let selectedIndex = $state(null);
</script>

<div class="navigation-bar">
  {#each menuItems as item, index}
    <NavigationMenuItem
      title={item}
      selected={selectedIndex == index}
      onSelect={(title) => {
        selectedIndex = menuItems.indexOf(title);
      }}
    />
  {/each}
</div>

<style>
  .navigation-bar {
    display: flex;
    gap: 20px;
  }
</style>
