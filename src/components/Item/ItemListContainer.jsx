import ItemsFilter from '../ItemsFilter'
import ItemList from './ItemList'

const ItemListContainer = () => {
    return (
        <div className="text-center border rounded-md w-[70%] mx-auto bg-white">
            <ItemsFilter />
            <ItemList />
        </div>
    )
}

export default ItemListContainer