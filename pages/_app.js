import Head from 'next/head';
// 這個目前沒有
// import '../common/reset.scss';

export default function MyApp(props) {
  const { Component, pageProps } = props;
  const Layout =
    Component.Layout || ((myAppProps) => <>{myAppProps.children}</>);

  return (
    <>
      <Head>
        <title></title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="shortcut icon" href="/images/favicon.ico" />
      </Head>
      <Layout title={Component.page_title} {...pageProps}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
