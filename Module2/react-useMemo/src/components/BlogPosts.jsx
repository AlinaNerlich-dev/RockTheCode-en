import { useState, useMemo } from "react";

const BlogPosts = ({ posts }) => {
  const [rerender, setRerender] = useState(false);
  const orderedPosts = useMemo(() => {
    console.log("Generating Posts");
    return posts
      .map((post) => ({
        ...post,
        date: new Date(post.date),
        title: post.slug.split("-").join(" ").toUpperCase(),
      }))
      .sort((a, b) => a.date.getTime() - b.date.getTime())
      .map((post) => ({
        ...post,
        date: new Intl.DateTimeFormat("en-US").format(post.date),
      }));
  }, [posts]);

  return (
    <div>
      <ul>
        {orderedPosts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <span>{post.date}</span>
            <p>{post.data}</p>
          </li>
        ))}
      </ul>
      <button onClick={() => setRerender(!rerender)}>Rerender</button>
    </div>
  );
};

export default BlogPosts;
