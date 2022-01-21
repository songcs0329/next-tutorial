import { useRouter } from "next/router";

const Steps = ({ current }) => {
	const router = useRouter()
	const goToRouter = name => router.push(`/steps/?page=${name}`);
	return (
		<>
			<h4>Steps</h4>
			<p>{ current }</p>
			<div>
				<button onClick={() => goToRouter("One")}>StepOneComponent</button>
				<button onClick={() => goToRouter("Two")}>StepTwoComponent</button>
				<button onClick={() => goToRouter("Three")}>StepThreeComponent</button>
			</div>
		</>
	);
};

export default Steps;