import ItemCount from "./ItemCount"

const ItemDetail = ({ title, description, price, quantity, pictureUrl }) => {
    return (
        <div className="flex border-b-2 py-5 pl-5 pr-14 gap-10">
            <img className="w-[60%]" src={pictureUrl} alt={`${title}-img`} />
            <div className="flex justify-between gap-5 text-left flex-col">
                <h3 className="font-bold text-xl">{title}</h3>
                <span className="text-3xl font-extralight">${price}</span>
                <p className="font-light text-xs max-w-[70%]">{description}</p>
                <ItemCount stock={quantity} />
                <div className="flex flex-col gap-2">
                    <button onClick={() => { console.log('Comprar') }} className="bg-blue-500 text-white text-sm rounded-md px-8 py-3  hover:bg-blue-600 ease-in transition duration-200 tracking-wider">Comprar ahora</button>
                    <button onClick={() => { console.log('Agregar al carrito') }} className="bg-blue-100 text-blue-500 text-sm rounded-md px-12 py-3 hover:bg-blue-200 ease-in transition duration-200 tracking-wider">Agregar al carrito</button>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail