<script>
  import Image1 from "../../src/assets/image1.jpeg";
  import Image2 from "../../src/assets/image2.jpeg";
  import Button from "./Button.svelte";
  import LanguageSelector from "./LanguageSelector.svelte";

  let lang = $state("ENG");
</script>

<div class="parent">
  <div class="div1">
    <LanguageSelector
      onclick={() => lang = "FR"}
      selected={lang === "FR"}
      label="FR"
    />
  </div>
  <div class="div2">
    <LanguageSelector
      onclick={() => lang = "ENG"}
      selected={lang === "ENG"}
      label="ENG"
    />
  </div>
  <div class="div13">
    <div class="upside-down-text">
      <span>Ref. 6687/787</span>
      <div style="display: flex-column;">
        <hr class="horizontal-divider" />
      </div>
      <span>White loose dress</span>
    </div>
  </div>
  <div class="div14">
    <Button label="SHOP NOW"></Button>
  </div>
  <div class="div15">
    <div class="img-wrapper">
      <img class="img-1" src={Image1} alt="model 1" />
    </div>
  </div>
  <div class="div16">
    <div class="img-wrapper">
      <img class="img-2" src={Image2} alt="model 2" />
    </div>
  </div>
</div>

<style>
  .upside-down-text {
    display: flex;
    gap: 42px;
    white-space: nowrap;
    font-size: 14px;
    justify-content: start;
    align-items: center;
    transform: rotate(90deg) translate(400%, -40%);
  }

  .horizontal-divider {
    width: 100px;
    height: 1px;
    border: none;
    background-color: black;
  }

  .img-wrapper {
    height: 100%;
    display: flex;
    justify-content: center;
  }

  .img-2 {
    object-fit: cover;
    width: 100%;
  }
  .img-1 {
    object-fit: cover;
    width: 100%;
  }

  .parent {
    overflow: hidden;
    box-sizing: border-box;
    padding: 3rem;
    color: black;
    display: grid;
    grid-template-columns:
      auto minmax(70px, 140px) 50px 30px minmax(60px, 120px)
      40px;
    grid-template-rows: auto minmax(25px, 75px) 120px 170px 40px 200px;
    gap: 42px;
  }

  .div1 {
    grid-column: 6;
  }

  .div2 {
    grid-column: 5;
    grid-row: 1;
  }

  .div13 {
    grid-row: span 4 / span 4;
    grid-column-start: 6;
    grid-row-start: 2;
  }

  .div14 {
    display: flex;
    justify-content: center;
    align-items: end;
    grid-column: span 2 / span 3;
    grid-column-start: 4;
    grid-row-start: 6;
  }

  .div15 {
    grid-column: span 2 / span 2;
    grid-row: span 2 / span 2;
    grid-column-start: 2;
    grid-row-start: 5;
  }

  .div16 {
    grid-column: span 2 / span 3;
    grid-row: span 2 / span 2;
    grid-column-start: 3;
    grid-row-start: 3;
  }

  @media (max-width: 1240px) {
    .parent {
      overflow: hidden;
      box-sizing: border-box;
      place-content: center;
      padding: 3rem;
      color: black;
      display: grid;
      grid-template-columns:
        auto minmax(70px, 140px) 50px 30px minmax(60px, 120px)
        40px;
      grid-template-rows: auto minmax(25px, 75px) 120px 170px 40px 200px;
      gap: 42px;
    }
  }
</style>
