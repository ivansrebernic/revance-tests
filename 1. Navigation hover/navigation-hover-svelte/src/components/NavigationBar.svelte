<script>
  import NavigationMenuItem from "./NavigationMenuItem.svelte";

  let menuItems = $state(["Animation", "Branding", "Illustration"]);
  let selectedIndex = $state(null);
</script>

<div class="flex gap-x-[20px]">
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

</style>
