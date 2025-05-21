<script>
  import Carousel1 from "../assets/carousel-1.jpeg";
  import Carousel2 from "../assets/carousel-2.webp";
  import Carousel3 from "../assets/carousel-3.jpeg";
  import CarouselIndicator from "./CarouselIndicator.svelte";
  import MenuButton from "./MenuButton.svelte";
  import SocialNetworkButton from "./SocialNetworkButton.svelte";
  import ThumbnailNavigation from "./ThumbnailNavigation.svelte";

  let carouselItems = $state([Carousel1, Carousel2, Carousel3]);
  let carouselIndex = $state(0);

  function onNext() {
    carouselIndex = (carouselIndex + 1) % 3;
  }
  function onPrev() {
    console.log(carouselIndex);
    let newIndex = (carouselIndex - 1) % 3;
    if (newIndex < 0) {
      newIndex = carouselItems.length - 1;
    }
    carouselIndex = newIndex;
  }
</script>

<div class="container">
  <img
    class="carousel-img"
    src={carouselItems[carouselIndex]}
    alt="carousel-thumbnail"
  />

  <div class="landing">
    <div class="landing-grid">
      <div class="div1">
        <MenuButton />
      </div>
      <div class="div2">
        <div class="title">
          Summer <br />2020
        </div>
      </div>
      <div class="div3">
        <div class="sn-section">
          <SocialNetworkButton label="FB" />
          <SocialNetworkButton label="PIN" />
          <SocialNetworkButton label="IG" />
        </div>
      </div>
      <div class="div4">
        <CarouselIndicator
          quantity={carouselItems.length}
          index={carouselIndex}
        />
      </div>
      <div class="div5"></div>
      <div class="div6"></div>
      <div class="div7"></div>
      <div class="div8"></div>
      <div class="div9">
        <div class="sub-title">
          <span>Summer <br /> collection <br />2020</span>
        </div>
      </div>
      <div class="div10"></div>
      <div class="div1">
        <ThumbnailNavigation
          onNext={(e) => {
            onNext();
          }}
          onPrevious={(e) => {
            onPrev();
          }}
        />
      </div>
      <div class="div12"></div>
    </div>
  </div>
</div>

<style>
  .container {
    position: relative;
    overflow: hidden;
  }
  .carousel-img {
    overflow: hidden;
    position: absolute;
    box-sizing: border-box;
    z-index: -1;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
  }
  .landing {
    padding: 42px;
    box-sizing: border-box;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
  }

  .sn-section {
    display: flex;
    gap: 32px;
    padding-left: 32px;
  }

  .landing-grid {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr) 50px 200px repeat(1, 1fr);
    gap: 16px;
  }

  .sub-title {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    color: white;
    padding-left: 32px;
    font-size: 14px;
  }
  .title {
    font-family: "DM Serif Text", serif;
    font-weight: 400;
    font-style: normal;
    padding-left: 32px;
    font-size: 124px;
    color: white;
    line-height: 100px;
  }

  .div2 {
    grid-column: span 3 / span 3;
    grid-row: span 2 / span 2;
    grid-column-start: 1;
    grid-row-start: 5;
  }

  .div3 {
    grid-column-start: 1;
    grid-row-start: 7;
  }

  .div4 {
    grid-column-start: 4;
    grid-row-start: 7;
  }

  .div5 {
    grid-column: span 4 / span 4;
    grid-column-start: 1;
    grid-row-start: 2;
  }

  .div6 {
    grid-column: span 2 / span 2;
    grid-column-start: 2;
    grid-row-start: 7;
  }

  .div7 {
    grid-column: span 2 / span 2;
    grid-column-start: 2;
    grid-row-start: 1;
  }

  .div8 {
    grid-column-start: 4;
    grid-row-start: 1;
  }

  .div9 {
    grid-column-start: 1;
    grid-row-start: 3;
  }

  .div10 {
    grid-row: span 2 / span 2;
    grid-column-start: 4;
    grid-row-start: 4;
  }

  .div11 {
    grid-column-start: 4;
    grid-row-start: 3;
  }

  .div12 {
    grid-column: span 2 / span 2;
    grid-column-start: 2;
    grid-row-start: 3;
  }
</style>
