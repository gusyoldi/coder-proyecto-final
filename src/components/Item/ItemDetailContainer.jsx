import { useEffect, useState } from "react"
import { getItem } from "../../products"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const data = await getItem()
                setProducts(data)
            }
            catch (err) {
                console.log("Error en el servicio de productos", err)
            }
        }
        fetchItems()
        console.log(products)
    }, [])

    return (
        <div>
            {products?.map(({ id, title, description, price, quantity, image }) => (
                <ItemDetail key={id} title={title} description={description} price={price} quantity={quantity} pictureUrl={image} />
            ))}
        </div>
    )
}

export default ItemDetailContainer