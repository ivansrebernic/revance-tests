<script>
  // @ts-nocheck

  import { scale } from "svelte/transition";
  let { title, selected, onSelect } = $props();
  let isMouseOver = $state(false);
</script>

<a  onclick={e => onSelect(title)} onmouseenter={isMouseOver = true} onmouseleave={isMouseOver = false}>
  <div class="relative flex flex-col text-gray-300 justify-center weight-500 transition-all h-[50px] cursor-pointer hover:text-white {selected ? 'text-white' : ''}">
    <div>
      {title}
    </div>

    {#if selected }
      <hr transition:scale class="w-[50%] absolute h-[4px] border-0 bg-white transition-all rounded-2xl left-[50%] bottom-0 translate-x-[-50%]" />
    {/if}
  </div>
</a>

<style>
 
</style>
