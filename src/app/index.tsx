import { Link } from "expo-router";
import { Image, Pressable, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { tema } from "../theme";

export default function Menu() {
  return (
    <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
      <StatusBar barStyle="dark-content" backgroundColor={tema.fundo} />
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <View style={styles.identidade}>
          <View style={styles.icone}><Text style={styles.iconeTexto}>BL</Text></View>
          <View>
            <Text style={styles.sobreMarca}>FRESCOR E ECONOMIA</Text>
            <Text style={styles.nomeMarca}>Mercado Bom Leite</Text>
          </View>
        </View>

        <View style={styles.banner}>
          <View style={styles.tag}><Text style={styles.tagTexto}>SEJA BEM-VINDO</Text></View>
          <Text style={styles.tituloBanner}>Tudo de bom,</Text>
          <Text style={styles.tituloBanner}>todos os dias.</Text>
          <Text style={styles.subtituloBanner}>
            Laticínios selecionados, preços especiais e ofertas para a sua família.
          </Text>
          <Image source={require("../../assets/images/leite.jpg")} style={styles.imagemBanner} resizeMode="cover" />
        </View>

        <View style={styles.secao}>
          <Text style={styles.eyebrow}>ESCOLHA UMA OPÇÃO</Text>
          <Text style={styles.tituloSecao}>O que você procura?</Text>
        </View>

        <Link href="/produtos" asChild>
        <Pressable accessibilityRole="button" style={styles.botao}>
          <View style={[styles.botaoIcone, { backgroundColor: tema.verdeClaro }]}><Text style={styles.botaoEmoji}>🥛</Text></View>
          <View style={styles.botaoTexto}>
            <Text style={styles.botaoTitulo}>Nossos produtos</Text>
            <Text style={styles.botaoDescricao}>Veja os 10 itens do catálogo</Text>
          </View>
          <Text style={styles.seta}>→</Text>
        </Pressable>
        </Link>

        <Link href="/promocoes" asChild>
        <Pressable accessibilityRole="button" style={styles.botao}>
          <View style={[styles.botaoIcone, { backgroundColor: tema.laranjaClaro }]}><Text style={styles.botaoEmoji}>🏷️</Text></View>
          <View style={styles.botaoTexto}>
            <Text style={styles.botaoTitulo}>Ofertas e promoções</Text>
            <Text style={styles.botaoDescricao}>6 oportunidades para economizar</Text>
          </View>
          <Text style={styles.seta}>→</Text>
        </Pressable>
        </Link>

        <View style={styles.rodape}>
          <Text style={styles.rodapeTexto}>MERCADO BOM LEITE  •  FRESCOR E QUALIDADE</Text>
          <Text style={styles.rodapeAviso}>Seu mercado de laticínios e boas ofertas.</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: tema.fundo },
  scroll: { paddingHorizontal: 22, paddingTop: 20, paddingBottom: 28 },
  identidade: { flexDirection: "row", alignItems: "center", marginBottom: 26 },
  icone: { width: 51, height: 51, backgroundColor: tema.verde, borderRadius: 17, alignItems: "center", justifyContent: "center", marginRight: 12 },
  iconeTexto: { color: "#FFFFFF", fontWeight: "900", fontSize: 20 },
  sobreMarca: { fontSize: 10, color: tema.cinza, letterSpacing: 1.8, fontWeight: "800" },
  nomeMarca: { color: tema.verde, fontWeight: "900", fontSize: 20, marginTop: 3 },
  banner: { borderRadius: 25, backgroundColor: tema.verde, overflow: "hidden", padding: 22, paddingBottom: 16 },
  tag: { backgroundColor: "#2C634F", borderRadius: 30, paddingHorizontal: 13, paddingVertical: 7, alignSelf: "flex-start", marginBottom: 15 },
  tagTexto: { fontSize: 10, color: "#E6F6E8", letterSpacing: 1.6, fontWeight: "800" },
  tituloBanner: { fontSize: 30, color: "#FFFFFF", fontWeight: "900", lineHeight: 36, letterSpacing: -0.5 },
  subtituloBanner: { marginTop: 10, fontSize: 13, color: "#D6E8DC", lineHeight: 20, maxWidth: 290 },
  imagemBanner: { width: "100%", height: 132, marginTop: 20, borderRadius: 15 },
  secao: { marginTop: 27, marginBottom: 17 },
  eyebrow: { fontWeight: "900", color: "#937047", letterSpacing: 1.5, fontSize: 10 },
  tituloSecao: { color: tema.texto, fontSize: 23, fontWeight: "900", marginTop: 7 },
  botao: { backgroundColor: tema.cartao, borderWidth: 1, borderColor: tema.borda, flexDirection: "row", alignItems: "center", borderRadius: 20, padding: 15, marginBottom: 12 },
  botaoIcone: { width: 55, height: 55, borderRadius: 17, alignItems: "center", justifyContent: "center", marginRight: 12 },
  botaoEmoji: { fontSize: 26 },
  botaoTexto: { flex: 1 },
  botaoTitulo: { color: tema.texto, fontSize: 15, fontWeight: "900" },
  botaoDescricao: { color: tema.cinza, fontSize: 12, marginTop: 5 },
  seta: { color: tema.verde, fontSize: 26, paddingHorizontal: 4 },
  rodape: { paddingTop: 28, alignItems: "center" },
  rodapeTexto: { color: tema.cinza, fontSize: 9, letterSpacing: 1, textAlign: "center", fontWeight: "800" },
  rodapeAviso: { color: tema.cinza, fontSize: 11, textAlign: "center", marginTop: 7 },
});
