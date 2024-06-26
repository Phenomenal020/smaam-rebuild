"use client";

import styles from "./blog.module.css";

import { featuredPosts } from '@/data/blogData';

import { Post } from '@/types/interface';
import Link from "next/link";
import BlogCard from "./BlogCard";
import { newsReader } from "@/utils/fonts";

type Props = {};

const BlogSection = (props: Props) => {
  // show only the top 3 blogs
  const topPosts: Post[] = featuredPosts.slice(0, 3);

  return (
    <section className={styles.container} id='featured'>
      <div className={styles.wrapper}>
        <h2 className={`${styles.headerText} ${newsReader.className}`}>Featured News</h2>

        <div className={styles.cardWrapper}>
          {topPosts.map((post: Post) => (
            <Link href={`/${post.page}`} key={post.id}>
              <BlogCard post={post} />
            </Link>
          ))}
        </div>


        <button className={styles.visitBlogBtn}>
          <Link href="/blog">see all activities &rarr;</Link>
        </button>
      </div>

    </section>
  );
};

export default BlogSection;
