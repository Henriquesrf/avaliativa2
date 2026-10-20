import type { ImageSourcePropType } from "react-native";

export type Produto = {
  id: string;
  nome: string;
  preco: number;
  unidade: string;
  categoria: string;
};

export type TipoPromocao =
  | "Leve X, pague Y"
  | "Acima de X unidades"
  | "Cartão da loja";

export type Promocao = {
  id: string;
  produtoId: string;
  nomeProduto: string;
  tipo: TipoPromocao;
  descricao: string;
  precoPromocional: number;
  unidadeOferta: string;
  imagem: ImageSourcePropType;
};
