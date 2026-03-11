<script lang="js">
  import Screen from "$lib/components/Screen.svelte";

  let { data } = $props();
  console.log(data)
</script>



<Screen>
  <div>
    <header>Chaim M; Post: {data.post.id}</header>
    <h4>{data.post.title}</h4>
    <p>{data.post.body}</p>
  </div>
</Screen>
