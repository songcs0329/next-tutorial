import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import { useRecoilValue } from "recoil";
import { userInfoState } from "../../store";
import Steps from "./Steps";

const components = [
  { page: "Intro", component: "IntroComponent" },
  { page: "One", component: "StepOneComponent" },
  { page: "Two", component: "StepTwoComponent" },
  { page: "Three", component: "StepThreeComponent" }
];

const Index = () => {
	const router = useRouter()
	const user = useRecoilValue(userInfoState)
	console.log('inStep', user)
	const [currentIndex, setCurrentIndex] = useState(0)

	const pageIndex = useMemo(() => {
		console.log(router.query)
		const { page } = router.query
		return page !== undefined ? page : "Intro"
	}, [router.query])

	useEffect(() => {
		const routeIndex = components.findIndex(component => component.page === pageIndex)
		setCurrentIndex(routeIndex)
	}, [pageIndex])

	return (
		<>
			<div>
				{
					!user.isLogin &&
						<ul>
							<li>{user.name}</li>
							<li>{user.email}</li>
						</ul>
				}
			</div>
			<Steps current={currentIndex} />
		</>
	)
}

export default Index