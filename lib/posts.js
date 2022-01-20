import fs from "fs"
import matter from "gray-matter"
import path from "path"
import { remark } from "remark"
import remarkHtml from "remark-html"

const postsDirectory = path.join(process.cwd(), "posts")

export const getSortedPostsData = () => {
	const fileNames = fs.readdirSync(postsDirectory)
	const allPostsData = fileNames.map(fileName => {
		const id = fileName.replace(/\.md$/, "")
		const fullPath = path.join(postsDirectory, fileName)
		const fileContents = fs.readFileSync(fullPath, "utf8")
		const matterResult = matter(fileContents)
		return {
			id,
			...matterResult.data
		}
	})

	return allPostsData.sort(({date: a}, {date: b}) => {
		if(a < b) return 1
		else if(a > b) return -1
		else return 0
	})
}

export const getAllPostIds = () => {
	const fileNames = fs.readdirSync(postsDirectory)
	return fileNames.map(fileName => {
		return {
			params: {
				id: fileName.replace(/\.md$/, "")
			}
		}
	})
}

export const getPostData = async (id) => {
	const fullPath = path.join(postsDirectory, `${id}.md`)
	const fileContents = fs.readFileSync(fullPath, "utf8")
	const matterResult = matter(fileContents)
	const processedContent = await remark()
	.use(remarkHtml)
	.process(matterResult.content)
	const contentHtml = processedContent.toString()

	return {
		id,
		contentHtml,
		...matterResult.data
	}
}