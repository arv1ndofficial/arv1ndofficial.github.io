export const profile = {
  name: "Aravindan Rameshbabu",
  title: "Senior Data & AI Engineer",
  location: "Chennai, India",
  email: "aravindanramesh910@gmail.com",
  phone: "+91-9659959575",
  linkedin: "https://www.linkedin.com/in/aravindanramesh/",
  github: "https://github.com/arv1ndofficial",
  liveTerminal: `${import.meta.env.BASE_URL}terminal/`,
  resumeUrl: `${import.meta.env.BASE_URL}Aravindan-Rameshbabu-Resume.pdf`,
  summary:
    "Senior Data & AI Engineer with 5+ years spanning large-scale cloud data platforms and applied GenAI systems. Equally at home architecting an open-source data lake on EKS (Spark, Iceberg, Trino, Airflow) and building RAG pipelines with ChromaDB, MCP-based tool orchestration, and open-source LLMs. Led a 5-member team end-to-end and consistently recognized for technical ownership and delivery.",
};

export const stats = [
  { label: "Years of experience", value: "5+" },
  { label: "Engineers led", value: "5" },
  { label: "Awards won", value: "2" },
  { label: "Certifications", value: "4" },
];

export type SkillGroup = {
  label: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "AI / GenAI",
    skills: ["RAG Systems", "MCP (Model Context Protocol)", "LLMs", "ChromaDB", "SeqGAN", "Ollama"],
  },
  {
    label: "Data & Streaming",
    skills: [
      "Apache Spark",
      "PySpark",
      "Spark SQL",
      "Spark Streaming",
      "Apache Kafka",
      "Hadoop",
      "Airflow",
      "Trino",
      "Dremio",
      "Iceberg",
      "Nessie",
    ],
  },
  {
    label: "Cloud & Infra",
    skills: ["AWS (EC2, S3, Glue, IAM)", "Kubernetes", "Databricks", "GitHub Actions"],
  },
  {
    label: "Databases",
    skills: ["MongoDB", "MySQL", "PostgreSQL", "Cassandra"],
  },
  {
    label: "Languages & Patterns",
    skills: ["Python", "SQL", "Scala", "Multi-tenant ETL Orchestration", "Medallion Architecture"],
  },
];

export type Experience = {
  role: string;
  org: string;
  location: string;
  period: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    role: "Senior Data Engineer (SDE 2)",
    org: "M2P Fintech",
    location: "Chennai, India",
    period: "Feb 2025 — Present",
    bullets: [
      "Architected a scalable open-source data lake on EKS integrating Spark, Iceberg, Trino, Airflow, Nessie Catalog, and blob storage, significantly reducing data access latency and storage costs.",
      "Designed and automated ETL workflows using Airflow DAGs with Spark and Iceberg for data processing, Trino for federated querying, and Nessie Catalog for metadata management.",
      "Extended the platform into an agentic tech stack, driving ETL pipelines via MCP (Model Context Protocol) to let LLM agents trigger and monitor data workflows.",
      "Built SCD Type 2 history pipelines on Apache Iceberg with a Hot/Cold table architecture and dynamic watermarking, enabling full fintech audit trails and KPI roll-ups over impacted date partitions.",
      "Automated serverless ETL with AWS Glue and Lambda, cutting manual schema management by 40% and enabling real-time data validation.",
      "Secured all workloads using IRSA (IAM Roles for Service Accounts) for Spark, Airflow, and Trino; integrated Teams webhook alerting for instant pipeline failure notifications.",
      "Led a 5-member team to deliver the end-to-end data lake platform on time, earning recognition for technical ownership and cross-functional leadership.",
    ],
  },
  {
    role: "Data Engineer",
    org: "Tata Consultancy Services",
    location: "Chennai, India",
    period: "Apr 2021 — Feb 2025",
    bullets: [
      "Developed and optimised PySpark applications on a Kubernetes-managed Spark cluster for large-scale advanced analytics.",
      "Automated ETL workflows using Apache Airflow DAGs on Kubernetes, improving pipeline efficiency and resource utilisation.",
      "Migrated Oracle RDBMS to GCP Cloud using PySpark and Spark-SQL, reducing processing time and improving data reliability.",
      "Optimised storage and query performance by implementing partitioned Hive tables with compression across AWS S3 and GCP.",
      "Integrated Spark API and Kafka for real-time data processing; migrated VDS to Dremio for optimised federated data access.",
      "Recognised with 'Technical Excellence' and 'Inspiring Talent' awards for consistently delivering high-impact data engineering projects.",
    ],
  },
];

export type Project = {
  name: string;
  org: string;
  description: string;
  bullets: string[];
  tags: string[];
};

export const projects: Project[] = [
  {
    name: "Prism",
    org: "M2P Fintech",
    description: "Agentic control plane for a data lakehouse",
    bullets: [
      "Built a full-stack control plane hosting Airflow, Spark, Trino, and Unity Catalog to orchestrate ETL pipelines that ingest multi-source data into Iceberg and Delta tables.",
      "Made the entire pipeline MCP-friendly, letting users define source/destination connections and dictate table migrations through a single chat interface instead of manual config.",
      "Automated end-to-end orchestration — Airflow-driven DAGs trigger Spark jobs for ingestion, transformation, and load, from source connection to target table.",
    ],
    tags: ["Airflow", "Spark", "Trino", "Unity Catalog", "MCP", "Iceberg"],
  },
  {
    name: "Synthetic Telecom Data & RAG/MCP Orchestration Platform",
    org: "Tata Consultancy Services",
    description: "Synthetic data generation + agentic retrieval for telecom",
    bullets: [
      "Built a SeqGAN architecture to generate high-fidelity synthetic telecom data, reducing model bias on imbalanced datasets.",
      "Developed a RAG system with ChromaDB vector embeddings and Ollama-powered open-source LLMs for fast, domain-specific intelligence retrieval.",
      "Exposed retrieval and data tools to LLMs via MCP servers, standardising how agents accessed telecom data sources.",
      "Orchestrated the full AI lifecycle — ingestion, embedding, deployment, and monitoring — via Apache Airflow.",
    ],
    tags: ["SeqGAN", "RAG", "ChromaDB", "Ollama", "MCP", "Airflow"],
  },
  {
    name: "Real-Time Location-Based Marketing",
    org: "Tata Consultancy Services",
    description: "Spark Streaming pipeline for GDPR-compliant targeting",
    bullets: [
      "Used Spark Streaming to ingest real-time location data from ISP towers and cross-validate against customer records to identify marketing targets.",
      "Stored recipient history in Cassandra NoSQL with a 6-month retention window; delivered filtered data to the Macy API in full GDPR compliance.",
    ],
    tags: ["Spark Streaming", "Cassandra", "GDPR"],
  },
];

export const education = {
  degree: "B.E. Electronics & Communication Engineering",
  school: "University College of Engineering Tindivanam, Anna University",
  period: "2016 — 2020",
  bullets: [
    "Graduated First Class with CGPA 7.05.",
    "Final-year project: Face Recognition Model using Python and OpenCV with Haar Cascade Classifiers — graded 'S' (Top Grade).",
    "Served as Chairman of the Student Cell; volunteered across multiple institutional events.",
  ],
};

export const certifications = [
  { name: "Azure Data Engineer Associate (DP-203)", issuer: "Microsoft" },
  { name: "Data Streaming Engineer — Apache Flink", issuer: "Confluent", period: "Apr 2026 — Apr 2028" },
  { name: "Linux Essentials (LE-01)", issuer: "Linux Professional Institute" },
  { name: "Hands-on Approach to AI for Real-World Applications", issuer: "" },
];

export const awards = [
  { name: "Technical Excellence", issuer: "Tata Consultancy Services", period: "Aug 2022" },
  { name: "Inspiring Talent", issuer: "Tata Consultancy Services", period: "Jun 2023" },
];
