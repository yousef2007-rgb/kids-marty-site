import { useRouter } from 'next/router';
import React from 'react';
import Head from 'next/head';
import Header from '../../components/ui/Header';
import Intro from '../../components/ui/Intro/Intro';
import ProductsContainer from '../../components/ui/ProductsContainer/ProductsContainer';
import useData from '../../Hooks/useData';
import Footer from '../../components/ui/Footer/Footer';

export default function HomePage() {
	const [data, isLoading] = useData(process.env.NEXT_PUBLIC_URL, 'data');
	const router = useRouter();
	const products = router.query;
	return (
		<div>
			<Head>
				<title>
					Intex Jo | {products.title.toUpperCase()} Official
					Distributor for Intex In Jordan
				</title>

				<meta
					name="keywords"
					content="مسابح جاهزه للبيع في الأردن, IntexJo, intex jo, intex, intex jordan, intex product, Swimming pools, above ground pools, outdoor pools, pools, air mattress, airbeds, inflatable spas, spas, purespa, portable spa, dura-beam airbeds, premaire airbeds, realtree airbeds, air furniture, inflatable furniture, pool floats, pool toys, inflatable boats, boats, hot tubs, برك سباحة intex , برك سباحة للاطفال , برك سباحة متنقلة , ,مسابح ,مسابح في الأردن , مسبح نفخ, نفخ , برك سباحة في الاردن , "
				></meta>
				<meta
					property="og:title"
					content="Intex Jo | Official Distributor for Intex In Jordan"
				/>
				<meta property="og:type" content="products" />
				<meta property="og:url" content="https://www.intexjo.com/" />
				<meta
					property="og:image"
					content="https://www.intexjo.com/Assets/images/www.intexjo.com.png"
				/>
				<meta
					property="og:description"
					content="official distrubutor of intex in jordan that sells all kinds of pools ,pools equipment and accesories"
				/>
				<meta name="twitter:card" content="summary" />
				<meta name="twitter:site" content="@intex-jo" />
				<meta
					name="twitter:title"
					content="Intex Jo | Official Distributor for Intex In Jordan"
				/>
				<meta
					name="twitter:description"
					content="official distrubutor of intex in jordan that sells all kinds of pools ,pools equipment and accesories"
				/>
				<meta
					name="twitter:image"
					content="https://www.intexjo.com/Assets/images/www.intexjo.com.png"
				/>
				<link rel="icon" href="/icon.jpg" />
			</Head>
			<Header />
			<div className="mt-28 tablet:mt-0">
				<Intro link={'/Assets/images/intro/hero2.jpg'} />
				<ProductsContainer
					number={products.products}
					limit={0}
					title={products.title}
					data={data}
					isLoading={isLoading}
					loadingAllowed={true}
				/>
			</div>
			<Footer />
		</div>
	);
}
