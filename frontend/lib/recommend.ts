const programs = [
    {
      name: "Bachelor of Computer Science",
      tags: ["Computer Science", "Software Developer", "Online", "Full-time", "USA"],
    },
    {
      name: "MBA in Business Analytics",
      tags: ["Business", "Entrepreneur", "In-person", "Full-time", "USA"],
    },
    {
      name: "Healthcare Management Degree",
      tags: ["Healthcare", "In-person", "Graduate", "Flexible", "USA"],
    },
    {
      name: "MS in Data Science",
      tags: ["Computer Science", "Data Scientist", "Researcher", "Hybrid", "USA"],
    },
    {
      name: "Creative Arts and Design Program",
      tags: ["Arts", "Creative Artist", "In-person", "Full-time", "Europe"],
    },
    {
      name: "AI and Machine Learning Certification",
      tags: ["Computer Science", "Data Scientist", "Online", "Flexible"],
    }
  ];
  
  export function recommendPrograms(userAnswers: Record<string, string | null>) {
    const recommendations = programs.map((program) => {
      let score = 0;
  
      for (const tag of program.tags) {
        if (Object.values(userAnswers).includes(tag)) {
          score += 1;
        }
      }
  
      return {
        name: program.name,
        score,
      };
    });
  
    // Sort by highest score first
    recommendations.sort((a, b) => b.score - a.score);
  
    return recommendations;
  }
  