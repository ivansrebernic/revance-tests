<script>
  let { index, quantity } = $props();
</script>

<div class="carousel-indicator">
  {#each { length: quantity }, item}
    <div class=" {item == index ? ' highlight' : 'dot'} "></div>
  {/each}
</div>

<style>
  .carousel-indicator {
    padding-right: 24px;
    display: flex;
    justify-content: end;
    align-items: center;
    width: 100%;
    gap: 80px;
  }
  .highlight {
    border-radius: 100%;
    background-color: white;
    height: 10px;
    width: 10px;
  }
  .dot {
    transition: all 0.25s;
    height: 8px;
    width: 8px;
    background-color: lightgray;
    border-radius: 100%;
  }
</style>
