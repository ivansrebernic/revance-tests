<script>
  import CarouselImage1 from "./assets/carousel-1.jpeg";
  import Image1 from "./assets/image1.jpeg";
  import Image2 from "./assets/image2.jpeg";
  import "./app.css";
</script>

<div class="h-screen grid md:grid-cols-5 grid-cols-1 md:grid-rows-1 min-[1500px]:grid-rows-2 gap-5">
  <div
    style="background-image: url({CarouselImage1})"
    class="grid col-span-3 grid-cols-5 grid-rows-4 gap-2 md:p-16 p-4 h-screen bg-no-repeat bg-cover text-white bg-red-200"
  >
    <div class="div1 row-span-1 row-start-1">
      <button class="flex items-center gap-2 md:text-[1vw] text-md font-medium">
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
        Menu
      </button>
    </div>
    <div
      class="col-span-5 row-start-2 place-content-end text-2xl  flex justify-between items-start md:items-center row-span-1 md:flex-row flex-col"
    >
      <div class="md:text-[1vw] text-md leading-8 md:leading-[1.5vw]">
        Summer <br />
        Collection <br />2020
      </div>

      <div class="pr-2 flex gap-6 text-white items-center text-sm">
        <button
          class="relative transition-all duration-200 cursor-pointer hover:font-semibold"
        >
          <span> Next</span>
        </button>
        <hr class="w-20" />
        <button
          class="relative transition-all duration-200 cursor-pointer hover:font-semibold"
        >
          <span> Previous </span>
        </button>
      </div>
    </div>
    <div class="col-span-5 row-start-3 md:text-[6vw] text-7xl place-content-center font-alt">
      Summer <br />
      2020
    </div>
    <div class="col-span-5 row-start-4 place-content-end flex self-end">
      <div class="flex md:gap-[4vw] gap-12 items-center">
        <a
          href="#"
          class="text-white no-underline font-bold text-sm  duration-300 hover:text-black transition-all"
          >FB</a
        >
        <a
          href="#"
          class="text-white no-underline font-bold text-sm transition-opacity duration-300 hover:text-black transition-all"
          >PIN</a
        >
        <a
          href="#"
          class="text-white no-underline font-boldtext-sm transition-opacity duration-300 hover:text-black transition-all"
          >IG</a
        >
      </div>
      <div class="flex justify-end items-center w-full md:gap-[5vw] gap-8">
        <button
          class="transition-all duration-200 h-2 w-2 bg-gray-300 rounded-full"
        ></button>
        <button
          class="transition-all duration-200 h-2 w-2 bg-gray-300 rounded-full "
        ></button>
        <button
          class="transition-all duration-200 h-2 w-2 bg-gray-300 rounded-full"
        ></button>
      </div>
    </div>
  </div>
  <div class="col-span-2 box-content p-[4em] relative ">
    <div
      class="absolute md:right-[4.5em] md:top-[4.5em] right-[2em] top-[1em] inline-flex text-right text-sm mb-4 gap-14"
    >
      <a class="ml-2 text-black  text-md cursor-pointer font-bold hover:text-white transition-all">ENG</a
      >
      <a class="ml-2 text-black font-bold text-md cursor-pointer hover:text-white transition-all">FR</a>
    </div>

    <div
      class="box-content flex items-center gap-16 text-sm font-semibold rotate-90 absolute md:-right-[11rem] top-1/2 -right-[13rem] text-black"
    >
      <span> Ref. 6687/787 </span>
      <div class="w-32 h-0.5 bg-black"></div>
      <span>White loose dress</span>
    </div>

    <div
      class="flex flex-col min-w-[20px] min-[1500px]:justify-end items-center w-3/4 gap-[3rem] h-full justify-center "
    >
      <img class="self-end max-[1500px]:w-[200px] w-[240px]" src={Image1} alt="" />
      <img class="self-start max-[1500px]:w-[200px] w-[240px]" src={Image2} alt="" />
      <button
        class=" min-[1500px]:absolute bottom-[4rem] min-[1500px]:right-[3.5rem] flex border border-black bg-transparent h-[4rem] min-[1500px]:w-2/6 w-full cursor-pointer transition-all duration-300 text-black text-center hover:bg-black hover:text-white"
      >
        <span class="m-auto">SHOP NOW</span>
      </button>
    </div>

  </div>
</div>

<style>

</style>
