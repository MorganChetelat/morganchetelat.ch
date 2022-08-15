interface aboutMeProps {
	aboutMe: string
}

const AboutMe = (props: aboutMeProps) => {
	return (
		<div className="flex flex-col lg:flex-row gap-4 lg:gap-24 justify-between mb-8">
			<h2 className="w-full md:w-1/3 uppercase font-mono text-slate-500">
				A propos de moi
			</h2>
			<p className="w-full text-slate-500">{props.aboutMe}</p>
		</div>
	)
}

export default AboutMe
