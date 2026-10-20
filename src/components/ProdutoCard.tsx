import { StyleSheet, Text, View } from "react-native";
import type { Produto } from "../types/catalogo";
import { formatarMoeda } from "../utils/moeda";
import { tema } from "../theme";

type Props = { produto: Produto };

export default function ProdutoCard({ produto }: Props) {
  return (
    <View style={styles.card}>
      <View style={styles.identificacao}>
        <Text style={styles.numero}>{produto.id}</Text>
      </View>
      <View style={styles.informacao}>
        <Text style={styles.categoria}>{produto.categoria.toUpperCase()}</Text>
        <Text style={styles.nome}>{produto.nome}</Text>
        <Text style={styles.unidade}>{produto.unidade}</Text>
      </View>
      <View style={styles.precoContainer}>
        <Text style={styles.preco}>{formatarMoeda(produto.preco)}</Text>
        <Text style={styles.por}>por {produto.unidade}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: tema.cartao, borderColor: tema.borda, borderWidth: 1, borderRadius: 18, padding: 15, flexDirection: "row", alignItems: "center", marginBottom: 11 },
  identificacao: { width: 46, height: 46, borderRadius: 14, backgroundColor: tema.verdeClaro, justifyContent: "center", alignItems: "center", marginRight: 12 },
  numero: { fontSize: 15, fontWeight: "900", color: tema.verde },
  informacao: { flex: 1, paddingRight: 6 },
  categoria: { fontSize: 9, letterSpacing: 1.1, fontWeight: "800", color: tema.cinza },
  nome: { fontSize: 15, fontWeight: "800", color: tema.texto, lineHeight: 20, marginTop: 3 },
  unidade: { fontSize: 12, color: tema.cinza, marginTop: 3 },
  precoContainer: { alignItems: "flex-end", maxWidth: 100 },
  preco: { fontSize: 16, fontWeight: "900", color: tema.verde },
  por: { fontSize: 10, color: tema.cinza, textAlign: "right", marginTop: 5 },
});
