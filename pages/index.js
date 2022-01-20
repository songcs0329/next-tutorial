import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import useSWR from "swr";
import Date from "../components/date";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import utilStyles from "../styles/utils.module.css"

const fetcher = async (url) => {
	const { data } = await axios(url)
  return data
}

export default function Home({ allPostsData }) {
	const { data } = useSWR("https://jsonplaceholder.typicode.com/todos/1", fetcher)
	console.log("swr", data);
	
  return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={utilStyles.headingMd}>
				<p>Hello World</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
			</section>
			<section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
				<h2 className={utilStyles.headingLg}>Blog</h2>
				<ul className={utilStyles.list}>
					{
						allPostsData.map(({ id, date, title }) => {
							return (
								<li key={id} className={utilStyles.listItem}>
									<Link href={`/posts/${id}`}>
										<a>{title}</a>
									</Link>
									<br />
									<small className={utilStyles.lightText}>
										<Date dateString={date} />
									</small>
									<br />
								</li>
							)
						})
					}
				</ul>
			</section>
		</Layout>
  )
}

export const getStaticProps = async () => {
	const allPostsData = getSortedPostsData()
	return {
		props: {
			allPostsData
		}
	}
}