import { RecoilRoot } from "recoil"
import "../styles/global.css"
import GlabalStyle from "../styles/GlobalStyle"

const App = ({ Component, pageProps }) => {
	return (
		<RecoilRoot>
			<GlabalStyle />
			<Component {...pageProps} />
		</RecoilRoot>
	)
}

export default App