import { Stack, useRouter } from "expo-router";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

export default function Register() {
  const router = useRouter();

  return (
    <>
      <Stack.Screen options={{ title: "Register" }} />

      <LinearGradient
        colors={["#e0f7fa", "#80deea", "#26c6da"]}
        style={styles.container}
      >
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          {/* App Title */}
          <Text style={styles.title}>Register</Text>

          {/* Create Account Text */}
          <Text style={styles.subtitle}>
            Create your account and start your journey!
          </Text>

          {/* Name Input */}
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            autoCapitalize="words"
            placeholderTextColor="#666"
          />

          {/* Email Input */}
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            placeholderTextColor="#666"
          />

          {/* Password Input */}
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            placeholderTextColor="#666"
          />

          {/* Confirm Password Input */}
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            secureTextEntry
            placeholderTextColor="#666"
          />

          {/* Register Button */}
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>

          {/* Login Redirect */}
          <TouchableOpacity
            onPress={() => router.push("/login")}
            style={{ marginTop: 20 }}
          >
            <Text style={styles.loginText}>
              Already have an account? <Text style={{ fontWeight: "bold", color: "#005f73" }}>Login</Text>
            </Text>
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
    fontSize: 32,
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
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "white",
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
    fontSize: 16,
    color: "#333",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  button: {
    backgroundColor: "#0077b6",
    paddingVertical: 15,
    paddingHorizontal: 90,
    borderRadius: 30,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3.5,
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
  loginText: {
    fontSize: 16,
    color: "#00334d",
    marginTop: 10,
  },
});
