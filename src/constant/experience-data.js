import {
  Beewise,
  GR8Tech,
  ParimatchMon,
  ParimatchTech
} from "../assets/image";

const ExperienceData = [
  {
    startDate: "February 2023",
    position: "Middle Java Developer",
    company: {
      logo: GR8Tech,
      name: "GR8 Tech",
      location: "Remote | Kyiv, Ukraine"
    },
    description: "Supporting existing product and developing new services including related work such as backward-compatible features implementation, database migration and interaction with AWS services. Additionally researched service performance under high load using Scala & Gatling with the advance of Java 21 and the virtual threads.",
    techStack: [
      "Java 17",
      "Java 21",
      "Spring Boot",
      "Spring WebFlux",
      "Spring Cloud Gateway",
      "Gradle",
      "AWS DynamoDB",
      "AWS Lambda",
      "AWS S3",
      "ScyllaDB",
      "Neo4J",
      "Kafka",
      "Avro",
      "JUnit",
      "Mockito",
      "Testcontainers",
      "GitLab",
      "Docker",
      "Kubernetes",
      "Cloudflare",
      "Terraform"
    ]
  },
  {
    startDate: "October 2021",
    endDate: "January 2023",
    position: "Java Developer",
    company: {
      logo: ParimatchTech,
      name: "Parimatch Tech",
      location: "Remote | Kyiv, Ukraine"
    },
    subExperience: [
      {
        startDate: "October 2022",
        endDate: "January 2023",
        position: "Middle Java Developer",
      },
      {
        startDate: "January 2022",
        endDate: "September 2022",
        position: "Junior Java Developer",
      },
      {
        startDate: "October 2021",
        endDate: "December 2021",
        position: "Intern Java Developer",
      }
    ],
    description: "Supported existing services and developed new ones from scratch using new technology and approaches. Migrated existing services from Java 11 to Java 17 and Spring Boot 2 to Spring Boot 3 with the corresponding challenges. Developed integration supposed to whitelist IPs and manage DNS records via Cloudflare. Interacted with external game providers.",
    techStack: [
      "Java 11",
      "Java 17",
      "Spring Boot",
      "Spring WebFlux",
      "Spring Cloud Gateway",
      "Spring Cloud Stream",
      "Gradle",
      "AWS DynamoDB",
      "Kafka",
      "Avro",
      "JUnit",
      "Mockito",
      "Testcontainers",
      "GitLab",
      "Docker",
      "Kubernetes",
      "Cloudflare",
      "Terraform"
    ]
  },
  {
    startDate: "August 2021",
    endDate: "September 2021",
    position: "Java Developer",
    company: {
      logo: ParimatchMon,
      name: "Parimatch Foundation",
      location: "Remote"
    },
    description: "Contributed to 'Active Youth' Ministry of Education and Science of Ukraine initiative project supported by Parimatch Foundation. This project was intended to provide ukrainian state functionality to organize sport events and accumulate all winning points among all young ukrainian sportsmen and their coaches. Developed monolithic project providing functionality of entities management and reports generation.",
    techStack: [
      "Java 11",
      "Spring Boot",
      "Spring Cloud Gateway",
      "Maven",
      "PostgreSQL",
      "JUnit",
      "Mockito",
      "GitLab",
      "Docker"
    ]
  },
  {
    startDate: "March 2021",
    endDate: "August 2021",
    position: "AI Trainee",
    company: {
      logo: Beewise,
      name: "Beewise",
      location: "Remote"
    },
    description: "Performed manual EDA on AI model output for honeycombs extracted from smart hives. Interacted with professional beekepers and management team from Israel.",
    techStack: [
      "Tableau"
    ]
  }
];

export default ExperienceData;
