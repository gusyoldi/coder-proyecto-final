import { Link } from 'react-router-dom'

const categories = [
    { id: 'phones', label: 'Celulares' },
    { id: 'wearables', label: 'Auriculares' },
    { id: 'accessories', label: 'Accesorios' },
]

const ItemsFilter = () => {
    return (
        <ul className='flex justify-center p-4 bg-yellow-100'>
            {categories.map(({ id, label }) => (
                <li key={id}><Link to={`/category/${id}`} className='"bg-blue-100 text-blue-500 text-sm rounded-md px-12 py-2 hover:text-blue-600 ease-in transition duration-200'>{label}</Link></li>
            ))}
        </ul>
    )
}

export default ItemsFilter