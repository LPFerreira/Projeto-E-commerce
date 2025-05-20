import Cart from '../models/Cart.js'


async function getCart(request, response) {
    const cart = await Cart.find()

    return response.status(200).json(cart)
}
async function addToCart(request, response) {
    try {
        const { name, price, category, imagem, quantity } = request.body;

        if (!name || !price || !category || !imagem || !quantity) {
            return response.status(400).json({ message: "Dados incompletos." });
        }
        // Novo item no carrinho
        const newCartItem = new Cart({
            name,
            price,
            category,
            imagem,
            quantity,
        });

        await newCartItem.save();

        return response.status(201).json({ message: "Produto adicionado ao carrinho com sucesso." });
    } catch (error) {
        console.error("Erro ao adicionar ao carrinho:", error);
        return response.status(500).json({ message: "Erro interno do servidor." });
    }
}


async function deleteProdCart(request, response) {
    const id = request.params.id

    await Cart.findByIdAndDelete({ _id: id })

    return response.status(200).json({ response: "Product deleted" })
}

async function updateCartItem(request, response) {
    const id = request.params.id;
    const { name, price, category, imagem, quantity } = request.body;

    try {
        const updatedItem = await Cart.findByIdAndUpdate(
            id,
            { name, price, category, imagem, quantity },
            { new: true } 
        );

        if (!updatedItem) {
            return response.status(404).json({ message: "Produto não encontrado." });
        }

        return response.status(200).json(updatedItem);
    } catch (error) {
        console.error("Erro ao atualizar produto:", error);
        return response.status(500).json({ message: "Erro interno do servidor." });
    }
}


export { getCart, addToCart, deleteProdCart, updateCartItem }