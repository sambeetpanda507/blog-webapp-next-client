import AuthorCard from '@/components/Author/AuthorCard';
import { NextPage } from 'next';
import Head from 'next/head';
import AvatarImage from '@/public/assets/avatar.png';
import TwitterIcon from '@/public/assets/twitter.png';
import FacebookIcon from '@/public/assets/facebook.png';

const socialSites = [
  {
    icon: FacebookIcon,
    url: 'https://facebook.com',
    name: 'facebook-icon',
  },
  {
    icon: TwitterIcon,
    url: 'https://twitter.com',
    name: 'twitter-icon',
  },
];

const AuthorPage: NextPage = () => {
  return (
    <>
      {/* HEAD SECTION */}
      <Head>
        <title>Author</title>
      </Head>

      {/* PAGE CONTENT SECTION */}
      <section>
        <AuthorCard
          name="Author Name"
          description="Founder of WowThemes and creator of Mediumish theme that you are currently previewing. I professionally develop premium themes, templates & scripts since the Apocalypse (2012). You can reach me out on the social links below"
          socialSites={socialSites}
          avatarUrl={AvatarImage}
        />
      </section>
    </>
  );
};

export default AuthorPage;
