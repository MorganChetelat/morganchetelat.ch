import Item from '../models/item'
import ItemCell from './ItemCell'

interface itemsListProps {
	items: Item[]
}

const ItemsList = (props: itemsListProps) => {
	const itemsList = props.items.map((item) => (
		<ItemCell key={item.title} item={item}></ItemCell>
	))

	return <>{itemsList}</>
}

export default ItemsList
