import { useEffect, useState } from "react"
import { getProduct } from "../../data/singleProduct"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})

    useEffect(() => {
        const fetchItem = async () => {
            try {
                const data = await getProduct()
                setProduct(data)
            }
            catch (err) {
                console.log("Error en el servicio de productos", err)
            }
        }
        fetchItem()
        console.log(product)
    }, [])

    const { id, title, description, price, quantity, image } = product

    return (
        <div className="bg-white rounded-m w-[1200px] mx-auto">
            <ItemDetail key={id} title={title} description={description} price={price} quantity={quantity} pictureUrl='public/vite.svg' />
        </div>
    )
}

export default ItemDetailContainer