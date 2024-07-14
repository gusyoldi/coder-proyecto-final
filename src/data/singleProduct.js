export const getProduct = () => new Promise((resolve) => {
    setTimeout(() => {
        resolve(
            {
                id: 1,
                title: 'Celular',
                price: 120300,
                quantity: 5,
                description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias exceptuia animi, id est laborum et dolorum fuga. Et hasimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
            },
        );
    }, 2000);
});