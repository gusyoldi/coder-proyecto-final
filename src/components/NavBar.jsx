import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'

const NavBar = () => {
    return (
        <div className='flex justify-between h-24 items-center bg-yellow-300 border-b border-white mb-12 px-10'>
            <Link to='/'>
                <h1 className="text-3xl font-bold">
                    Mercado Liebre
                </h1>
                <span>más rapido que otros...</span>
            </Link>

            <CartWidget />
        </div >
    )
}

export default NavBar