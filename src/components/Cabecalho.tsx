import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { tema } from "../theme";

type Props = {
  titulo: string;
  subtitulo: string;
  total: number;
};

export default function Cabecalho({ titulo, subtitulo, total }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.topo}>
        <Pressable
          onPress={() => router.replace("/")}
          style={styles.voltar}
          accessibilityRole="button"
          accessibilityLabel="Voltar ao menu principal"
        >
          <Text style={styles.seta}>‹</Text>
        </Pressable>
        <Text style={styles.marca}>BOM LEITE</Text>
        <View style={styles.espacador} />
      </View>
      <Text style={styles.titulo}>{titulo}</Text>
      <Text style={styles.subtitulo}>{subtitulo}</Text>
      <View style={styles.linha}>
        <Text style={styles.contador}>{total} {total === 1 ? "item" : "itens"}</Text>
        <Text style={styles.etiqueta}>CATÁLOGO 2026</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { paddingHorizontal: 22, paddingTop: 12, paddingBottom: 18 },
  topo: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 26 },
  voltar: { backgroundColor: tema.verdeClaro, borderRadius: 14, width: 42, height: 42, justifyContent: "center", alignItems: "center" },
  seta: { color: tema.verde, fontSize: 30, lineHeight: 34, marginTop: -4 },
  marca: { color: tema.verde, fontWeight: "900", letterSpacing: 3, fontSize: 13 },
  espacador: { width: 42 },
  titulo: { fontSize: 31, color: tema.texto, fontWeight: "900", letterSpacing: -0.8 },
  subtitulo: { fontSize: 14, lineHeight: 21, color: tema.cinza, marginTop: 7 },
  linha: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 18 },
  contador: { fontSize: 13, fontWeight: "700", color: tema.verde },
  etiqueta: { fontSize: 10, fontWeight: "800", letterSpacing: 1.3, color: tema.cinza },
});
