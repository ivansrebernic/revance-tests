<script>
  import svelteLogo from "./assets/svelte.svg";
  import viteLogo from "/vite.svg";
  import Counter from "./lib/Counter.svelte";
  import BingLogo from "../src/assets/bing.svg";
</script>

<main class="background">
  <div class="white-gradient"></div>
  <div
    class="bg-white w-[256px] h-[256px] text-black box-content flex flex-col space-y-4 rounded-[35%] shadow-xl justify-center items-center"
  >
    <img
      class="fill-[#505050] w-[128px] h-[128px] translate-x-[12px]"
      src={BingLogo}
      alt="bing logo"
      style="filter: invert(25%) sepia(0%) saturate(1090%) hue-rotate(146deg)
      brightness(96%) contrast(73%);"
    />
    <span class="text-[#505050] text-2xl"> Bing </span>
  </div>
</main>

<style>
  .background {
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: 100% 100%;
    background-position:
      0px 0px,
      0px 0px,
      0px 0px,
      0px 0px,
      0px 0px;
    background-image: radial-gradient(
        35% 59% at 85% 46%,
        #dfc6ff 0%,
        #073aff00 100%
      ),
      radial-gradient(37% 27% at 69% 34%, #dfc6ff 0%, #073aff00 100%),
      radial-gradient(113% 91% at 6% 7%, #aedffe 0%, #ff000000 49%),
      radial-gradient(142% 57% at 110% -3%, #4b88ffff 1%, #ff000000 82%),
      linear-gradient(0deg, #ffffffff 1%, #ffffffff 99%);
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
  }
</style>
