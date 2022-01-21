import "../styles/global.css"
import GlabalStyle from "../styles/GlobalStyle"

const App = ({ Component, pageProps }) => {
	return (
		<>
			<GlabalStyle />
			<Component {...pageProps} />
		</>
	)
}

export default App