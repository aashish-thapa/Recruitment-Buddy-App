export const programs = [
    // USA Programs
    {
      name: "Bachelor of Computer Science",
      university: "MIT",
      country: "USA",
      degreeLevel: "Undergraduate",
      field: "Computer Science",
      mode: "In-person",
      requiredSAT: "1500+",
      website: "https://mit.edu",
      description: "A top computer science program focusing on AI, software development, and quantum computing.",
      tags: ["Computer Science", "Software Developer", "Full-time", "USA", "Bachelor"],
    },
    {
      name: "MBA in Business Analytics",
      university: "Harvard Business School",
      country: "USA",
      degreeLevel: "Graduate",
      field: "Business",
      mode: "In-person",
      requiredSAT: "None (GMAT required)",
      website: "https://www.hbs.edu/",
      description: "World-renowned MBA specializing in Business Analytics and Leadership training.",
      tags: ["Business", "Entrepreneur", "In-person", "USA", "MBA"],
    },
    {
      name: "Master of Data Science",
      university: "Stanford University",
      country: "USA",
      degreeLevel: "Graduate",
      field: "Computer Science",
      mode: "Hybrid",
      requiredSAT: "None (GRE optional)",
      website: "https://www.stanford.edu/",
      description: "Cutting-edge Data Science program integrating AI, statistics, and software engineering.",
      tags: ["Data Scientist", "Researcher", "Hybrid", "USA", "MS"],
    },
    {
      name: "Master of Cybersecurity",
      university: "Carnegie Mellon University",
      country: "USA",
      degreeLevel: "Graduate",
      field: "Cybersecurity",
      mode: "In-person",
      requiredSAT: "None (GRE recommended)",
      website: "https://www.cmu.edu/",
      description: "Highly ranked Cybersecurity program focusing on systems security, forensics, and governance.",
      tags: ["Cybersecurity", "Security Analyst", "USA", "Graduate"],
    },
    {
      name: "Bachelor of Psychology",
      university: "University of California, Berkeley",
      country: "USA",
      degreeLevel: "Undergraduate",
      field: "Psychology",
      mode: "In-person",
      requiredSAT: "1330+",
      website: "https://www.berkeley.edu/",
      description: "Explores cognitive, clinical, and social psychology with research opportunities.",
      tags: ["Psychology", "Mental Health", "Counseling", "USA", "Bachelor"],
    },
  
    // Canada Programs
    {
      name: "Healthcare Management Degree",
      university: "University of Toronto",
      country: "Canada",
      degreeLevel: "Graduate",
      field: "Healthcare",
      mode: "In-person",
      requiredSAT: "None (IELTS required)",
      website: "https://www.utoronto.ca/",
      description: "Top-ranked healthcare management course with leadership and policy focus.",
      tags: ["Healthcare", "Management", "Canada", "Graduate"],
    },
    {
      name: "Bachelor of Business Administration",
      university: "University of British Columbia",
      country: "Canada",
      degreeLevel: "Undergraduate",
      field: "Business",
      mode: "In-person",
      requiredSAT: "1200+",
      website: "https://www.ubc.ca/",
      description: "BBA program focusing on global business strategy and entrepreneurship.",
      tags: ["Business", "Management", "Canada", "Bachelor"],
    },
    {
      name: "Master of Engineering",
      university: "McGill University",
      country: "Canada",
      degreeLevel: "Graduate",
      field: "Engineering",
      mode: "Hybrid",
      requiredSAT: "None (GRE optional)",
      website: "https://www.mcgill.ca/",
      description: "Advanced interdisciplinary engineering education with research components.",
      tags: ["Engineering", "Hybrid", "Canada", "MS"],
    },
  
    // UK Programs
    {
      name: "Bachelor of Arts in Design",
      university: "University of the Arts London",
      country: "UK",
      degreeLevel: "Undergraduate",
      field: "Arts",
      mode: "In-person",
      requiredSAT: "No SAT, portfolio required",
      website: "https://www.arts.ac.uk/",
      description: "Leading design education institution specializing in graphic, fashion, and interior design.",
      tags: ["Arts", "Design", "Creative", "UK", "Bachelor"],
    },
    {
      name: "Master of Finance",
      university: "London Business School",
      country: "UK",
      degreeLevel: "Graduate",
      field: "Finance",
      mode: "In-person",
      requiredSAT: "None (GMAT required)",
      website: "https://www.london.edu/",
      description: "Top-ranked Master of Finance program focusing on investment banking and private equity.",
      tags: ["Finance", "Investment Banking", "UK", "MS"],
    },
  
    // Australia Programs
    {
      name: "AI and Machine Learning Certification",
      university: "University of Melbourne",
      country: "Australia",
      degreeLevel: "Certificate",
      field: "Computer Science",
      mode: "Online",
      requiredSAT: "Not Required",
      website: "https://www.unimelb.edu.au/",
      description: "Professional certification focused on Machine Learning, Neural Networks, and AI Strategy.",
      tags: ["AI", "Machine Learning", "Online", "Australia", "Certificate"],
    },
    {
      name: "Master of Marketing",
      university: "University of Sydney",
      country: "Australia",
      degreeLevel: "Graduate",
      field: "Business",
      mode: "Online",
      requiredSAT: "Not Required (IELTS needed)",
      website: "https://www.sydney.edu.au/",
      description: "Marketing master's program focusing on digital strategy, branding, and analytics.",
      tags: ["Business", "Marketing", "Australia", "Online", "MS"],
    },
  
    // Germany Programs
    {
      name: "Bachelor of Mechanical Engineering",
      university: "Technical University of Munich",
      country: "Germany",
      degreeLevel: "Undergraduate",
      field: "Engineering",
      mode: "In-person",
      requiredSAT: "Not Required (Abitur equivalent)",
      website: "https://www.tum.de/",
      description: "Highly respected Mechanical Engineering degree emphasizing innovation and design.",
      tags: ["Mechanical Engineering", "Germany", "Bachelor"],
    },
  
    // Singapore Programs
    {
      name: "Bachelor of Computer Engineering",
      university: "National University of Singapore",
      country: "Singapore",
      degreeLevel: "Undergraduate",
      field: "Engineering",
      mode: "Hybrid",
      requiredSAT: "1350+",
      website: "https://nus.edu.sg/",
      description: "Prestigious computer engineering degree with focus on hardware-software co-design.",
      tags: ["Computer Engineering", "Singapore", "Bachelor"],
    },
  
    // France Programs
    {
      name: "Bachelor of Fashion Design",
      university: "ESMOD",
      country: "France",
      degreeLevel: "Undergraduate",
      field: "Arts",
      mode: "In-person",
      requiredSAT: "Not Required (Portfolio required)",
      website: "https://www.esmod.com/",
      description: "Leading fashion design school training creative leaders of tomorrow.",
      tags: ["Fashion", "Design", "France", "Bachelor"],
    },
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
  