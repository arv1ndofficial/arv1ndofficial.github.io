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
    "Senior Data & AI Engineer with 5+ years building high-throughput cloud data platforms and applied GenAI architectures. Led a 5-engineer team standing up open-source lakehouses on EKS (Spark, Iceberg, Trino, Airflow), engineered fintech SCD-2 audit history, and pioneered agentic MCP integrations connecting LLMs to production data workflows.",
};

export const stats = [
  { label: "Years of experience", value: "5+" },
  { label: "Engineers led", value: "5" },
  { label: "Awards won", value: "3" },
  { label: "Certifications", value: "4" },
];

export type JourneyMilestone = {
  period: string;
  stage: string;
  title: string;
  org: string;
  description: string;
  badge: string;
  isCurrent?: boolean;
  isFuture?: boolean;
};

export const journeyMilestones: JourneyMilestone[] = [
  {
    period: "2016 — 2020",
    stage: "01. The Origin",
    title: "Engineering Foundation & Computer Vision",
    org: "University College of Engineering (Anna University)",
    description:
      "Graduated First Class in ECE. Final-year project on OpenCV facial recognition models ignited a passion for computational efficiency, matrix algorithms, and large-scale data systems.",
    badge: "Foundation",
  },
  {
    period: "2021 — 2025",
    stage: "02. Scale & Streaming",
    title: "Enterprise Big Data & Cloud Migrations",
    org: "Tata Consultancy Services",
    description:
      "Built Kubernetes-managed PySpark pipelines, automated Airflow orchestration, and engineered Kafka-Spark streaming pipelines at telecom scale. Recognized with Technical Excellence and Inspiring Talent awards.",
    badge: "Enterprise Scale",
  },
  {
    period: "2025 — Present",
    stage: "03. Current Impact",
    title: "EKS Lakehouse & Agentic Data Orchestration",
    org: "M2P Fintech (SDE 2)",
    description:
      "Architected open-source data lakehouse on EKS (Spark, Iceberg, Trino, Nessie), led a 5-engineer team, built fintech SCD-2 audit pipelines, and pioneered agentic MCP integrations for LLM-driven ETL.",
    badge: "Current Role",
    isCurrent: true,
  },
  {
    period: "Next Frontier",
    stage: "04. Future Trajectory",
    title: "Autonomous Data Systems & Frontier AI",
    org: "Career Vision & Growth",
    description:
      "Dedicated to building a transformative career at the intersection of scalable data engineering and AI — architecting self-healing declarative pipelines, unified lakehouses, and production-grade agentic intelligence.",
    badge: "Vision",
    isFuture: true,
  },
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
      "Delta Live Tables (DLT)",
      "Databricks Auto Loader",
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
    skills: ["Python", "SQL", "Scala", "Change Data Capture (CDC / SCD)", "Multi-tenant ETL Orchestration", "Medallion Architecture"],
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
      "**EKS Open-Source Lakehouse:** Architected scalable data lake on EKS integrating Spark, Iceberg, Trino, Airflow, and Nessie Catalog, reducing data access latency and cloud storage costs.",
      "**Agentic MCP Integration:** Extended the platform into an agentic tech stack, driving ETL pipelines via MCP (Model Context Protocol) to let LLM agents trigger and monitor data workflows.",
      "**Fintech SCD-2 Audit History:** Built SCD Type 2 history pipelines on Apache Iceberg with a Hot/Cold architecture and dynamic watermarking, enabling full audit trails over impacted partitions.",
      "**Serverless ETL Automation:** Automated serverless ETL with AWS Glue and Lambda, cutting manual schema management by 40% with real-time data validation.",
      "**Workload Security:** Hardened workloads using IRSA (IAM Roles for Service Accounts) for Spark, Airflow, and Trino; integrated Teams webhook alerting for instant incident notifications.",
      "**Engineering Leadership:** Led a 5-member team to deliver the end-to-end data lake platform on schedule, earning recognition for technical ownership and cross-functional leadership.",
      "**Award Recognition:** Honored with 'Above & Beyond in Engineering (Applause 2026)' for exceptional technical dedication and impactful platform delivery.",
    ],
  },
  {
    role: "Data Engineer",
    org: "Tata Consultancy Services",
    location: "Chennai, India",
    period: "Apr 2021 — Feb 2025",
    bullets: [
      "**Kubernetes Spark Optimization:** Developed and optimized PySpark applications on a Kubernetes-managed Spark cluster for large-scale enterprise analytics.",
      "**Airflow ETL DAGs:** Automated ETL workflows using Apache Airflow DAGs on Kubernetes, improving pipeline efficiency and resource utilization.",
      "**Oracle-to-Cloud Migration:** Migrated legacy Oracle RDBMS to GCP using PySpark and Spark-SQL, reducing processing time and improving data consistency.",
      "**Storage & Query Performance:** Optimized storage by implementing partitioned Hive tables with compression across AWS S3 and GCP.",
      "**Real-Time Streaming:** Integrated Spark API and Kafka for real-time data processing; migrated VDS to Dremio for optimized federated query access.",
      "**Award-Winning Delivery:** Recognized with 'Technical Excellence' and 'Inspiring Talent' awards for consistently delivering high-impact data engineering projects.",
    ],
  },
];

export type Project = {
  name: string;
  org: string;
  description: string;
  bullets: string[];
  tags: string[];
  repoUrl?: string;
};

export const projects: Project[] = [
  {
    name: "Goodcabs — Transportation Lakehouse & Declarative CDC",
    org: "Personal Engineering Project",
    description: "Streaming medallion lakehouse with Auto Loader, Delta Live Tables & SCD Type 1 CDC",
    bullets: [
      "**Declarative Medallion Architecture:** Architected an end-to-end Medallion lakehouse on Databricks using Spark Declarative Pipelines (DLT) across 10 Tier-2 cities in India.",
      "**Auto Loader Ingestion:** Implemented Databricks Auto Loader streaming ingestion with schema inference and rescue mode for zero-data-loss raw landing in Bronze Delta tables.",
      "**Automated SCD-1 CDC Flow:** Engineered automated SCD Type 1 Change Data Capture (CDC) upsert flows with dynamic sequence timestamps and data quality expectations.",
      "**Curated Dimensional Analytics:** Constructed dimensional models including dynamic calendar logic with national holiday markers and optimized Gold views for city-level analytics.",
    ],
    tags: ["Databricks", "Delta Live Tables", "PySpark", "Auto Loader", "CDC / SCD Type 1", "Medallion Architecture", "Unity Catalog"],
    repoUrl: "https://github.com/arv1ndofficial/transport-proj-dbx",
  },
  {
    name: "Prism",
    org: "M2P Fintech",
    description: "Agentic control plane for a data lakehouse",
    bullets: [
      "**Unified Platform Plane:** Built a full-stack control plane hosting Airflow, Spark, Trino, and Unity Catalog to orchestrate ETL pipelines ingesting into Iceberg and Delta tables.",
      "**MCP-Friendly Chat Orchestration:** Made the pipeline MCP-friendly, letting users define source/destination connections and dictate table migrations through a single chat interface.",
      "**Automated Ingestion-to-Load:** Automated end-to-end orchestration — Airflow-driven DAGs trigger Spark jobs for ingestion, transformation, and load from source to target.",
    ],
    tags: ["Airflow", "Spark", "Trino", "Unity Catalog", "MCP", "Iceberg"],
  },
  {
    name: "Synthetic Telecom Data & RAG/MCP Orchestration Platform",
    org: "Tata Consultancy Services",
    description: "Synthetic data generation + agentic retrieval for telecom",
    bullets: [
      "**SeqGAN Synthetic Generation:** Built a SeqGAN architecture to generate high-fidelity synthetic telecom data, reducing model bias on imbalanced datasets.",
      "**Domain-Specific RAG:** Developed a RAG system with ChromaDB vector embeddings and Ollama-powered open-source LLMs for fast domain intelligence retrieval.",
      "**Agent Tooling via MCP:** Exposed retrieval and data tools to LLMs via MCP servers, standardizing how agents accessed telecom data sources with Airflow orchestration.",
    ],
    tags: ["SeqGAN", "RAG", "ChromaDB", "Ollama", "MCP", "Airflow"],
  },
  {
    name: "Real-Time Location-Based Marketing",
    org: "Tata Consultancy Services",
    description: "Spark Streaming pipeline for GDPR-compliant targeting",
    bullets: [
      "**Low-Latency Location Ingestion:** Used Spark Streaming to ingest real-time location data from ISP towers and cross-validate against customer records.",
      "**GDPR-Compliant Storage:** Stored recipient history in Cassandra NoSQL with a 6-month retention window; delivered filtered data to the Macy API in full GDPR compliance.",
    ],
    tags: ["Spark Streaming", "Cassandra", "GDPR", "Kafka"],
  },
];

export type HobbyProject = {
  name: string;
  category: string;
  description: string;
  bullets: string[];
  tags: string[];
  iconType: "tv" | "cpu" | "sparkles";
  repoUrl?: string;
};

export const hobbyProjects: HobbyProject[] = [
  {
    name: "CleanTV — Android TV 4K Launcher & Debloater",
    category: "Home Automation & Embedded UI",
    description: "System-level telemetry stripping, ad-blocking, and custom Apple TV 4K glassmorphism launcher",
    iconType: "tv",
    bullets: [
      "Debloated 29+ background telemetry, tracking, and ad-delivery services on Android TV 11 via ADB without requiring root access.",
      "Engineered an ad-free Apple TV 4K-style glassmorphism interface with dynamic ambient glow sampled from app banners, custom input pills, and persistent network status.",
      "Configured system-wide encrypted Private DNS (AdGuard) blocking tracker domains and third-party sponsored suggestions across all streaming apps.",
      "Wrote automated bash deployment and one-click rollback scripts for safe firmware maintenance.",
    ],
    tags: ["Android TV 11", "ADB Shell", "Glassmorphism UI", "Private DNS", "System Optimization"],
  },
  {
    name: "Raspberry Pi Animatronic Robot & PiKVM",
    category: "Robotics & Hardware Tinkering",
    description: "Interactive animatronics, I2C OLED display, servo control, and headless Linux optimization",
    iconType: "cpu",
    bullets: [
      "Engineered an interactive robot controller in Python with a Flask web UI, animating an SSD1306 I2C OLED display with real-time expressive eyes and emotion states.",
      "Programmed angular servo motor controls for pan/tilt head movement using PiGPIO hardware PWM for jitter-free positioning.",
      "Stripped unnecessary OS daemons (CUPS, cloud-init, RPC, background pollers) to maximize real-time GPIO responsiveness and reduce idle RAM usage.",
      "Configured PiKVM for out-of-band headless server management with HDMI-CSI video capture and USB HID keyboard/mouse emulation.",
    ],
    tags: ["Raspberry Pi", "Python / Flask", "I2C OLED", "PiGPIO Servos", "PiKVM", "Embedded Linux"],
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
  { name: "Above & Beyond in Engineering (Applause 2026)", issuer: "M2P Fintech", period: "Aug 2026" },
  { name: "Inspiring Talent", issuer: "Tata Consultancy Services", period: "Jun 2023" },
  { name: "Technical Excellence", issuer: "Tata Consultancy Services", period: "Aug 2022" },
];
