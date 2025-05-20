import User from '../models/User.js'
import bcrypt from "bcrypt";

async function getUsers(request, response) {
  const users = await User.find()

  return response.status(200).json(users)
}

async function createUser(request, response) {
  try {
    const { name, email, password } = request.body
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ name, email, password: hashedPassword });

    return response.status(201).json({ response: "Registrado com sucesso" });
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }

}

async function deleteUser(request, response){
  const id = request.params.id

  await User.findByIdAndDelete({ _id: id })

  return response.status(200).json({ response: "User deleted"})
}
//---------------//

const rotaAutenticada = async (req, res) => {
    res.status(200).json({
        statusCode: 200,
        message: "Rota autenticada"
    })
}

export { getUsers, createUser, 
    deleteUser, rotaAutenticada }