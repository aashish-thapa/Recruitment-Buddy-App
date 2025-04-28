export const programs = [
    // USA Programs
    { name: "Bachelor of Computer Science", university: "MIT", country: "USA", degreeLevel: "Undergraduate", field: "Computer Science", mode: "In-person", tags: ["Computer Science", "Software Developer", "Full-time", "USA", "Bachelor"] },
    { name: "MBA in Business Analytics", university: "Harvard Business School", country: "USA", degreeLevel: "Graduate", field: "Business", mode: "In-person", tags: ["Business", "Entrepreneur", "In-person", "USA", "MBA"] },
    { name: "Master of Data Science", university: "Stanford University", country: "USA", degreeLevel: "Graduate", field: "Computer Science", mode: "Hybrid", tags: ["Data Scientist", "Researcher", "Hybrid", "USA", "MS"] },
    { name: "Master of Cybersecurity", university: "Carnegie Mellon University", country: "USA", degreeLevel: "Graduate", field: "Cybersecurity", mode: "In-person", tags: ["Cybersecurity", "Security Analyst", "USA", "Graduate"] },
    { name: "Bachelor of Psychology", university: "University of California, Berkeley", country: "USA", degreeLevel: "Undergraduate", field: "Psychology", mode: "In-person", tags: ["Psychology", "Mental Health", "Counseling", "USA", "Bachelor"] },
  
    // Canada Programs
    { name: "Healthcare Management Degree", university: "University of Toronto", country: "Canada", degreeLevel: "Graduate", field: "Healthcare", mode: "In-person", tags: ["Healthcare", "Management", "Canada", "Graduate"] },
    { name: "Bachelor of Business Administration", university: "University of British Columbia", country: "Canada", degreeLevel: "Undergraduate", field: "Business", mode: "In-person", tags: ["Business", "Management", "Canada", "Bachelor"] },
    { name: "Master of Engineering", university: "McGill University", country: "Canada", degreeLevel: "Graduate", field: "Engineering", mode: "Hybrid", tags: ["Engineering", "Hybrid", "Canada", "MS"] },
  
    // UK Programs
    { name: "Bachelor of Arts in Design", university: "University of the Arts London", country: "UK", degreeLevel: "Undergraduate", field: "Arts", mode: "In-person", tags: ["Arts", "Design", "Creative", "UK", "Bachelor"] },
    { name: "Master of Finance", university: "London Business School", country: "UK", degreeLevel: "Graduate", field: "Finance", mode: "In-person", tags: ["Finance", "Investment Banking", "UK", "MS"] },
    { name: "Bachelor of Law", university: "University of Oxford", country: "UK", degreeLevel: "Undergraduate", field: "Law", mode: "In-person", tags: ["Law", "Justice", "UK", "Bachelor"] },
  
    // Australia Programs
    { name: "AI and Machine Learning Certification", university: "University of Melbourne", country: "Australia", degreeLevel: "Certificate", field: "Computer Science", mode: "Online", tags: ["AI", "Machine Learning", "Online", "Australia", "Certificate"] },
    { name: "Master of Marketing", university: "University of Sydney", country: "Australia", degreeLevel: "Graduate", field: "Business", mode: "Online", tags: ["Business", "Marketing", "Australia", "Online", "MS"] },
    { name: "Bachelor of Civil Engineering", university: "Monash University", country: "Australia", degreeLevel: "Undergraduate", field: "Engineering", mode: "In-person", tags: ["Engineering", "Civil Engineering", "Australia", "Bachelor"] },
  
    // Germany Programs
    { name: "Bachelor of Mechanical Engineering", university: "Technical University of Munich", country: "Germany", degreeLevel: "Undergraduate", field: "Engineering", mode: "In-person", tags: ["Mechanical Engineering", "Germany", "Bachelor"] },
    { name: "Master of Robotics", university: "RWTH Aachen University", country: "Germany", degreeLevel: "Graduate", field: "Engineering", mode: "Hybrid", tags: ["Robotics", "Germany", "MS"] },
  
    // Singapore Programs
    { name: "Bachelor of Computer Engineering", university: "National University of Singapore", country: "Singapore", degreeLevel: "Undergraduate", field: "Engineering", mode: "Hybrid", tags: ["Computer Engineering", "Singapore", "Bachelor"] },
    { name: "Master of Information Systems", university: "Nanyang Technological University", country: "Singapore", degreeLevel: "Graduate", field: "Computer Science", mode: "In-person", tags: ["Information Systems", "Singapore", "MS"] },
  
    // India Programs
    { name: "Bachelor of Business Studies", university: "University of Delhi", country: "India", degreeLevel: "Undergraduate", field: "Business", mode: "In-person", tags: ["Business", "Entrepreneur", "India", "Bachelor"] },
    { name: "Master of Computer Applications", university: "IIT Bombay", country: "India", degreeLevel: "Graduate", field: "Computer Science", mode: "Hybrid", tags: ["Computer Science", "India", "MS"] },
  
    // France Programs
    { name: "Bachelor of Fashion Design", university: "ESMOD", country: "France", degreeLevel: "Undergraduate", field: "Arts", mode: "In-person", tags: ["Fashion", "Design", "France", "Bachelor"] },
    { name: "Master in Luxury Brand Management", university: "INSEEC Business School", country: "France", degreeLevel: "Graduate", field: "Business", mode: "In-person", tags: ["Business", "Luxury", "France", "Graduate"] },
  
    // Netherlands Programs
    { name: "Bachelor of Environmental Science", university: "Wageningen University", country: "Netherlands", degreeLevel: "Undergraduate", field: "Environmental Science", mode: "Hybrid", tags: ["Environment", "Climate Change", "Netherlands", "Bachelor"] },
    { name: "Master of Artificial Intelligence", university: "University of Amsterdam", country: "Netherlands", degreeLevel: "Graduate", field: "Computer Science", mode: "Online", tags: ["Artificial Intelligence", "Netherlands", "MS"] },
  
    // Sweden Programs
    { name: "Bachelor of Sustainable Engineering", university: "KTH Royal Institute of Technology", country: "Sweden", degreeLevel: "Undergraduate", field: "Engineering", mode: "In-person", tags: ["Sustainable Engineering", "Sweden", "Bachelor"] },
    { name: "Master of Psychology", university: "Lund University", country: "Sweden", degreeLevel: "Graduate", field: "Psychology", mode: "Hybrid", tags: ["Psychology", "Mental Health", "Sweden", "MS"] },
  
    // Japan Programs
    { name: "Bachelor of Computer Science", university: "University of Tokyo", country: "Japan", degreeLevel: "Undergraduate", field: "Computer Science", mode: "In-person", tags: ["Computer Science", "Japan", "Bachelor"] },
    { name: "Master of Robotics Engineering", university: "Osaka University", country: "Japan", degreeLevel: "Graduate", field: "Engineering", mode: "In-person", tags: ["Robotics", "Engineering", "Japan", "MS"] },
  
    // Bonus Additional USA Programs
    { name: "Master of Public Health", university: "Johns Hopkins University", country: "USA", degreeLevel: "Graduate", field: "Healthcare", mode: "In-person", tags: ["Public Health", "Healthcare", "USA", "MS"] },
    { name: "Bachelor of Fine Arts", university: "Savannah College of Art and Design", country: "USA", degreeLevel: "Undergraduate", field: "Arts", mode: "In-person", tags: ["Fine Arts", "Design", "USA", "Bachelor"] },
    { name: "Certificate in Data Analytics", university: "UC Berkeley Extension", country: "USA", degreeLevel: "Certificate", field: "Computer Science", mode: "Online", tags: ["Data Analytics", "USA", "Certificate"] },
    { name: "Master of Mechanical Engineering", university: "Georgia Institute of Technology", country: "USA", degreeLevel: "Graduate", field: "Engineering", mode: "Hybrid", tags: ["Mechanical Engineering", "USA", "MS"] },
  ];
  
  
  export function recommendPrograms(userAnswers: Record<string, string | null>) {
    const recommendations = programs.map((program) => {
      let score = 0;
  
      const values = Object.values(userAnswers);
  
      for (const tag of program.tags) {
        if (values.includes(tag)) {
          // Apply weighted scoring
          if (tag === userAnswers.interest || tag === userAnswers.field) {
            score += 3; // Field match
          } else if (tag === userAnswers.country) {
            score += 2; // Country match
          } else if (tag === userAnswers.learningStyle || tag === userAnswers.mode) {
            score += 1; // Mode match (Online, In-person, Hybrid)
          } else if (tag === userAnswers.degreeLevel) {
            score += 1; // Degree Level match (Bachelor, Master, Certificate)
          } else {
            score += 1; // General tag match
          }
        }
      }
  
      return {
        program, // return full program object now
        score,
      };
    });
  
    // Sort by highest match score
    recommendations.sort((a, b) => b.score - a.score);
  
    return recommendations;
  }
  