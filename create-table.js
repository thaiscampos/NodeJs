import { sql } from "./db.js";

//sql`DROP TABLE IF EXISTS video;`.then(() => {
// console.log("tabela excluida");
//});
sql`
CREATE TABLE video (
    id TEXT PRIMARY KEY,
    titulo TEXT,
    descricao TEXT,
    duracao INTEGER
);`.then(() => {
  console.log("Tabela criada!");
});
