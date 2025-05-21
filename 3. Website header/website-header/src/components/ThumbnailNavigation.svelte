<script>
  import { scale } from "svelte/transition";
  let { onNext, onPrevious } = $props();

  let hoverPrev = $state(false);
  let hoverNext = $state(false);
</script>

<div class="navigation">
  <button
    class="navigation-btn"
    onclick={onNext}
    onmouseenter={(e) => (hoverNext = true)}
    onmouseleave={(e) => (hoverNext = false)}
    ><span> Next</span>
    {#if hoverNext}
      <hr transition:scale class="btn-underline" />
    {/if}
  </button>
  <hr />
  <button
    class="navigation-btn"
    onclick={onPrevious}
    onmouseenter={(e) => (hoverPrev = true)}
    onmouseleave={(e) => (hoverPrev = false)}
  >
    <span > Previous </span>
    {#if hoverPrev}
      <hr transition:scale class="btn-underline" />
    {/if}
  </button>
</div>

<style>
  button {
    background-color: transparent;
    width: auto;
    border: none;
    margin: 0;
    padding: 0;
    text-align: inherit;
    font: inherit;
    border-radius: 0;
    appearance: none;
    outline-color: transparent;
    border-color: transparent;
    outline: 0;
  }

  .btn-underline {
    position: absolute;
    transform: translate(0, -8px);
  }
  .navigation-btn {
    position: relative;
    transition: all 0.25s;
  }
  .navigation-btn:hover {
    font-weight: 600;
  }

  .navigation {
    height: 100%;
    width: 100%;
    padding-right: 8px;
    display: flex;
    gap: 24px;
    color: white;
    align-items: center;
  }
  .navigation hr {
    width: 100%;
    height: 1px;
    background-color: white;
    border: none;
    color: white;
  }
</style>
