import Knex from 'knex'

export async function seed(knex: Knex) {
  await knex('items').insert([
    { title: 'Lâmpadas', image: "lampadas.svg" },
    { title: 'Pilhas e Baterias', image: "baterias.svg" },
    { title: 'Ppéis e Papelão', image: "papeis-papelao.svg" },
    { title: 'Resíduos Orgânico', image: "organicos.svg" },
    { title: 'Eletrônicos', image: "eletronicos.svg" },
    { title: 'Óleo de Cozinha', image: "oleo.svg" },
  ])
}