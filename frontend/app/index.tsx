import { Stack, useRouter } from "expo-router";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

export default function Index() {
  const router = useRouter();

  return (
    <>
      <Stack.Screen options={{ title: "Home" }} />

      {/* Background Gradient */}
      <LinearGradient
        colors={["#e0f7fa", "#80deea", "#26c6da"]}
        style={styles.container}
      >
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          {/* App Title */}
          <Text style={styles.title}>Recruitment Buddy</Text>

          {/* Tagline */}
          <Text style={styles.subtitle}>
            Your personalized path to success!
          </Text>

          {/* App Info / Features */}
          <View style={styles.featuresContainer}>
            <Text style={styles.feature}>
              🚀 Discover top courses tailored to your interests.
            </Text>
            <Text style={styles.feature}>
              🎯 Get smart career recommendations powered by AI.
            </Text>
            <Text style={styles.feature}>
              📚 Save and track your favorite programs.
            </Text>
            <Text style={styles.feature}>
              💬 Chat with our Career Assistant anytime.
            </Text>
            <Text style={styles.feature}>
              📅 Stay updated on deadlines and career tips.
            </Text>
          </View>

          {/* Get Started Button */}
          <TouchableOpacity
            onPress={() => router.push("/login")}
            style={styles.button}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
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
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#003f5c",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: "#005f73",
    marginBottom: 30,
    textAlign: "center",
    paddingHorizontal: 20,
  },
  featuresContainer: {
    marginBottom: 50,
    paddingHorizontal: 20,
  },
  feature: {
    fontSize: 16,
    color: "#00334d",
    textAlign: "center",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#0077b6",
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 30,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3.5,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "600",
  },
});
