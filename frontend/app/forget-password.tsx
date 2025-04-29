import { Stack, useRouter } from "expo-router";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from "react";

export default function ForgetPassword() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const handleSendReset = () => {
    if (!email.includes("@")) {
      Alert.alert("Invalid Email", "Please enter a valid email address.");
      return;
    }
    // Later here you would call API to send real reset link
    Alert.alert("Password Reset", "If this email exists, a reset link has been sent!");
    router.push("/login");
  };

  return (
    <>
      <Stack.Screen options={{ title: "Forget Password" }} />

      <LinearGradient colors={["#e0f7fa", "#80deea", "#26c6da"]} style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          
          {/* Title */}
          <Text style={styles.title}>Forgot your password?</Text>
          <Text style={styles.subtitle}>
            No worries! Enter your registered email and we’ll send you instructions to reset your password.
          </Text>

          {/* Email Input */}
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            keyboardType="email-address"
            autoCapitalize="none"
            placeholderTextColor="#666"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />

          {/* Send Reset Button */}
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.8}
            onPress={handleSendReset}
          >
            <Text style={styles.buttonText}>Send Reset Link</Text>
          </TouchableOpacity>

          {/* Back to Login */}
          <TouchableOpacity
            onPress={() => router.push("/login")}
            style={{ marginTop: 20 }}
          >
            <Text style={styles.backToLoginText}>
              Back to <Text style={{ fontWeight: "bold", color: "#005f73" }}>Login</Text>
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
    fontSize: 30,
    fontWeight: "bold",
    color: "#003f5c",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
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
    paddingHorizontal: 60,
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
  backToLoginText: {
    fontSize: 16,
    color: "#00334d",
    marginTop: 10,
  },
});
