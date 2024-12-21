import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home Page',
  description: 'The application to practise NextJS',
  openGraph: {
    title: 'My Website - Quy Phan Quang',
    description: 'Discover amazing content on My Website.',
    url: 'http://localhost:3000/',
    images: [
      {
        url: 'favicon.ico',
        width: 1200,
        height: 1200,
        alt: 'My Website',
      },
    ],
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

const Home = () => {
  return (
    <div>
      <p>Home Page</p>
    </div>
  );
};

export default Home;
