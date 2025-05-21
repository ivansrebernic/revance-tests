<script>
  let { label } = $props();
</script>

<a class="sn-button">
  {label}
</a>

<style>
  .sn-button {
    text-decoration: none;
    color: white;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.25s;
  }
  .sn-button:hover {
    font-weight: 800;
  }
</style>
