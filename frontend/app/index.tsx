import { Stack, useRouter } from "expo-router";
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Index() {
  const router = useRouter();

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        
        {/* Hero Section */}
        <LinearGradient colors={["#e0f7fa", "#80deea", "#26c6da"]} style={styles.hero}>
          <Text style={styles.heroTitle}>Recruitment Buddy</Text>
          <Text style={styles.heroSubtitle}>Find Your Perfect Pathway</Text>

          <TouchableOpacity style={styles.heroButton} onPress={() => router.push("/login")}>
            <Text style={styles.heroButtonText}>Get Started</Text>
          </TouchableOpacity>
        </LinearGradient>

        {/* About Us */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About Us</Text>
          <Text style={styles.sectionText}>
            Recruitment Buddy helps students and professionals find the best educational programs matched to their goals using AI and smart recommendations.
          </Text>
        </View>

        {/* How It Works */}
        <View style={styles.sectionAlt}>
          <Text style={styles.sectionTitle}>How It Works</Text>
          <View style={styles.step}>
            <Text style={styles.stepNumber}>1</Text>
            <Text style={styles.stepText}>Complete your personalized questionnaire</Text>
          </View>
          <View style={styles.step}>
            <Text style={styles.stepNumber}>2</Text>
            <Text style={styles.stepText}>Get smart, tailored program recommendations</Text>
          </View>
          <View style={styles.step}>
            <Text style={styles.stepNumber}>3</Text>
            <Text style={styles.stepText}>Enroll and start your success journey</Text>
          </View>
        </View>

        
    

        {/* Final Call to Action */}
        <View style={styles.finalCTA}>
          <Text style={styles.finalText}>Ready to shape your future?</Text>
          <TouchableOpacity style={styles.finalButton} onPress={() => router.push("/login")}>
            <Text style={styles.finalButtonText}>Get Started Now</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f5f9",
  },
  hero: {
    height: 300,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  heroTitle: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#003f5c",
    marginBottom: 10,
    textAlign: "center",
  },
  heroSubtitle: {
    fontSize: 20,
    color: "#005f73",
    marginBottom: 30,
    textAlign: "center",
  },
  heroButton: {
    backgroundColor: "#0077b6",
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 30,
    elevation: 6,
  },
  heroButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  section: {
    backgroundColor: "white",
    marginHorizontal: 20,
    marginVertical: 15,
    borderRadius: 15,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  sectionAlt: {
    backgroundColor: "#e0f7fa",
    marginHorizontal: 20,
    marginVertical: 15,
    borderRadius: 15,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#00334d",
    marginBottom: 15,
    textAlign: "center",
  },
  sectionText: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
  },
  step: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  stepNumber: {
    width: 30,
    height: 30,
    backgroundColor: "#0077b6",
    color: "white",
    textAlign: "center",
    textAlignVertical: "center",
    fontWeight: "bold",
    borderRadius: 15,
    marginRight: 10,
    fontSize: 16,
  },
  stepText: {
    fontSize: 16,
    color: "#00334d",
    flex: 1,
  },
  bullet: {
    fontSize: 16,
    color: "#333",
    marginVertical: 5,
    textAlign: "center",
  },
  testimonial: {
    fontSize: 16,
    fontStyle: "italic",
    color: "#555",
    textAlign: "center",
    marginVertical: 8,
  },
  finalCTA: {
    alignItems: "center",
    marginVertical: 40,
    paddingHorizontal: 20,
  },
  finalText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#00334d",
    marginBottom: 20,
    textAlign: "center",
  },
  finalButton: {
    backgroundColor: "#0077b6",
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 30,
    elevation: 6,
  },
  finalButtonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
