import Link from 'next/link';
import { HeadPost } from './HeadPost';
import React from 'react';
import styles from '../../styles/Home.module.css'

export const Post = ({ post, className }) => {
    const { link, module: { meta }, } = post;
    return(
        <article className={className}>
            <HeadPost meta={meta} />
            <Link href={`/blog${link}`}>
                <a className={styles.arrow}>Read More ➝</a>
            </Link>
        </article>
    );
}
