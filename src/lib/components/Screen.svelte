<script>
  import Navbar from "$lib/components/Navbar.svelte";
</script>


<div class="screen" style="background: #000000;">
  <div class="screen-content">
    <Navbar />
    <h1 class="section-header">Section</h1>
    <div class="section-body">
      <slot />
    </div>

  </div>
</div>

<style>
    .screen {
        position: absolute;
        top: 310px;
        left: 100px;
        overflow-y: auto;
        width: 320px;
        height: 220px;
        padding-left: 30px;
    }

    .screen::-webkit-scrollbar {
        width: 5px;
    }

    .screen::-webkit-scrollbar-thumb {
        border-radius: 20px;
        background-color: rgb(128, 128, 128);
    }
</style>
