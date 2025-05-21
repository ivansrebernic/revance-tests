<script>
  let { selected, label, onclick } = $props();
</script>

<button {onclick} class={["lang-selector", { selected }]}>
  <span>{label}</span>
</button>

<style>
  button {
    width: 100%;
    background-color: transparent;
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
  .lang-selector.selected {
    font-weight: 800;
  }
  .lang-selector {
    color: black;
    text-decoration: none;
    display: inline-flex;
    justify-content: end;
    text-align: end;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.25s;
  }
  .lang-selector:hover {
    color: white;
  }
</style>
