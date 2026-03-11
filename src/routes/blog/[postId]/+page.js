export const prerender = false;

export const load = async ({fetch, params}) => {
  const res = await fetch(`https://dummyjson.com/posts/${params.postId}`)
  const data = await res.json()

  return {
    post: data
  }
}