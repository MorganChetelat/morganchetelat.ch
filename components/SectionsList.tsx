import Section from '../models/section'
import SectionCell from './SectionCell'

interface sectionsListProps {
	sections: Section[]
}

const SectionsList = (props: sectionsListProps) => {
	const sectionList: JSX.Element[] = props.sections.map((section) => (
		<SectionCell
			key={section.title}
			title={section.title}
			items={section.items}
		></SectionCell>
	))

	return <div className="flex flex-col gap-8">{sectionList}</div>
}

export default SectionsList
