import Link from "next/link";
import React from "react";
import styles from './ssr.module.css';

async function fetchData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    return res.json();
  }
  
  const ServerComponents = async () => {
    const posts = await fetchData();
  
    return (
      <div className="container">
        <h1 className={styles.title}>Server Components</h1>
        <ul>
          {posts.slice(0, 5).map(post => (
            <li key={post.id} className="mb-4 mt-4 p-4 border border-gray-200 rounded-lg">
              <h2 className="text-xl font-semibold text-gray-900 hover:text-blue-600"><Link href={`posts/${post.id}`}>{post.title} </Link></h2>
              <p className="rounded-lg hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 focus:outline-none">{post.body}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default ServerComponents;
  