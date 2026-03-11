export const load = async ({ fetch }) => {
  const res = await fetch('https://dummyjson.com/posts?limit=10');
  const postData = await res.json();

  return {
    posts: postData.posts
  };
};