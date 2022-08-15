import Item from '../models/item'
import ItemsList from './ItemsList'

interface sectionCellProps {
	title: string
	items: Item[]
}

const SectionCell = (props: sectionCellProps) => {
	return (
		<div className="flex flex-col lg:flex-row gap-4 lg:gap-24 justify-between">
			<h2 className="w-full lg:w-1/3 uppercase font-mono text-slate-500">
				{props.title}
			</h2>
			<div className="w-full flex flex-col gap-4">
				<ItemsList items={props.items}></ItemsList>
			</div>
		</div>
	)
}

export default SectionCell
