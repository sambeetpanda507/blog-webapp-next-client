import { NextPage } from 'next';
import Head from 'next/head';
import { BlogCard } from '@/components/CustomComponents';
import SearchBox from '@/components/Home/SearchBox';
import SideSection from '@/components/Home/SideSection';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-12 md:my-5 font-sans">
        <div className="md:col-span-2">
          <SearchBox isHidden={false} />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
        <div className="md:col-span-1">
          <SideSection />
        </div>
      </section>
    </>
  );
};

export default Home;
