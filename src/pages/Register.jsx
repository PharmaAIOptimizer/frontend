import ViewWrapper from '../components/ViewWrapper'
import LoginLink from '../components/LoginLink'
import React, { useEffect } from 'react'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom';

export default function Register() {
	const navigate = useNavigate(); // Initialize useNavigate hook
	const token = Cookies.get('token')

	useEffect(() => {
		if (token) {
			navigate('/home')
		}
	}, [])

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