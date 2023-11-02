import React from "react";
import { tv } from "tailwind-variants";

import Post from "@src/types/Post";
import { PostCard } from "@atoms/index";

type PostsGridRoot = {
  posts: Post[];
};

const base =
  "grid grid-cols-[auto-fill,minmax(20rem,1fr)] gap-6 justify-center";

const postsGrid = tv({
  base,
});

export default function PostsGridRoot({ posts }: PostsGridRoot) {
  return (
    <ul className={postsGrid()}>
      {posts.map((post) => (
        <PostCard.Root key={post.id} />
      ))}
    </ul>
  );
}
