<script>
    let { label } = $props()
</script>

<div class="shop-now-btn">SHOP NOW</div>

<style>
  .shop-now-btn {
    width: 75%;
    border: 1px black solid;
    padding: 16px;
    display: flex;
    justify-content: center;
    font-weight: 600;
    font-size: 13px;
    transition: all 0.25s ;
  }

  .shop-now-btn:hover{
    color: white;
    background-color: black;
    cursor: pointer;

  }
</style>
