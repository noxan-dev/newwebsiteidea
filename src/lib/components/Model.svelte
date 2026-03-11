<script>
  import { T, useLoader } from '@threlte/core'
  import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

  const gltf = useLoader(GLTFLoader, '/3DModel.gltf')
</script>

{#if $gltf}
  <T is={$gltf.scene} />
{/if}