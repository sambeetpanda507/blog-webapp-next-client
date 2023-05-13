import AuthorCard from '@/components/Author/AuthorCard';
import { NextPage } from 'next';
import Head from 'next/head';
import AvatarImage from '@/public/assets/avatar.png';
import TwitterIcon from '@/public/assets/twitter.png';
import FacebookIcon from '@/public/assets/facebook.png';
import PostCard from '@/components/Author/PostCard';

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

const author = {
  name: 'Author Name',
  description: 'Founder of WowThemes and creator of Mediumish theme that you are currently previewing. I professionally develop premium themes, templates & scripts since the Apocalypse (2012). You can reach me out on the social links below',
  avatarUrl: AvatarImage,
  socialSites: socialSites,
}

const posts = [{
  id: '2f0k3434adk8',
  title: 'Life is worth living forever and ever',
  details: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
  imgUrl: 'https://www.free-css.com/assets/files/free-css-templates/preview/page271/mediumish/assets/img/demopic/8.jpg',
  author: {name: 'Author Name', avatarUrl: AvatarImage},
  publishedAt: '22 July 2023',
  readTime: 10 // in minutes
},
{
  id: '90k34jn85f8',
  title: 'Best European capitals to visit and the costs implied',
  details: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
  imgUrl: 'https://www.free-css.com/assets/files/free-css-templates/preview/page271/mediumish/assets/img/demopic/10.jpg',
  author: {name: 'Author Name', avatarUrl: AvatarImage},
  publishedAt: '22 July 2023',
  readTime: 10 // in minutes
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
        <AuthorCard {...author}/>

        <div className='my-4'>
          {posts.map((post) => (
            <PostCard key={post.id} {...post}/>
          ))}

        </div>
      </section>
    </>
  );
};

export default AuthorPage;
