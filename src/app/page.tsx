import { authConfig } from '@/libs/auth';
import { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import SignInForm from './auth/signin/components/SignInForm';

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

const Home = async () => {
  const session = await getServerSession(authConfig);

  if (session) {
    redirect("/chat");
  }

  return <SignInForm />;
};

export default Home;
