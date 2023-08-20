export const load = ({fetch, params}) => {
  console.log(params)

  const fetchPost = async (id) => {
    const res = await fetch(`https://dummyjson.com/posts/${id}`)
    const data = await res.json()
    return data
  }
  return {
    post: fetchPost(params.postId)
  }
}