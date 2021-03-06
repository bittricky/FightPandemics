import React from "react";
import Post from "./Post";

const Posts = ({
  isAuthenticated,
  filteredPosts,
  handlePostLike,
  handlePostDelete,
  loadPosts,
  postDelete,
  user,
}) => {
  return (
    <div className="feed-posts">
      {Object.keys(filteredPosts).map((key) => (
        <Post
          post={filteredPosts[key]}
          loadPosts={loadPosts}
          handlePostLike={handlePostLike}
          handlePostDelete={handlePostDelete}
          postDelete={postDelete}
          isAuthenticated={isAuthenticated}
          user={user}
          key={key}
        />
      ))}
    </div>
  );
};

export default Posts;
