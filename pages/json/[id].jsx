import tests from "../../json/tests.json"

const Json = ({ test }) => {
	console.log('Json Component', test)
	if(!test) return <div>testing...</div>
	return (
		<>
			<h1>{test.title}</h1>
			<h2>{test.content}</h2>
		</>
	)
}

export function getStaticProps({ params }) {
	const test = tests[params.id]
	return {
		props: {
			test
		}
	}
}

export function getStaticPaths() {
	console.log("====== getStaticPaths ======")
	const testsPath = Object.keys(tests).map(testName => {
		return {
			params: {
				id: testName
			}
		}
	})
	console.log(testsPath)
	return {
		paths: testsPath,
		fallback: false,
	}
}

// Next v9 이상부터 잘 안쓴다.
// Json.getInitialProps = function(context) {
// 	const test = tests[context.query.id]
// 	console.log("====== getInitialProps ======")
// 	console.log(test)
// 	return {
// 		test
// 	}
// }

export default Json
