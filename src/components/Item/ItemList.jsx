import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProducts } from "../../data/products"
import Item from "./Item"
import { filterByCategory } from "./utils"

const ItemList = () => {
    const [products, setProducts] = useState([])
    const { id: categoryId } = useParams()

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const data = await getProducts()
                const filteredByCategoryId = categoryId ? filterByCategory(data, categoryId) : data
                setProducts(filteredByCategoryId)
            }
            catch (err) {
                console.log("Error en el servicio de productos", err)
            }
        }
        fetchItems()

    }, [categoryId])

    return (
        <div>
            {products?.map(({ id, title, description, price, quantity, image }) => (
                <Item key={id} id={id} title={title} description={description} price={price} quantity={quantity} pictureUrl={image} />
            ))}
        </div>
    )
}

export default ItemList