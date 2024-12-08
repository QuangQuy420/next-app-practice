import HomePage from "@@/components/HomePage/HomePage";
import Head from "next/head";

const Home = () => {
    return (
        <div>
            <Head>
                <title>Bogotea in Nhat Thien district</title>
                <meta name="description" content="This is a Bogotea in Nhat Thien district."/>
                <meta name="robots" content="index, follow"/>
            </Head>
            <HomePage/>
        </div>
    )
}

export default Home;