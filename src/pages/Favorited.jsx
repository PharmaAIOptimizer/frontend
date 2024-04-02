import React from 'react'
import FavoritedTable from '../components/FavoritedTable'
import { SAMPLE_HISTORY } from '../lib/constants'


export default function Favorited() {
	return (
		<div className="flex flex-col gap-4">
			<div className="flex flex-row gap-4 w-full h-screen">
				<FavoritedTable data={SAMPLE_HISTORY} />
			</div>
		</div>
	)
}
