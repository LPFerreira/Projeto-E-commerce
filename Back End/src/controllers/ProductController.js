import Product from '../models/Product.js'


async function getProducts(request, response) {
  const products = await Product.find()

  return response.status(200).json(products)
}

async function createProduct(request, response) {
  const product = request.body

  const newProduct = await Product.create(product)

  return response.status(201).json({ response: "Product registrado com sucesso" })
}

async function deleteProduct(request, response){
  const id = request.params.id

  await Product.findByIdAndDelete({ _id: id })

  return response.status(200).json({ response: "Product deleted"})
}

export { getProducts, createProduct, deleteProduct }