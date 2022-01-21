import { useRouter } from "next/router";
import { StepStyle, StepButtonStlye } from "../../components/Step";

const Steps = ({ current }) => {
	const router = useRouter()
	const goToRouter = name => router.push(`/steps/?page=${name}`);
	return (
		<StepStyle>
			<h4>Steps</h4>
			<p>{ current }</p>
			{
				current === 0 &&
				<div>
					<StepButtonStlye onClick={() => goToRouter("One")}>StepOne</StepButtonStlye>
					<StepButtonStlye onClick={() => goToRouter("Two")}>StepTwo</StepButtonStlye>
					<StepButtonStlye onClick={() => goToRouter("Three")}>StepThree</StepButtonStlye>
				</div>
			}
		</StepStyle>
	);
};

export default Steps;