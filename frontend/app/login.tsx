import { Stack, useRouter } from "expo-router";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from "react";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email === "admin" && password === "user123") {
      router.replace("/home"); // Successful login
    } else {
      Alert.alert("Invalid credentials", "Please check your username and password.");
    }
  };

  return (
    <>
      <Stack.Screen options={{ title: "Login" }} />

      <LinearGradient
        colors={["#e0f7fa", "#80deea", "#26c6da"]}
        style={styles.container}
      >
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          {/* App Title */}
          <Text style={styles.title}>Login</Text>

          {/* Welcome Back Text */}
          <Text style={styles.subtitle}>
            Welcome back! Please login to continue.
          </Text>

          {/* Email Input */}
          <TextInput
            style={styles.input}
            placeholder="Username"
            keyboardType="default"
            autoCapitalize="none"
            placeholderTextColor="#666"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />

          {/* Password Input */}
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            placeholderTextColor="#666"
            value={password}
            onChangeText={(text) => setPassword(text)}
          />

          {/* Login Button */}
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.8}
            onPress={handleLogin}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          {/* Register Redirect */}
          <TouchableOpacity
            onPress={() => router.push("/register")}
            style={{ marginTop: 20 }}
          >
            <Text style={styles.registerText}>
              Don't have an account?{" "}
              <Text style={{ fontWeight: "bold", color: "#005f73" }}>Register</Text>
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
    paddingHorizontal: 100,
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
  registerText: {
    fontSize: 16,
    color: "#00334d",
    marginTop: 10,
  },
});
