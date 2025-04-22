import { useState } from "react";

import { PostDetail } from "./PostDetail";
import useFetchPosts from "./useFetchPosts";
const maxPostPage = 10;

export function Posts() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPost, setSelectedPost] = useState(null);

  const { data, error, isPending } = useFetchPosts(currentPage);
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < maxPostPage) {
      setCurrentPage((prev) => prev + 1);
    }
  };
  if (isPending) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <>
      <ul>
        {data.map((post) => (
          <li
            key={post.id}
            className="post-title"
            onClick={() => setSelectedPost(post)}
          >
            {post.title}
          </li>
        ))}
      </ul>
      <div className="pages">
        <button disabled={currentPage === 1} onClick={handlePreviousPage}>
          Previous page
        </button>
        <span>Page {currentPage}</span>
        <button disabled={currentPage === 10} onClick={handleNextPage}>
          Next page
        </button>
      </div>
      <hr />
      {selectedPost && <PostDetail post={selectedPost} />}
    </>
  );
}
