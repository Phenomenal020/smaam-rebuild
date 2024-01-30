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
            <section className="bg-gray-100 py-10 max-width min-w-[360px]">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                        {featuredPosts.map((post: Post) => (
                            <div>
                                <BlogCard post={post} key={post.id} type='list' />
                            </div>

                        ))}
                    </div>
                    <div className="text-center mt-8">
                        <Link href="/blog" className="btn btn-primary btn-wide">
                            See All Activities <BsArrowRight className="ml-2" />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FeaturedNewsSection;