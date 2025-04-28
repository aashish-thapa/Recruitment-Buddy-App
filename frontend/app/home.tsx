import { Stack } from "expo-router";
import { View, Text, TextInput, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: "Home" }} />

      <LinearGradient
        colors={["#e0f7fa", "#80deea", "#26c6da"]}
        style={styles.container}
      >
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          
          {/* Welcome Message */}
          <Text style={styles.welcomeText}>Welcome, Aashish! 👋</Text>

          {/* Search Bar */}
          <TextInput
            style={styles.searchInput}
            placeholder="Search programs, courses..."
            placeholderTextColor="#666"
          />

          {/* Recommendations Section Title */}
          <Text style={styles.sectionTitle}>Recommended For You</Text>

          {/* Mocked Recommendation Cards */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Bachelor of Computer Science</Text>
            <Text style={styles.cardSubtitle}>University of Southern Mississippi</Text>
            <TouchableOpacity style={styles.cardButton}>
              <Text style={styles.cardButtonText}>View Details</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Data Science and AI Program</Text>
            <Text style={styles.cardSubtitle}>Stanford Online</Text>
            <TouchableOpacity style={styles.cardButton}>
              <Text style={styles.cardButtonText}>View Details</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Cybersecurity Bootcamp</Text>
            <Text style={styles.cardSubtitle}>Georgia Tech Professional Education</Text>
            <TouchableOpacity style={styles.cardButton}>
              <Text style={styles.cardButtonText}>View Details</Text>
            </TouchableOpacity>
          </View>

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
    fontWeight: "600",
    color: "#005f73",
    marginBottom: 20,
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
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#00334d",
    marginBottom: 5,
  },
  cardSubtitle: {
    fontSize: 14,
    color: "#555",
    marginBottom: 15,
  },
  cardButton: {
    backgroundColor: "#0077b6",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignSelf: "flex-start",
  },
  cardButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});
