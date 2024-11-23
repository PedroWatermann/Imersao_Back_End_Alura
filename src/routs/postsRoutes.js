// Importa o framework Express para configurar as rotas.
import express from "express";
import multer from "multer";
import cors from "cors";

const corsOptions = {
    origin: "http://localhost:8000",
    optionsSuccessStatus: 200
}

// Importa a função 'listarPosts' do controlador de posts.
import { listarPosts, postarNovoPost, uploadImagem, atualizarNovoPost } from "../controllers/postsController.js";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ dest: "./uploads", storage });

// Define uma função para configurar as rotas.
const routes =
    (app) => {
        // Middleware que converte o corpo das requisições em JSON.
        app.use(express.json());
        app.use(cors(corsOptions));

        // Rota GET que responde ao caminho "/posts", chamando a função 'listarPosts'.
        app.get("/posts", listarPosts);

        app.post("/posts", postarNovoPost);
        app.post("/upload", upload.single("imagem"), uploadImagem);

        app.put("/upload/:id", atualizarNovoPost);
    }

// Exporta as rotas para serem usadas em outros arquivos.
export default routes;
