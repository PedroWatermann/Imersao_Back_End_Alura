// Importa o framework Express para criar o servidor.
import express from "express";

// Importa as rotas configuradas em postsRoutes.js.
import routes from "./src/routs/postsRoutes.js";

// Cria uma instância da aplicação Express.
const app = express();

app.use(express.static("uploads"));

// Aplica as rotas definidas no arquivo postsRoutes.js à aplicação.
routes(app);

// Define a porta onde o servidor irá escutar (neste caso, porta 3000).
app.listen(3000, () => 
    {
        // Exibe uma mensagem no console quando o servidor está rodando.
        console.log("Servidor escutando!");
    }
);


// app.get("/exercicio/:id", (req, res) =>
//     {
//         const index = req.params.id;
//         const post = buscaPost(index);
//         if (post === -1) 
//         {
//             res.status(404).send("<body style=\"background-color: #202124; color: gold; text-align:center;\"> <img src=\"https://http.cat/images/404.jpg\" style=\"width: 600px; height: 500px;\"> <p style=\"font-size: 40px;\"> Ooops! <br> Página não encontrada.</p> </body>");
//         }
//         else
//         {
//             res.status(200).json(posts[post]);
//         }
//     }
// );