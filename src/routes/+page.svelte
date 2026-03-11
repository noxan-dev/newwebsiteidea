<script>
  import Screen from "$lib/components/Screen.svelte";
  import { Canvas, T } from '@threlte/core'
  import Model from '$lib/components/Model.svelte'
</script>

<Screen>
  <h1>Welcome to SvelteKit</h1>
  <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
</Screen>

<!-- <Canvas>
  <T.PerspectiveCamera makeDefault position={[0, 1, 5]} />
  <T.AmbientLight intensity={0.5} />
  <T.DirectionalLight position={[5,5,5]} />

  <Model />
</Canvas> -->
