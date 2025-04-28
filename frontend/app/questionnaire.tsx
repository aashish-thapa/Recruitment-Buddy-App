import { Stack, useRouter } from "expo-router";
import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { recommendPrograms } from "@/lib/recommend";
export default function Questionnaire() {
  const router = useRouter();

  // States for each question
  const [interest, setInterest] = useState<string | null>(null);
  const [career, setCareer] = useState<string | null>(null);
  const [learningStyle, setLearningStyle] = useState<string | null>(null);
  const [educationLevel, setEducationLevel] = useState<string | null>(null);
  const [locationPref, setLocationPref] = useState<string | null>(null);
  const [studyType, setStudyType] = useState<string | null>(null);
  const [scholarship, setScholarship] = useState<string | null>(null);
  const [researchInterest, setResearchInterest] = useState<string | null>(null);
  const [learningMethod, setLearningMethod] = useState<string | null>(null);
  const [relocation, setRelocation] = useState<string | null>(null);

  // Submit Handler
  const handleSubmit = () => {
    if (
      interest &&
      career &&
      learningStyle &&
      educationLevel &&
      locationPref &&
      studyType &&
      scholarship &&
      researchInterest &&
      learningMethod &&
      relocation
    ) {
      const userAnswer = {
        interest,
        career,
        learningStyle,
        educationLevel,
        locationPref,
        studyType,
        scholarship,
        researchInterest,
        learningMethod,
        relocation,
      };

      const recommendations = recommendPrograms(userAnswer);
    console.log("Recommendations: ", recommendations);
      router.replace({
        pathname:"/home",
        params: {recommendations: JSON.stringify(recommendations)}
    }); // Redirect to Home after answering
    } else {
      alert("Please answer all questions!");
    }
  };

  return (
    <>
      <Stack.Screen options={{ title: "Questionnaire" }} />
      
      <LinearGradient colors={["#e0f7fa", "#80deea", "#26c6da"]} style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          
          <Text style={styles.title}>Complete Your Profile 🎯</Text>

          {/* Question 1 */}
          <Text style={styles.question}>1. What field are you most interested in?</Text>
          {["Computer Science", "Business", "Healthcare", "Engineering", "Arts"].map((option) => (
            <TouchableOpacity
              key={option}
              style={[styles.optionButton, interest === option && styles.selected]}
              onPress={() => setInterest(option)}
            >
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}

          {/* Question 2 */}
          <Text style={styles.question}>2. What is your preferred career path?</Text>
          {["Software Developer", "Data Scientist", "Entrepreneur", "Researcher", "Creative Artist"].map((option) => (
            <TouchableOpacity
              key={option}
              style={[styles.optionButton, career === option && styles.selected]}
              onPress={() => setCareer(option)}
            >
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}

          {/* Question 3 */}
          <Text style={styles.question}>3. How would you like to study?</Text>
          {["Online", "In-person", "Hybrid"].map((option) => (
            <TouchableOpacity
              key={option}
              style={[styles.optionButton, learningStyle === option && styles.selected]}
              onPress={() => setLearningStyle(option)}
            >
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}

          {/* Question 4 */}
          <Text style={styles.question}>4. Your current education level?</Text>
          {["High School", "Some College", "Undergraduate", "Graduate"].map((option) => (
            <TouchableOpacity
              key={option}
              style={[styles.optionButton, educationLevel === option && styles.selected]}
              onPress={() => setEducationLevel(option)}
            >
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}

          {/* Question 5 */}
          <Text style={styles.question}>5. Preferred location for study?</Text>
          {["USA", "Europe", "Asia", "No preference"].map((option) => (
            <TouchableOpacity
              key={option}
              style={[styles.optionButton, locationPref === option && styles.selected]}
              onPress={() => setLocationPref(option)}
            >
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}

          {/* Question 6 */}
          <Text style={styles.question}>6. Preferred study schedule?</Text>
          {["Full-time", "Part-time", "Flexible"].map((option) => (
            <TouchableOpacity
              key={option}
              style={[styles.optionButton, studyType === option && styles.selected]}
              onPress={() => setStudyType(option)}
            >
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}

          {/* Question 7 */}
          <Text style={styles.question}>7. Is scholarship important to you?</Text>
          {["Yes", "No", "Maybe"].map((option) => (
            <TouchableOpacity
              key={option}
              style={[styles.optionButton, scholarship === option && styles.selected]}
              onPress={() => setScholarship(option)}
            >
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}

          {/* Question 8 */}
          <Text style={styles.question}>8. Are you interested in research work?</Text>
          {["Yes", "No", "Maybe"].map((option) => (
            <TouchableOpacity
              key={option}
              style={[styles.optionButton, researchInterest === option && styles.selected]}
              onPress={() => setResearchInterest(option)}
            >
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}

          {/* Question 9 */}
          <Text style={styles.question}>9. Your favorite learning method?</Text>
          {["Videos", "Projects", "Textbooks", "Mix of all"].map((option) => (
            <TouchableOpacity
              key={option}
              style={[styles.optionButton, learningMethod === option && styles.selected]}
              onPress={() => setLearningMethod(option)}
            >
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}

          {/* Question 10 */}
          <Text style={styles.question}>10. Are you open to relocating for studies?</Text>
          {["Yes", "No", "Maybe"].map((option) => (
            <TouchableOpacity
              key={option}
              style={[styles.optionButton, relocation === option && styles.selected]}
              onPress={() => setRelocation(option)}
            >
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}

          {/* Submit Button */}
          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit} activeOpacity={0.8}>
            <Text style={styles.submitText}>Submit</Text>
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
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
    color: "#003f5c",
  },
  question: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
    color: "#005f73",
  },
  optionButton: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  optionText: {
    fontSize: 16,
    color: "#00334d",
  },
  selected: {
    backgroundColor: "#80deea",
    borderColor: "#0077b6",
  },
  submitButton: {
    backgroundColor: "#0077b6",
    paddingVertical: 15,
    borderRadius: 30,
    marginTop: 30,
    alignItems: "center",
    elevation: 5,
  },
  submitText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
});
