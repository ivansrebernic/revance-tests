<script>
  import menu from "../assets/menu.svg";
</script>

<div class="menu-btn">
  <img class="menu-icon" alt="menu" src={menu} />
  <span> Menu </span>
</div>

<style>
  .menu-btn {
    color: white;
    display: flex;
    align-items: top;
    gap: 24px;
    width: 100px;
    padding-top: 8px;
    padding-bottom: 8px;
    padding-right: 4px;
    transition: all 0.25s;
    border-radius: 8px;
    cursor: pointer;
  }
  .menu-btn img {
    width: 24px;
    height: 24px;
    padding-left: 8px;
    filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(114deg)
      brightness(108%) contrast(113%);
  }

  .menu-btn:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
</style>
