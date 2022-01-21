import styled from "styled-components"

export const StepStyle = styled.div`
	display: inline-block;
	margin-top: 32px;
	padding: 16px;
	border: 1px solid #2244ee;
	> * {
		&:not(:first-child) {
			margin-top: 16px;
		}
	}
	> h4 {
		font-size: 20px;
		color: #2244ee;
		& + p {
			font-weight: bold;
			font-size: 18px;
			color: #333;
		}
	}
	> div {
		display: inline-block;
		padding: 16px;
		border: 1px solid #333;
	}
`

export const StepButtonStlye = styled.button`
	padding: 10px 16px;
	font-size: 14px;
	color: #fff;
	background-color: #2244ee;
	&:not(:first-child) {
		margin-left: 8px;
	}
`