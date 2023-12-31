import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
export default function Logo({}) {
	const { lang } = useRouter().query;
	return (
		<Link
			className=" h-fit flex-1"
			href={`/?lang=${lang == 'arabic' ? 'arabic' : 'english'}`}
		>
			<img
				className="w-3/4 max-w-[176px] "
				src="/Assets/images/kids-marty-logo.png"
				alt="Kids Marty logo"
			/>
		</Link>
	);
}
