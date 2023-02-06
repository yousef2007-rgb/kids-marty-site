import React from 'react';
import { useEffect, useState } from 'react';
import useFetch from '../../../Hooks/useFetch';
import useLocalStorage from '../../../Hooks/useLocalStorage';
import ProductCard from './ProductCard';
import Link from 'next/link';
import useData from '../../../Hooks/useData';
import uiData from '../../../data/ProductContainer.json';
import { useSelector } from 'react-redux';

export default function ProductsContainer({
	title,
	number,
	limit,
	data,
	currentProduct,
	isLoading,
	loadingAllowed,
}) {
	const language = useSelector((state) => state.language);
	return isLoading ? (
		<div className="flex h-full h-1/2 flex-wrap items-center justify-center">
			<img src="/Assets/GIF/Loading.gif" />
			<img src="/Assets/GIF/Loading.gif" />
			<img src="/Assets/GIF/Loading.gif" />
		</div>
	) : (
		<div className="flex flex-col items-center border-b py-10">
			<h1 className=" my-10 mx-auto w-fit text-3xl font-bold uppercase text-blue_gray  ">
				{title}
			</h1>
			<div className="flex flex-wrap items-center justify-center gap-8 text-center ">
				{data &&
					data.data.res
						.filter((x) => x.field_subcategory == number)
						.filter((x) => x.nid != currentProduct)
						.filter((x, index) => index < limit || limit == 0)
						.map((product, index) => (
							<ProductCard
								key={index}
								label={product.label}
								discription={product.field_item_name}
								image={product.image}
								price={product.field_wholesale_price}
								nid={product.nid}
								loadingAllowed={loadingAllowed}
							/>
						))}
			</div>
			{limit != 0 ? (
				<Link
					href={`/Products/${number}?title=${title}`}
					className=" mx-auto my-12 border-2 border-transparent bg-primary px-12 py-2 font-bold text-white transition-all duration-200 ease-in-out hover:border-primary hover:bg-white hover:text-primary"
				>
					{language == 'arabic'
						? uiData.arabic.viewAllButton
						: uiData.english.viewAllButton}
				</Link>
			) : (
				''
			)}
		</div>
	);
}
