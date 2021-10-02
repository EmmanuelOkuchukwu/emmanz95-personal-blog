import Link from 'next/link';
import { HeadPost } from './HeadPost';

export const Post = ({ post, className }) => {
    const { link, module: { meta }, } = post;
    return(
        <article className={className}>
            <HeadPost meta={meta} />
            <Link href={`/blog${link}`}>
                <a>Read More ➝</a>
            </Link>
        </article>
    );
}
