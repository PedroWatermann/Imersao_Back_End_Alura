// Importa a função de conexão ao banco de dados do arquivo dbConfig.js.
import 'dotenv/config';
import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbConfig.js";

// Aguarda a conexão com o banco de dados usando a string de conexão armazenada nas variáveis de ambiente.
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Função que busca todos os posts na coleção "posts" do banco de dados.
export async function getTodosPosts()
{
    // Acessa o banco de dados com o nome "imersao-instabytes".
    const db = conexao.db("imersao-instabytes");

    // Acessa a coleção "posts" dentro do banco de dados.
    const colecao = db.collection("posts");

    // Retorna todos os documentos da coleção como um array.
    return colecao.find().toArray();
}

export async function criarPost(novoPost) {
    const db = conexao.db("imersao-instabytes");
    const colecao = db.collection("posts");
    return colecao.insertOne(novoPost); 
}

export async function atualizarPost(id, novoPost) {
    const db = conexao.db("imersao-instabytes");
    const colecao = db.collection("posts");

    const objId = ObjectId.createFromHexString(id);
    return colecao.updateOne({_id: new ObjectId(objId)}, {$set: novoPost});
}