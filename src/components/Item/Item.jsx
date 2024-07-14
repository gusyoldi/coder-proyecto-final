const Item = ({ title, description, price, quantity, pictureUrl }) => {
    return (
        <div className="flex border-b-2 py-5 pl-5 pr-14 gap-10">
            <img className="w-48" src={pictureUrl} alt={`${title}-img`} />
            <div className="flex gap-4 text-left flex-col">
                <h3>{title}</h3>
                <span>${price}</span>
                <button onClick={() => { console.log('Mostrar descripción') }} className="bg-blue-100 text-blue-500 text-sm rounded-md px-12 py-2 hover:bg-blue-200 ease-in transition duration-200">Ver detalle del poducto</button>
            </div>
        </div>
    )
}

export default Item