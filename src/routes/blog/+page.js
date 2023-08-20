export const load = ({ fetch }) => {

  const fetchPost = async () => {
    const postRes = await fetch(`https://dummyjson.com/posts?limit=10`);
    const postData = await postRes.json();
    return postData.posts;
  };
  return {
    posts: fetchPost()
  };
};