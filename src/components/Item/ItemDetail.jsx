import ItemCount from "./ItemCount"

const ItemDetail = ({ title, description, price, quantity, img }) => {
    return (
        <div className="flex border-b-2 py-5 pl-5 pr-14 gap-10">
            <img className="w-48" src={img} alt={`${title}-img`} />
            <div className="flex gap-4 text-left flex-col">
                <h3>{title}</h3>
                <span>${price}</span>
                <p className="font-light text-xs max-w-[70%]">{description}</p>
                <ItemCount stock={quantity} />
            </div>
        </div>
    )
}

export default ItemDetail