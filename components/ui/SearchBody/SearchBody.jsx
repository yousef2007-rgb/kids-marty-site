import React, { useState, useRef } from 'react';
import Search from '../../../public/Assets/icons/Search';
import useData from '../../../Hooks/useData';
import ProductCard from '../ProductsContainer/ProductCard';
import Link from 'next/link';
import Close from '../../../public/Assets/icons/Close';
import { useSelector, useDispatch } from 'react-redux';
import { tougle } from '../../../slices/searchVisabilitySlice';

export default function SearchBody({ visability }) {
	const input = useRef(null);
	const text = 'Hello World'.toLowerCase();
	const [textValue, setTextValue] = useState('');
	const [data, isLoading] = useData(
		'https://orders.fore-site.net/media_admin/api/api_secure.php?module=inventory&method=category_products&sk1=DICOSECSK1oolshdsf33sadGGHsd376&debug=yes&device_id=33333333&data=1&filter1=55&lang=en&username=28&field_subcategory=151',
		'data'
	);
	const searchVisability = useSelector((state) => state.searchVisability);
	const dispatch = useDispatch();
	return (
		<div
			style={{ display: searchVisability }}
			className=" absolute top-0 left-0 flex h-fit w-screen items-start justify-center overflow-x-hidden overflow-y-scroll bg-white"
		>
			<div className=" flex h-fit w-full flex-col items-center rounded-lg bg-white  p-5">
				<div className=" my-0 flex w-full max-w-2xl flex-nowrap items-center justify-center rounded-lg border border-secondery  bg-white px-5 py-2 ">
					<input
						ref={input}
						placeholder="Search for product"
						className=" fex-1 h-full w-full font-bold text-black outline-none"
						onChange={() => setTextValue(input.current.value)}
					/>
				</div>
				<div
					onClick={() => dispatch(tougle())}
					className="mt-5 flex max-h-[89vh]  w-full flex-row flex-wrap justify-evenly gap-20 overflow-auto"
				>
					{textValue != ''
						? data &&
						  data.data.res
								.filter(
									(x) =>
										x.label
											.toLowerCase()
											.includes(
												textValue.toLowerCase()
											) ||
										x.field_item_name
											.toLowerCase()
											.includes(textValue.toLowerCase())
								)
								.map((product, index) => (
									<ProductCard
										key={index}
										label={product.label}
										nid={product.nid}
										discription={product.field_item_name}
										image={product.image}
										price={product.field_wholesale_price}
										loadingAllowed={true}
									/>
								))
						: ''}
				</div>
			</div>
		</div>
	);
}
