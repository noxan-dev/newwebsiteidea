<script>
import Navbar from "$lib/components/Navbar.svelte";
</script>

<div class="screen" style="background: #000000;">
  <div class="screen-content">
    <Navbar />
   <main style="padding: 5px">
     <h1 class="section-header">Section</h1>
     <div class="section-body">
       <slot />
     </div>
   </main>
  </div>
</div>

<style>
    .screen {
        position: absolute;
        top: 315px;
        left: 119px;
        overflow-y: auto;
        width: 300px;
        max-height: 200px;
        scrollbar-gutter: stable both-edges
    }

    .screen::-webkit-scrollbar {
        width: 5px;
    }

    .screen::-webkit-scrollbar-thumb {
        border-radius: 20px;
        background-color: rgb(128, 128, 128);
    }
</style>
