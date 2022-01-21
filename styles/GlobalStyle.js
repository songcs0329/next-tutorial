import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"

const GlabalStyle = createGlobalStyle`
	${reset}
	a {
		color: #ee66ee;
	}
	button {
		margin: 0;
		padding: 0;
		border: 0;
		background: 0;
		outline: none;
	}
	li {
		> strong {
			font-weight: bold;
			color: #2244ee;
		}
	}
`

export default GlabalStyle