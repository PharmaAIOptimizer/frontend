import ViewWrapper from '../components/ViewWrapper'
import LoginLink from '../components/LoginLink'
import React from 'react'

export default function Register() {
	return (
		<div className="flex flex-col gap-4">
			<div className="flex flex-row gap-4 w-full h-screen">
				<ViewWrapper>
					<LoginLink />
				</ViewWrapper>
			</div>
		</div>
	)
}
