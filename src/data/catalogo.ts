import type { Produto, Promocao } from "../types/catalogo";

// Produtos cadastrados no catálogo.
export const produtos: Produto[] = [
  { id: "01", nome: "Leite integral", preco: 6.49, unidade: "1 litro", categoria: "Leites" },
  { id: "02", nome: "Leite desnatado", preco: 6.29, unidade: "1 litro", categoria: "Leites" },
  { id: "03", nome: "Iogurte natural", preco: 4.59, unidade: "170 g", categoria: "Iogurtes" },
  { id: "04", nome: "Iogurte de morango", preco: 4.99, unidade: "170 g", categoria: "Iogurtes" },
  { id: "05", nome: "Queijo prato fatiado", preco: 13.90, unidade: "200 g", categoria: "Queijos" },
  { id: "06", nome: "Queijo muçarela fatiado", preco: 12.90, unidade: "200 g", categoria: "Queijos" },
  { id: "07", nome: "Manteiga com sal", preco: 12.49, unidade: "200 g", categoria: "Manteigas" },
  { id: "08", nome: "Requeijão cremoso", preco: 9.90, unidade: "200 g", categoria: "Requeijões" },
  { id: "09", nome: "Muçarela de búfala", preco: 17.90, unidade: "250 g", categoria: "Queijos" },
  { id: "10", nome: "Doce de leite", preco: 14.50, unidade: "400 g", categoria: "Doces" },
];

// Promoções com fotografias armazenadas no próprio aplicativo.
export const promocoes: Promocao[] = [
  {
    id: "p01", produtoId: "01", nomeProduto: "Leite integral",
    tipo: "Leve X, pague Y", descricao: "Leve 3 unidades e pague apenas 2.",
    precoPromocional: 12.98, unidadeOferta: "pelas 3 unidades",
    imagem: require("../../assets/images/leite.jpg"),
  },
  {
    id: "p02", produtoId: "03", nomeProduto: "Iogurte natural",
    tipo: "Acima de X unidades", descricao: "Comprando 4 ou mais unidades, cada uma sai por R$ 3,49.",
    precoPromocional: 3.49, unidadeOferta: "por unidade (mín. 4)",
    imagem: require("../../assets/images/iogurte.jpg"),
  },
  {
    id: "p03", produtoId: "05", nomeProduto: "Queijo prato fatiado",
    tipo: "Cartão da loja", descricao: "Preço especial para quem paga com o cartão do mercado.",
    precoPromocional: 10.90, unidadeOferta: "por pacote de 200 g",
    imagem: require("../../assets/images/queijo.jpg"),
  },
  {
    id: "p04", produtoId: "07", nomeProduto: "Manteiga com sal",
    tipo: "Leve X, pague Y", descricao: "Leve 2 unidades e pague apenas 1.",
    precoPromocional: 12.49, unidadeOferta: "pelas 2 unidades",
    imagem: require("../../assets/images/manteiga.jpg"),
  },
  {
    id: "p05", produtoId: "09", nomeProduto: "Muçarela de búfala",
    tipo: "Acima de X unidades", descricao: "Comprando 3 ou mais unidades, cada uma sai por R$ 13,99.",
    precoPromocional: 13.99, unidadeOferta: "por unidade (mín. 3)",
    imagem: require("../../assets/images/mussarela.jpg"),
  },
  {
    id: "p06", produtoId: "10", nomeProduto: "Doce de leite",
    tipo: "Cartão da loja", descricao: "Desconto exclusivo para pagamentos no cartão do mercado.",
    precoPromocional: 11.90, unidadeOferta: "por pote de 400 g",
    imagem: require("../../assets/images/doce_leite.jpg"),
  },
];
