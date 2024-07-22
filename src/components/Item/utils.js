export const filterByCategory = (items, category) => items.filter((item) => item.category === category)
export const findByProductId = (items, id) => items.find((item) => item.id === parseInt(id))