import { HeadPost } from './HeadPost';
import styles from '../../styles/Home.module.css';

export default function BlogPost({ children, meta }) {
    return (
        <>
            <HeadPost meta={meta} isBlogPost />
            <hr />
            <article className={styles.articlePost}>{children}</article>
        </>
    )
}
