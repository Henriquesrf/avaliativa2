import { FlatList, StatusBar, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Cabecalho from "../components/Cabecalho";
import PromocaoCard from "../components/PromocaoCard";
import { promocoes } from "../data/catalogo";
import { tema } from "../theme";

export default function Promocoes() {
  return (
    <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
      <StatusBar barStyle="dark-content" backgroundColor={tema.fundo} />
      <FlatList
        style={styles.flatList}
        data={promocoes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PromocaoCard promocao={item} />}
        contentContainerStyle={styles.conteudo}
        ListHeaderComponent={() => (
          <Cabecalho
            titulo="Ofertas e promoções"
            subtitulo="Economize com nossos preços especiais."
            total={promocoes.length}
          />
        )}
        ListFooterComponent={() => (
          <View style={styles.rodape}>
            <Text style={styles.textoRodape}>
              Confira as condições e quantidades de cada oferta.
            </Text>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.vazio}>Nenhuma promoção disponível.</Text>}
        showsVerticalScrollIndicator={false}
        initialNumToRender={6}
        windowSize={5}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: tema.fundo },
  flatList: { flex: 1 },
  conteudo: { paddingBottom: 28 },
  rodape: { paddingTop: 16, paddingBottom: 8, paddingHorizontal: 22 },
  textoRodape: { textAlign: "center", color: tema.cinza, fontSize: 12 },
  vazio: { textAlign: "center", marginTop: 40, color: tema.cinza },
});
