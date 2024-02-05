import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import Link from 'next/link';
import Header from '../_components/Header';

import { featuredPosts } from "@/data/blogData";
import { Post } from "@/types/interface";
import Image from 'next/image';
import BlogCard from '../_components/BlogCard';

const FeaturedNewsSection = () => {
    return (
        <>
            <Header text='our blog' />
            <section className='w-full bg-gray-100' id='blog-list-page'>
                <div className="bg-gray-100 py-10 max-width min-width">
                    <div className="mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                            {featuredPosts.map((post: Post) => (
                                <Link href={`/${post.page}`} key={post.id}>
                                    <BlogCard post={post} key={post.id} type='list' />
                                </Link>
                            ))}
                        </div>
                        <div className="text-center mt-8">
                            <Link href="/blog" className="btn link-btn flex">
                                See All Activities &rarr;
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default FeaturedNewsSection;