import { Stack, useLocalSearchParams } from "expo-router";
import { View, Text, ScrollView, StyleSheet, Linking, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function ProgramDetails() {
  const { program } = useLocalSearchParams();
  const programData = program ? JSON.parse(program as string) : null;

  if (!programData) return <Text style={{ padding: 20, textAlign: "center" }}>No Program Data Available</Text>;

  return (
    <>
      <Stack.Screen options={{ title: "Program Details" }} />

      <LinearGradient
        colors={["#e0f7fa", "#80deea", "#26c6da"]}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>

          <Text style={styles.title}>{programData.name}</Text>
          <Text style={styles.university}>{programData.university}</Text>

          <View style={styles.detailBox}>
            <Text style={styles.detailLabel}>Country:</Text>
            <Text style={styles.detailValue}>{programData.country}</Text>
          </View>

          <View style={styles.detailBox}>
            <Text style={styles.detailLabel}>Degree Level:</Text>
            <Text style={styles.detailValue}>{programData.degreeLevel}</Text>
          </View>

          <View style={styles.detailBox}>
            <Text style={styles.detailLabel}>Mode:</Text>
            <Text style={styles.detailValue}>{programData.mode}</Text>
          </View>

          <View style={styles.detailBox}>
            <Text style={styles.detailLabel}>Required SAT:</Text>
            <Text style={styles.detailValue}>{programData.requiredSAT}</Text>
          </View>

          <Text style={styles.description}>{programData.description}</Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => Linking.openURL(programData.website)}
          >
            <Text style={styles.buttonText}>Visit University Website</Text>
          </TouchableOpacity>

        </ScrollView>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#003f5c",
    marginBottom: 10,
    textAlign: "center",
  },
  university: {
    fontSize: 20,
    color: "#005f73",
    marginBottom: 20,
    textAlign: "center",
  },
  detailBox: {
    width: "100%",
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
  },
  detailLabel: {
    fontSize: 14,
    color: "#555",
    fontWeight: "600",
  },
  detailValue: {
    fontSize: 16,
    color: "#222",
    marginTop: 2,
  },
  description: {
    fontSize: 16,
    color: "#555",
    marginTop: 20,
    textAlign: "center",
    paddingHorizontal: 10,
  },
  button: {
    marginTop: 30,
    backgroundColor: "#0077b6",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    elevation: 3,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
