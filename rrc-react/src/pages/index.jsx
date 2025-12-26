import Head from 'next/head';
import StaticPage from '../components/StaticPage';
import { getPageByRoute, manifest } from '../pageConfig';

export default function Home() {
  const page = getPageByRoute('/');
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
