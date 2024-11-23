// Importa uma biblioteca de conexão com o banco de dados, provavelmente MongoDB.
import { MongoClient } from "mongodb";

// Função que conecta ao banco de dados usando uma string de conexão.
export default async function conectarAoBanco(stringConexao)
{
    // Cria uma nova instância do cliente MongoDB.
    const cliente = new MongoClient(stringConexao);

    // Tenta conectar ao banco de dados e retorna o cliente conectado.
    try {
        await cliente.connect();
        console.log("Conectado ao banco de dados com sucesso!");
        return cliente;
    } catch (error) {
        // Exibe um erro caso a conexão falhe.
        console.error("Erro ao conectar ao banco de dados:", error);
        throw error;
    }
}
