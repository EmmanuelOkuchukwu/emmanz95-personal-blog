import '../../styles/globals.css';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout pageTitle="Blog" description="Emmanz95 personal Blog">
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp;
