export const getItem = () => new Promise((resolve) => {
    setTimeout(() => {
        resolve([
            {
                id: 1,
                title: 'Celular',
                quantity: 5,
            },
            {
                id: 2,
                title: 'Notebook',
                quantity: 2
            },
            {
                id: 3,
                title: 'Zapatos',
                quantity: 3
            }
        ]);
    }, 2000);
});