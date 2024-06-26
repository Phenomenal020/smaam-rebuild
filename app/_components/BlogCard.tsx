import Image from "next/image";
import styles from "./blogcard.module.css";
import { AiOutlineClockCircle } from "react-icons/ai";

import { Post } from '@/types/interface'; 

type BlogCardProps = {
  post: Post;
  type?: string; // Assuming 'type' is an optional prop with a string type.
};

function BlogCard({ post, type }: BlogCardProps) {
  return (
    <section className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          className={styles.image}
          src={post.imgSrc}
          alt={post.header}
          layout='fill' // 'fill' will make the image cover the area of the parent div
          objectFit='cover' // objectFit works with 'fill'
        />
      </div>
      <div className={styles.bodyWrapper}>
        <span className={styles.date}>
          <AiOutlineClockCircle fontSize={12} style={{ marginRight: "4px" }} />
          {post.date}
        </span>
        <h4 className={styles.categoryText}>{post.header}</h4>
        <p className={styles.categorySampleText}>{post.body}</p>
        {type && <p className={styles.more}>see more</p>}
      </div>
    </section>
  );
}

export default BlogCard;
