<script>
  import cam_body from "$lib/images/background.png";
  import cam_buttons from "$lib/images/cam-buttons.png";
  import "../app.css";
  import { base } from "$app/paths";
</script>

<main class="container">
  <div>
    <div class="camera-body">
      <slot></slot>
      <img alt="camera" class="cam-body" src="{cam_body}">
      <img alt="camera" class="cam-btns" src="{cam_buttons}" usemap="#image-map">
    </div>
  </div>

  <map name="image-map">
    <area alt="gyro-btn" coords="42,309,20" data-placement="bottom" data-tooltip="Top" href="#" shape="circle"
          target="_self" title="gyro-btn">
    <area alt="af-btn" coords="45,245,20" href="#" shape="circle" target="_self" title="af-btn">
    <area alt="info-btn" coords="31,362,20" href="{base}/about" shape="circle" target="_self" title="info-btn">
    <area alt="zoomin-btn" coords="31,486,20" href="" shape="circle" target="_self" title="zoomin-btn">
    <area alt="zoomout-btn" coords="31,525,20" href="" shape="circle" target="_self" title="zoomout-btn">
    <area alt="menu-btn" coords="77,487,20" href="javascript:" shape="circle" target="_self" title="menu-btn">
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
  <!--    <area class="map" target="_self" alt="shot-md-btn" title="shot-md-btn" href="/blog" coords="563,525,20"-->
  <!--          shape="circle">-->
  <!--  </map>-->
</main>
<style>
    :global(*) {
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    :global(body) {
        height: 100vh;
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
        /*transform: rotate(-90deg);*/
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

    :global(nav),
    footer {
        font-size: 0.7rem;
        font-weight: 500;
        letter-spacing: 0.1px;
        text-transform: uppercase;
    }

    :global(html) {
        overflow-y: scroll;
        /* scrollbar-gutter: stable; */
        background: rgb(20, 20, 40);
    }

    :global(.layout) {
        padding-right: max(1rem, calc(calc(100vw - var(--width)) / 2));
        padding-left: max(1rem, calc(calc(100vw - var(--width)) / 2));
        --width: 700px;
    }

    main {
        margin-top: 5vw;
        margin-bottom: 5rem;
    }

    footer {
        margin: 3rem 0;
        text-align: center;
        color: rgba(255, 255, 255, 0.4);
    }
</style>
