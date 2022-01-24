import db from "../../lib/db"

export default async function handler(req, res) {
	const queryString = "SELECT * FROM news"
	try {
		const results = await db.query(queryString)
		console.log("/api/news", results)
		res.json(results)
	} catch (error) {
		console.log(error)
		res.json(error)
	}
}