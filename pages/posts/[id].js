import Head from 'next/head'
import Date from '../../components/date'
import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import utilStyles from '../../styles/utils.module.css'

export default function Post({ postData }) {
  return (
		<Layout>
			<Head>
				<title>{postData.title}</title>
			</Head>
			<h1 className={utilStyles.headingXl}>{postData.title}</h1>
			<div className={utilStyles.lightText}>
				<Date dateString={postData.date} />
			</div>
			<div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
		</Layout>
	)
}

export const getStaticProps = async ({ params }) => {
	console.log("====== getStaticProps ======")
	console.log(params)
	const postData = await getPostData(params.id)
	console.log(`====== getPostData(${params.id}), postData ======`)
	console.log(postData)
	return {
		props: {
			postData
		}
	}
}

export const getStaticPaths = async () => {
	const paths = getAllPostIds()
	console.log("====== getAllPostIds, paths ======")
	console.log(paths)
	return {
		paths,
		fallback: false,
	}
}