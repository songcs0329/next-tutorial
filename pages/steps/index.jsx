import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { counterState, multipleCounterState, userInfoState } from "../../store";
import Steps from "./Steps";

const components = [
  { page: "Intro", component: "IntroComponent" },
  { page: "One", component: "StepOneComponent" },
  { page: "Two", component: "StepTwoComponent" },
  { page: "Three", component: "StepThreeComponent" }
];

const Index = () => {
	console.log('rendered Steps Index');
	const router = useRouter()
	const user = useRecoilValue(userInfoState)
	console.log('inStep', user)
	const [counter, setCounter] = useRecoilState(counterState)
	const multiple = useRecoilValue(multipleCounterState)
	const [currentIndex, setCurrentIndex] = useState(0)

	const handleCounter = e => setCounter(e.target.value)

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
				<input type="number" value={counter} onChange={handleCounter} />
				<ul>
					<li>counter: <strong>{counter}</strong></li>
					<li>multiple <strong>{multiple}</strong></li>
				</ul>
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