<script>
  import svelteLogo from "./assets/svelte.svg";
  import viteLogo from "/vite.svg";
  import Counter from "./lib/Counter.svelte";
  import BingLogo from "../src/assets/bing.svg";
</script>

<main class="background">
  <div class="white-gradient"></div>
  <div class="logo">
    <img src={BingLogo} alt="bing logo" />
    <span> Bing </span>
  </div>
</main>

<style>
  .white-gradient {
    position: absolute;
    width: 100vw;
    height: 100vh;
    background: #ffffff;
    background: linear-gradient(
      360deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0) 50%,
      rgba(237, 221, 83, 0) 100%
    );
  }
  .logo {
    padding: 24px;
    background-color: white;
    border-radius: 35%;
    box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.4);
    color: black;
    font-size: 14px;
    gap: 8px;
    width: 64px;
    height: 64px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #505050;
  }
  .logo img {
    filter: invert(25%) sepia(0%) saturate(1090%) hue-rotate(146deg)
      brightness(96%) contrast(73%);

    width: 48px;
    height: 48px;
  }
  .background {
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(
      135deg,
      #9ddafa 0%,
      #b0ddfa 20%,
      #c4d5fa 40%,
      #d2cff0 60%,
      #dcc9ee 80%,
      #e5c2f0 100%
    );
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
  }
</style>
