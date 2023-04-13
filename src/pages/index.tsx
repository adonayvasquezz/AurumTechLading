import Head from "next/head";
import { Inter } from "next/font/google";
import Presentation from "@/components/home/Presentation/Presentation";
import Layout from "@/components/shared/Layout/Layout";
import Services from "@/components/home/Services/Services";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>AurumTech</title>
        <meta
          name="description"
          content="Software development company | High quality websites"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Presentation />
        <Services />

      </Layout>
    </>
  );
}
