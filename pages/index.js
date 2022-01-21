import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import useSWR from "swr";
import Date from "../components/date";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import { userInfoState } from "../store";
import utilStyles from "../styles/utils.module.css"

const fetcher = async (url) => {
	const { data } = await axios.get(url)
  return data
}

export default function Home({ allPostsData }) {
	const { data } = useSWR("https://jsonplaceholder.typicode.com/todos/1", fetcher)
	console.log("swr", data)
	const [user, setUser] = useRecoilState(userInfoState)
	console.log("useRecoilState inInit", user)
	const [value, setValue] = useState("")
	const handleValue = e => setValue(e.target.value)

	const handleLogout = () => {
		console.log("handleLogout")
		setUser(user => {
			return {
				...user,
				isLogin: false
			}
		})
	}

	useEffect(() => {
		if(value) console.log(value)
	}, [data && value])
	
	if(!data) return <div>loading....</div>
  return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={utilStyles.headingMd}>
				<input type="text" value={value} onChange={handleValue} />
				{
					user.isLogin ?
					<ul>
						<li>recoil name: <strong>{user.name}</strong></li>
						<li>recoil email: <strong>{user.email}</strong></li>
						<li>rocoil isLogin: <button onClick={handleLogout}>LOGOUT</button></li>
					</ul>
					: <Link href={`/steps`}>
						<a>Go Steps</a>
					</Link>
				}
				<ul>
					<li>useSWR userId: <strong>{data.userId}</strong></li>
					<li>useSWR id: <strong>{data.id}</strong></li>
					<li>useSWR title: <strong>{data.title}</strong></li>
					<li>useSWR completed: <strong>{data.completed.toString()}</strong></li>
				</ul>
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
	console.log("====== getSortedPostsData, allPostsData ======")
	console.log(allPostsData)
	return {
		props: {
			allPostsData
		}
	}
}