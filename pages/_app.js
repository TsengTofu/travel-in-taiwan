import Head from 'next/head';
import '../styles/reset.scss';

export default function MyApp(props) {
  const { Component, pageProps } = props;
  const Layout =
    Component.Layout || ((myAppProps) => <>{myAppProps.children}</>);

  return (
    <>
      {/*  NOTE  其實這邊也可以做 custom header */}
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout title={Component.page_title} {...pageProps}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
