import { Router } from 'express'
import { getUsers, createUser, deleteUser } from './controllers/UserController.js'
import { getProducts, createProduct, deleteProduct } from './controllers/ProductController.js'
import { getCart, addToCart, deleteProdCart, updateCartItem } from './controllers/CartController.js' 
import { rotaAutenticada } from "./controllers/UserController.js"
import  authControllers from "./controllers/authControllers.js";

const routes = Router()

routes.get('/users', getUsers)
routes.post('/users', createUser)
routes.delete('/users/:id', deleteUser)

routes.get('/products', getProducts)
routes.post('/products', createProduct)
routes.delete('/products/:id', deleteProduct)

routes.get('/cart', getCart)
routes.post('/cart', authControllers.verificarToken, addToCart)
routes.delete('/cart/:id', deleteProdCart)
routes.put('/cart/:id', updateCartItem);

routes.get("/", authControllers.verificarToken);
routes.get("/teste", async (req, res) => {
    return res.json({
        msg: "teste realizado"
    })
})
routes.post("/login", authControllers.login)
routes.get("/rotaAutenticada", authControllers.verificarToken, rotaAutenticada);


export default routes