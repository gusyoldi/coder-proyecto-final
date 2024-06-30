import CartWidget from './CartWidget'

const NavBar = () => {
    return (
        <div className='flex justify-between items-center border-b border-white mb-2 px-2'>
            <h1 className="text-3xl font-bold">
                Mercado Liebre
            </h1>
            <CartWidget />
        </div>
    )
}

export default NavBar