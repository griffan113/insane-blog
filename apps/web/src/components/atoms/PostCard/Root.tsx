import React from "react";
import Link from "next/link";
import Image from "next/image";
import { tv } from "tailwind-variants";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "shadcn";
import Post from "@src/types/Post";
import { Typography } from "@src/DS";

const slots = {
  image: "object-cover",
  imageContainer: "w-full max-h-80 overflow-hidden",
};

const postCard = tv({
  slots,
});

const { image, imageContainer } = postCard();

type PostCardRootProps = {
  post: Post;
};

export default function PostCardRoot({ post }: PostCardRootProps) {
  const formattedDate = new Date(post.date).toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long", // 01 => January
    year: "numeric",
  });

  return (
    <li>
      <Link href="" passHref legacyBehavior>
        <a>
          <Card>
            <CardHeader>
              <div className={imageContainer()}>
                <Image
                  className={image()}
                  src={post.image}
                  alt={post.title}
                  width={300}
                  height={200}
                />
              </div>
              <CardTitle>{post.title}</CardTitle>
              <CardDescription>{formattedDate}</CardDescription>
            </CardHeader>
            <CardContent>
              <Typography.P>{post.excerpt}</Typography.P>
            </CardContent>
          </Card>
          <div className=""></div>
        </a>
      </Link>
    </li>
  );
}
