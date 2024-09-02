import Head from "next/head";

interface Props {
    title: string;
    description: string;
    keywords: string;
    restaurant: string;
}

export const Seo = ({title, description, keywords, restaurant}: Props) => {
    return (
        <Head>
             <title>{title}</title>
                <meta name="description" content={description}/>
                <meta name="keywords" content={keywords}/>
                <meta name="restaurant" content={restaurant}/>
                
                <meta name="viewpoint" content="width-device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}