import { FlatList, StatusBar, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Cabecalho from "../components/Cabecalho";
import ProdutoCard from "../components/ProdutoCard";
import { produtos } from "../data/catalogo";
import { tema } from "../theme";

export default function Produtos() {
  return (
    <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
      <StatusBar barStyle="dark-content" backgroundColor={tema.fundo} />
      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <View style={{ paddingHorizontal: 22 }}><ProdutoCard produto={item} /></View>}
        ListHeaderComponent={
          <Cabecalho
            titulo="Nossos produtos"
            subtitulo="Conheça os laticínios que fazem parte do nosso catálogo."
            total={produtos.length}
          />
        }
        ListFooterComponent={
          <View style={styles.rodape}><Text style={styles.aviso}>Confira nossas opções de laticínios.</Text></View>
        }
        contentContainerStyle={styles.lista}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: tema.fundo },
  lista: { paddingBottom: 18 },
  rodape: { paddingVertical: 16 },
  aviso: { color: tema.cinza, textAlign: "center", fontSize: 11 },
});
