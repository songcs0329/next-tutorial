import axios from "axios";
import { useRouter } from "next/router"
import useSWR from "swr";

const fetcher = async (url) => {
	try {
		const response = await axios.get(url)
		return response.data	
	} catch (error) {
		console.log(error);
	}
} 

const News = () => {
	const router = useRouter()
	const { data } = useSWR(`/api${router.pathname}`, fetcher)
	
	if(!data) return (<div>Loading....</div>)
	return (
		<ul>
			{
				data.map(item => {
					return (
						<li key={item.Idx}>
							<strong>{item.Title}</strong>
							<span>{item.Contents}</span>
						</li>
					)
				})
			}
		</ul>
	)
}

export default News