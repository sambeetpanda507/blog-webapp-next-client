import AuthorCard from '@/components/Author/AuthorCard';
import { NextPage } from 'next';
import Head from 'next/head';

import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import AvatarImage from '@/public/assets/avatar.png';



const socialSites = [
  {
    icon: <FacebookIcon htmlColor='white' fontSize='small'/>,
    url: "https://facebook.com"
  },
  {
    icon: <TwitterIcon htmlColor='white' fontSize='small'/>,
    url: "https://twitter.com"
  }
]

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
        name='Author Name'
        description='Founder of WowThemes and creator of Mediumish theme that you are currently previewing. I professionally develop premium themes, templates & scripts since the Apocalypse (2012). You can reach me out on the social links below'
        socialSites={socialSites}
        avatarUrl={AvatarImage}
        />
      </section>
    </>
  );
};

export default AuthorPage;
