import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

const Post: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      {/* HEAD SECTION */}
      <Head>
        <title>Post</title>
      </Head>
      {/* PAGE CONTENT SECTION */}
      <section>
        <h1>Post #{id}</h1>
      </section>
    </>
  );
};

export default Post;
