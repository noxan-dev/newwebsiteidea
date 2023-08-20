<script>
  import pico from "@picocss/pico";
  import cam_body from "$lib/images/background.png";
  import cam_buttons from "$lib/images/cam-buttons.png";
  import "../app.css";
  import Navbar from "$lib/components/Navbar.svelte";
  import { base } from "$app/paths";
</script>
<Navbar />

<main>
    <div>
      <div class="camera-body">
        <slot></slot>
        <img class="cam-body" src="{cam_body}" alt="camera">
        <img class="cam-btns" src="{cam_buttons}" alt="camera" usemap="#image-map">
      </div>
    </div>

<map name="image-map">
    <area target="_self" alt="gyro-btn" title="gyro-btn" href="#" coords="42,309,20" shape="circle">
    <area target="_self" alt="af-btn" title="af-btn" href="#" coords="45,245,20" shape="circle">
    <area target="_self" alt="info-btn" title="info-btn" href="{base}/about" coords="31,362,20" shape="circle">
    <area target="_self" alt="zoomin-btn" title="zoomin-btn" href="" coords="31,486,20" shape="circle">
    <area target="_self" alt="zoomout-btn" title="zoomout-btn" href="" coords="31,525,20" shape="circle">
</map>
<!--  <map name="image-map">-->
<!--    <area target="_self" alt="info-btn" title="info-btn" href="/about" coords="514,359,20" shape="circle">-->
<!--    <area target="_self" alt="ok-btn" title="ok-btn" href="" coords="538,424,20" shape="circle">-->
<!--    <area target="_self" alt="gyro-btn" title="gyro-btn" href="" coords="523,307,20" shape="circle">-->
<!--    <area target="_self" alt="play-btn" title="play-btn" href="/" coords="96,250,20" shape="circle">-->
<!--    <area target="_self" alt="trash-btn" title="trash-btn" href="" coords="141,251,20" shape="circle">-->
<!--    <area target="_self" alt="disp-btn" title="disp-btn" href="" coords="431,244,20" shape="circle">-->
<!--    <area target="_self" alt="af-btn" title="af-btn" href="" coords="524,244,20" shape="circle">-->
<!--    <area target="_self" alt="zoomin-btn" title="zoomin-btn" href="" coords="515,485,20" shape="circle">-->
<!--    <area target="_self" alt="zoomout-btn" title="zoomout-btn" href="" coords="514,525,20" shape="circle">-->
<!--    <area target="_self" alt="menu-btn" title="menu-btn" href="" coords="562,485,20" shape="circle">-->
<!--    <area class="map" target="_self" alt="shot-md-btn" title="shot-md-btn" href="/blog" coords="563,525,20"-->
<!--          shape="circle">-->
<!--  </map>-->
</main>
<footer>
  Chaim Malek 2022
</footer>

<style>
    :global(*) {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -moz-box-sizing: border-box;
    }
    .camera-body {
        position: relative;
        top: 0;
        left: 0;
        width: 700px;
        height: 700px;
        margin: 0 auto;
        border-radius: 50%;
        box-shadow: 0 0 0 10px rgba(0, 0, 0, 0.2);
    }
    
    .cam-body {
        position: relative;
        top: 0;
        left: 0;
        pointer-events: none;
    }

    .cam-btns {
        position: absolute;
        top: 0;
        left: 69%;
    }

    nav {
        background: rgba(0, 0, 0, 0.4);
        padding-top: 1rem;
        padding-bottom: 1rem;
    }

    nav,
    footer {
        text-transform: uppercase;
        font-size: 0.7rem;
        letter-spacing: 0.1px;
        font-weight: 500;
    }

    :global(html) {
        background: rgb(20, 20, 40);
        /* scrollbar-gutter: stable; */
        overflow-y: scroll;
    }

    :global(.layout) {
        --width: 700px;
        padding-left: max(1rem, calc(calc(100vw - var(--width)) / 2));
        padding-right: max(1rem, calc(calc(100vw - var(--width)) / 2));
    }

    main {
        margin-bottom: 5rem;
        margin-top: 5vw;
    }

    footer {
        text-align: center;
        margin: 3rem 0;
        color: rgba(255, 255, 255, 0.4);
    }
</style>
