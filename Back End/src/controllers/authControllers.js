import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";

dotenv.config();

const SECRET = process.env.SECRET;

const login = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });

        if (!user) {
            return res.status(401).json({
                statusCode: 401,
                message: "Usuário não encontrado!",
                data: { email: req.body.email }
            });
        }

        const isPasswordValid = bcrypt.compareSync(req.body.password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({
                statusCode: 401,
                message: "Senha incorreta!"
            });
        }

        const token = jwt.sign({ name: user.name, email: user.email }, process.env.SECRET, {
            expiresIn: 60 * 60 // 1 hora
        });

        return res.status(200).json({
            statusCode: 200,
            message: "Login realizado com sucesso!",
            data: { token }
        });

    } catch (error) {
        console.error("Erro no login:", error);
        return res.status(500).json({
            statusCode: 500,
            message: "Erro interno no servidor",
            error: error.message
        });
    }
};

const verificarToken = (req, res, next) => {
    const tokenHeader = req.headers["authorization"];
    const token = tokenHeader && tokenHeader.split(" ")[1];

    if (!token) {
        return res.status(401).json({
            statusCode: 401,
            message: "Token não fornecido!",
        });
    }

    try {
        jwt.verify(token, SECRET);
        next();
    } catch (error) {
        return res.status(403).json({
            statusCode: 403,
            message: "Token inválido ou expirado"
        });
    }
};

export default {
    login,
    verificarToken
};
