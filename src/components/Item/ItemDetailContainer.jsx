import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProducts } from "../../data/products"
import ItemDetail from "./ItemDetail"
import { findByProductId } from "./utils"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const { id: itemId } = useParams()

    useEffect(() => {
        const fetchItem = async () => {
            try {
                const data = await getProducts()
                const item = itemId ? findByProductId(data, itemId) : data
                setProduct(item)
            }
            catch (err) {
                console.log("Error en el servicio de productos", err)
            }
        }
        fetchItem()

    }, [itemId])

    const { id, title, description, price, quantity } = product

    return (
        <div className="bg-white rounded-m w-[1200px] mx-auto">
            <ItemDetail key={id} title={title} description={description} price={price} quantity={quantity} pictureUrl='public/vite.svg' />
        </div>
    )
}

export default ItemDetailContainer