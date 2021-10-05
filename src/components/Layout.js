import Head from 'next/head';
import Header from './Header';
import styles from '../../styles/Home.module.css';

export default function Layout({ pageTitle, description, children }) {
    return(
        <>
            <Head>
                <meta name="viewpoint" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
                <meta name="Description" content={description} />
                <title>{pageTitle}</title>
            </Head>
            <main>
                <Header />
                <div className={styles.content}>{children}</div>
            </main>
        </>
    );
}
