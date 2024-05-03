import React, { useEffect } from 'react'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom';

export default function Help() {
	const navigate = useNavigate(); // Initialize useNavigate hook
	const token = Cookies.get('token')

	useEffect(() => {
		if (!token) {
			navigate('/')
		}
	}, [])

	return (
		<div className="flex flex-col gap-4 bg-neutral-150">
			<div className="w-full h-screen">
				<strong>What is PAPO?</strong>
				<br />
				<br />
				The nature of the problem at hand revolves around the client's manual and time-consuming drug procurement processes, characterized by the need for constant evaluation of alternatives based on price, quantity, and packaging. Additionally, the criticality of specific drugs necessitates a precise and timely restocking strategy. Our final deliverable aims to address these challenges comprehensively through an AI-driven procurement solution.
				<br />
				<br />
				This solution comprises a three-tiered technical approach: continuous stock monitoring and replenishment based on live feed analysis, intelligent recommendations for alternative drug replacements drawn from the pharmacy's database, and the development of a user-friendly interface based on client feedback. The proposed model offers innovative features such as dynamic stock monitoring, intelligent alternative recommendations prioritized by cost, dosage preference, and packaging, and a user-centric interface tailored to streamline the buyer's decision-making process. This solution is poised to significantly optimize the client's drug procurement workflow, ensuring efficiency, accuracy, and responsiveness to critical drug restocking requirements.
				<br />
				<br />
				<i>For any other issues, please contact us at help@papoai.net.</i>
			</div>
		</div>
	)
}
