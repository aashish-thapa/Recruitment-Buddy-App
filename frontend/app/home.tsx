import { Stack, useRouter, useLocalSearchParams } from "expo-router";
import { View, Text, TextInput, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();

  const { recommendations } = useLocalSearchParams();

  const parsedRecommendations = recommendations ? JSON.parse(recommendations as string) : [];

  const [questionnaireCompleted, setQuestionnaireCompleted] = useState<boolean>(parsedRecommendations.length > 0);

  useEffect(() => {
    if (parsedRecommendations.length > 0) {
      setQuestionnaireCompleted(true);
    }
  }, [recommendations]);

  // Top Recommendation and Alternatives
  const bestRecommendation = parsedRecommendations.length > 0 ? parsedRecommendations[0] : null;
  const alternativeRecommendations = parsedRecommendations.slice(1);

  return (
    <>
      <Stack.Screen options={{ headerShown : true}} />

      <LinearGradient colors={["#e0f7fa", "#80deea", "#26c6da"]} style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>

          {/* Questionnaire Reminder */}
          {!questionnaireCompleted && (
            <TouchableOpacity
              style={styles.questionnaireBox}
              onPress={() => router.push("/questionnaire")}
            >
              <Text style={styles.questionnaireText}>
                Complete the questionnaire for better recommendations 🎯
              </Text>
            </TouchableOpacity>
          )}

          {/* Welcome Message */}
          <Text style={styles.welcomeText}>Welcome, Aashish! 👋</Text>

          {/* Search Bar */}
          <TextInput
            style={styles.searchInput}
            placeholder="Search programs, courses..."
            placeholderTextColor="#666"
          />

          {/* Recommended Program */}
          {bestRecommendation && (
            <>
              <Text style={styles.sectionTitle}>🎯 Recommended Program</Text>
              <View style={[styles.card, styles.goldCard]}>
                <Text style={styles.cardTitle}>{bestRecommendation.program.name}</Text>
                <Text style={styles.cardSubtitle}>University: {bestRecommendation.program.university}</Text>
                <Text style={styles.cardSubtitle}>Country: {bestRecommendation.program.country}</Text>
                <Text style={styles.cardSubtitle}>Degree: {bestRecommendation.program.degreeLevel}</Text>
                <Text style={styles.cardSubtitle}>Match Score: {bestRecommendation.score}</Text>
                <TouchableOpacity style={styles.cardButton}>
                  <Text style={styles.cardButtonText}>View Details</Text>
                </TouchableOpacity>
              </View>
            </>
          )}

          {/* Alternative Programs */}
          {alternativeRecommendations.length > 0 && (
            <>
              <Text style={styles.sectionTitle}>🛤️ Alternative Programs</Text>
              {alternativeRecommendations.map((item: any, index: number) => (
                <View key={index} style={styles.card}>
                  <Text style={styles.cardTitle}>{item.program.name}</Text>
                  <Text style={styles.cardSubtitle}>University: {item.program.university}</Text>
                  <Text style={styles.cardSubtitle}>Country: {item.program.country}</Text>
                  <Text style={styles.cardSubtitle}>Degree: {item.program.degreeLevel}</Text>
                  <Text style={styles.cardSubtitle}>Match Score: {item.score}</Text>
                  <TouchableOpacity style={styles.cardButton}>
                    <Text style={styles.cardButtonText}>View Details</Text>
                  </TouchableOpacity>
                </View>
              ))}
            </>
          )}

          {/* No recommendations */}
          {parsedRecommendations.length === 0 && (
            <Text style={{ textAlign: "center", color: "#777", marginTop: 20 }}>
              No recommendations yet. Please complete your questionnaire first.
            </Text>
          )}
          
        </ScrollView>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    padding: 20,
  },
  questionnaireBox: {
    backgroundColor: "#fffbeb",
    borderColor: "#facc15",
    borderWidth: 1,
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 4,
  },
  questionnaireText: {
    fontSize: 16,
    color: "#78350f",
    fontWeight: "500",
    textAlign: "center",
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#003f5c",
    marginBottom: 20,
  },
  searchInput: {
    width: "100%",
    height: 50,
    backgroundColor: "white",
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 30,
    fontSize: 16,
    color: "#333",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#005f73",
    marginVertical: 20,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  goldCard: {
    backgroundColor: "#fff9db", // Light Gold
    borderWidth: 2,
    borderColor: "#facc15", // Golden Border
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#00334d",
    marginBottom: 5,
  },
  cardSubtitle: {
    fontSize: 14,
    color: "#555",
    marginBottom: 5,
  },
  cardButton: {
    backgroundColor: "#0077b6",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignSelf: "flex-start",
    marginTop: 10,
  },
  cardButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});
