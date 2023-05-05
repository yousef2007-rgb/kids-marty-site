import React, { useState } from 'react';
import SearchButton from './SearchButton';
import SearchBody from './SearchBody';

import { useSelector } from 'react-redux';

export default function Searching() {
	const searchVisability = useSelector((state) => state.searchVisability);
	return (
		<div className="mx-2 flex h-28 w-6 cursor-pointer items-center border-t-4 border-transparent hover:border-secondery ">
			<SearchBody visability={searchVisability} />
			<SearchButton searchVisability={searchVisability} />
		</div>
	);
}
