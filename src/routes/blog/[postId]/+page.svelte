<script lang="js">
  let { data } = $props();
</script>

<div>
  <header>Chaim M; Post: {data.post.id}</header>
  <h4>{data.post.title}</h4>
  <p>{data.post.body}</p>
</div>

