import Head from 'next/head';
import Header from './Header';

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
                <div className="content">{children}</div>
            </main>
        </>
    );
}
