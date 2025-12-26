import Head from 'next/head';
import StaticPage from '../components/StaticPage';
import { pages, manifest } from '../pageConfig';

export async function getStaticPaths() {
  const paths = pages
    .filter((page) => page.route !== '/')
    .map((page) => ({
      params: { slug: page.route.slice(1) },
    }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const route = `/${params.slug}`;
  const page = pages.find((entry) => entry.route === route);

  if (!page) {
    return { notFound: true };
  }

  return {
    props: {
      slug: params.slug,
    },
  };
}

export default function StaticRoute({ slug }) {
  const page = pages.find((entry) => entry.route === `/${slug}`);
  if (!page) return null;
  const PageContent = page.Component;
  return (
    <>
      <Head>
        <title>{page.title}</title>
      </Head>
      <StaticPage assetDir={page.assetDir} manifest={manifest}>
        <PageContent />
      </StaticPage>
    </>
  );
}
