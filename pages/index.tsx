import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import moi from '../public/moi.jpg'
import SectionsList from '../components/SectionsList'
import AboutMe from '../components/AboutMe'
import dataFile from '../data.json'
import { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Data from '../models/data'

const Home: NextPage = () => {
	const [data, setData] = useState<Data>({
		sections: [],
		aboutMe: '',
	})

	useEffect(() => {
		setData(dataFile)
	}, [])

	if (data.aboutMe.length == 0) {
		return (
			<div>
				<h1 className="max-w-xl mx-auto text-4xl font-slate-900">
					Chargement...
				</h1>
			</div>
		)
	}

	return (
		<div>
			<Head>
				<title>Morgan Chételat</title>
			</Head>
			<body className="p-0 m-0 flex min-h-screen flex-col">
				<header className="max-w-5xl mt-24 mx-auto px-4 md:px-8">
					<div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-24">
						<div className="w-36 md:w-44 text-center md:text-left">
							<Image
								src={moi}
								className="rounded-full hidden md:block"
								alt="photo de Morgan Chételat"
							></Image>
						</div>
						<div>
							<h1 className="text-4xl text-center md:text-left font-bold text-slate-900 mb-1">
								Morgan Chételat
							</h1>
							<p className="text-xl text-center md:text-left text-slate-500">
								Etudiant & développeur web/mobile dans mon temps
								libre
							</p>
							<div className="mt-4 flex justify-center md:justify-start gap-8 text-sm font-mono text-slate-500">
								<a href="https://twitter.com/MorganChetelat">
									TWITTER
								</a>
								<a href="https://github.com/MorganChetelat">
									GITHUB
								</a>
								<a href="mailto:morgan@morganchetelat.ch">
									MAIL
								</a>
							</div>
						</div>
					</div>
				</header>
				<main className="mt-16 md:mt-24 max-w-5xl mx-auto px-4 md:px-8 mb-8">
					<AboutMe aboutMe={data.aboutMe}></AboutMe>
					<SectionsList sections={data.sections}></SectionsList>
				</main>
				<Footer></Footer>
			</body>
		</div>
	)
}

export default Home
