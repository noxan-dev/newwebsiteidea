<script>
  import Navbar from "$lib/components/Navbar.svelte";

  let {sectionHeader, children } = $props();
</script>

<div class="screen">
  <Navbar />
  <div class="screen-content">
    {@render children()}
  </div>
</div>

<style>
    .screen {
        position: absolute;
        top: 53%;
        left: 17%;
        width: 43%;
        height: 34%;
        overflow-y: auto;
        scrollbar-gutter: stable both-edges;
        scrollbar-width: thin;
        background-color: oklch(12.9% 0.042 264.695);
    }

    .screen::-webkit-scrollbar {
        width: 5px;
    }

    .screen::-webkit-scrollbar-thumb {
        border-radius: 20px;
        background-color: rgb(128, 128, 128);
    }

    .screen-content {
      padding: .5rem;
    }
</style>
