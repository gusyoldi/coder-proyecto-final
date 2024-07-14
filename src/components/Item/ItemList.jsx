import { useEffect, useState } from "react"
import { getItem } from "../../products"
import Item from "./Item"

const ItemList = () => {
    const [products, setProducts] = useState([])

    // useEffect(() => {
    //     fetch('https://fakestoreapi.com/products')
    //         .then(response => {
    //             if (!response.ok) {
    //                 throw new Error('No pudimos traer los productos')
    //             }
    //             return response.json()
    //         })
    //         .then(data => setProducts(data))
    //         .catch(error => console.log("Error en el servicio", error))
    // }, [])


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
                <Item key={id} title={title} description={description} price={price} quantity={quantity} pictureUrl={image} />
            ))}
        </div>
    )
}

export default ItemList