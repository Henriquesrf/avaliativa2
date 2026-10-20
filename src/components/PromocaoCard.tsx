import { Image, StyleSheet, Text, View } from "react-native";
import type { Promocao } from "../types/catalogo";
import { formatarMoeda } from "../utils/moeda";
import { tema } from "../theme";

type Props = { promocao: Promocao };

export default function PromocaoCard({ promocao }: Props) {
  return (
    <View style={styles.card}>
      <View style={styles.colunaImagem}>
        <Image
          source={promocao.imagem}
          style={styles.foto}
          resizeMode="cover"
          accessibilityLabel={`Foto de ${promocao.nomeProduto}`}
        />
        <View style={styles.selo}><Text style={styles.seloTexto}>OFERTA</Text></View>
      </View>

      <View style={styles.conteudo}>
        <Text style={styles.tipo}>{promocao.tipo.toUpperCase()}</Text>
        <Text style={styles.nome}>{promocao.nomeProduto}</Text>
        <Text style={styles.descricao}>{promocao.descricao}</Text>
        <Text style={styles.preco}>{formatarMoeda(promocao.precoPromocional)}</Text>
        <Text style={styles.unidade}>{promocao.unidadeOferta}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 22,
    marginBottom: 14,
    backgroundColor: tema.cartao,
    borderColor: tema.borda,
    borderWidth: 1,
    borderRadius: 18,
    flexDirection: "row",
    overflow: "hidden",
    minHeight: 184,
  },
  colunaImagem: { width: 122, minHeight: 184, position: "relative" },
  // Altura numérica fixa evita fotos invisíveis em alguns emuladores Android.
  foto: { width: 122, height: 184 },
  selo: {
    position: "absolute", top: 10, left: 8,
    backgroundColor: tema.destaque,
    paddingHorizontal: 8, paddingVertical: 5,
    borderRadius: 7,
  },
  seloTexto: { fontSize: 9, color: tema.verdeEscuro, fontWeight: "900" },
  conteudo: {
    flex: 1,
    minWidth: 0,
    paddingHorizontal: 12,
    paddingVertical: 13,
    justifyContent: "center",
  },
  tipo: { fontSize: 10, color: "#96591C", fontWeight: "800", lineHeight: 14 },
  nome: { marginTop: 5, fontSize: 16, lineHeight: 20, color: tema.texto, fontWeight: "900" },
  descricao: { marginTop: 5, fontSize: 11, lineHeight: 16, color: tema.cinza },
  preco: { marginTop: 8, fontSize: 21, color: tema.verde, fontWeight: "900" },
  unidade: { marginTop: 2, fontSize: 10, color: tema.cinza },
});
