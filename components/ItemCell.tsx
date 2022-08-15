import Item from '../models/item'

interface itemProps {
	item: Item
}

const ItemCell = (props: itemProps) => {
	return (
		<div className="flex flex-col justify-start w-full">
			<a href={props.item.link}>
				<h3 className="text-xl text-slate-900">{props.item.title}</h3>
			</a>
			<p className="text-slate-500">{props.item.content}</p>
		</div>
	)
}

export default ItemCell
