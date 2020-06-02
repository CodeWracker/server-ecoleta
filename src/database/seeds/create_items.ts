import Knex from "knex";

export async function seed(knex: Knex) {
  await knex("items").insert([
    { titulo: "Lâmpadas", image: "lampada.svg" },
    { titulo: "Pilhas", image: "baterias.svg" },
    { titulo: "Papéis e Papelão", image: "papeis-papelao.svg" },
    { titulo: "Resíduos Eletrônicos", image: "eletronicos.svg" },
    { titulo: "Resíduos Organicos", image: "organicos.svg" },
    { titulo: "Óleo de Cozinha", image: "oleo.svg" },
  ]);
}
