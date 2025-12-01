import { sql } from "./db.js";

sql`
CREATE TABLE video (
    titulo TEXT,
    descricao TEXT,
    duracao INTEGER
);`.then(() => {
  console.log("Tabela criada!");
});
