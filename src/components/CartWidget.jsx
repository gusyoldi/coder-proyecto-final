import { ShoppingCart } from 'lucide-react'


const CartWidget = () => {
    return (
        <div className="flex flex-col p-2">
            <ShoppingCart />
            <div className='m-auto'>1</div>
        </div>
    )
}

export default CartWidget

