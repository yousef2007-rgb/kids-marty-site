import { useRouter } from "next/router";
import React from "react";
import Head from "next/head";
import Header from "../../components/ui/Header";
import Intro from "../../components/ui/Intro/Intro";
import ProductsContainer from "../../components/ui/ProductsContainer/ProductsContainer";
import useData from "../../Hooks/useData";

export default function HomePage() {
  const [data, isLoading] = useData(process.env.NEXT_PUBLIC_URL, "data");
  const router = useRouter();
  const products = router.query;
  console.log(products);
  return (
    <div>
      <Head>
        <title>Intex Store -{products.title} products</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icon.jpg" />
      </Head>
      <Header />
      <div className="mt-28 tablet:mt-0">
        <Intro link={"/Assets/images/intro/hero2.jpg"} />
        <ProductsContainer
          number={products.products}
          limit={0}
          title={products.title}
          data={data}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
}
