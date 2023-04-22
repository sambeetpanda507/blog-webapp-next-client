import { NextPage } from 'next';
import Head from 'next/head';

const AuthorPage: NextPage = () => {
  return (
    <>
      {/* HEAD SECTION */}
      <Head>
        <title>Author</title>
      </Head>

      {/* PAGE CONTENT SECTION */}
      <section className="border-2 border-red-500">
        This is an author page.
      </section>
    </>
  );
};

export default AuthorPage;
