export async function generateStaticParams() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();
  
    return posts.map(post => ({
      id: post.id.toString(),
    }));
  }

  const Post = async ({ params }) => {
    const { id } = await params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const post = await res.json();
     if (!post) {
      return <div>Post not found</div>;
    }
 
    return (
      <div className="container">
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    );
  };
  
  export default Post;
  