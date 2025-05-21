<script>
  // @ts-nocheck

  import { scale } from "svelte/transition";
  let { title, selected, onSelect } = $props();
  let isMouseOver = $state(false);
</script>

<div onclick={e => onSelect(title)} onmouseenter={isMouseOver = true} onmouseleave={isMouseOver = false}>
  <div class="navigation-item {selected ? 'selected' : ''}">
    <div>
      {title}
    </div>

    {#if selected || isMouseOver}
      <hr transition:scale class="decoration" />
    {/if}
  </div>
</div>

<style>
  .navigation-item {
    position: relative;
    display: flex-column;
    justify-content: center;
    font-weight: 500;
    transition: all 1s;
    color: gray;
    height: 50px;
    cursor: pointer;
  }
  .selected {
    font-weight: 600;
    color: white;
    cursor: pointer;
  }
  .navigation-item:hover {
    font-weight: 600;
    color: white;
    cursor: pointer;
  }

  .decoration {
    position: absolute;
    width: 50%;
    height: 4px;
    border: none;
    background-color: white;
    transition: all 1s;
    border-radius: 10px;
    left: 50%;
    bottom: 0px;
    transform: translate(-50%, 0);
  }
</style>
