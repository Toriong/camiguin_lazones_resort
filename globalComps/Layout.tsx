import NavBar from "layout/navbar/NavBar";
import Head from "next/head";
import Footer from "./Footer";


interface Props {
    children: React.ReactNode;
    title: string;
    description: string;
    keywords: string;
}

function Layout({title, description, keywords, children}: Props) {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name='description' content={description} />
                <meta name='keywords' content={keywords} />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
            </Head>

            <NavBar />

            {/* {router.pathname === '/' && <Showcase />} */}

            {children}

            <Footer/>
        </div>
    );
}

export default Layout;
