import React from 'react';

export default function Intro({ intros }) {
	return (
		<div className="relative flex flex-row-reverse flex-wrap justify-evenly pt-5">
			{intros.map((item, index) => (
				<a
					style={{
						width: item.aspectRatio == '1/1' ? '23%' : '100%',
						minWidth: '150px',
					}}
					className="m-1 rounded-xl shadow-xl transition-all hover:shadow-2xl"
					key={index}
					href={item.link}
				>
					<img
						className="w-full rounded-xl object-cover"
						src={item.src}
						alt="intro"
						style={{
							aspectRatio: item.aspectRatio,
						}}
					/>
				</a>
			))}
		</div>
	);
}
