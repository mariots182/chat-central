import dotenv from "dotenv";

dotenv.config();

export default {
  port: process.env.PORT || 3000,

  database: {
    url:
      process.env.DATABASE_URL ||
      "postgresql://postgres:M4r10182@localhost:5432/chatbot_central",
    baseUrl:
      process.env.PG_BASE_URL ||
      "postgresql://postgres:M4r10182@localhost:5432/",
    tenantUrl:
      process.env.TENANT_DATABASE_URL ||
      "postgresql://postgres:M4r10182@localhost:5432/<DB_NAME>",
    user: process.env.PGUSER || "postgres",
    password: process.env.PGPASSWORD || "M4r10182",
    host: process.env.PGHOST || "localhost",
    port: process.env.PGPORT || 5432,
  },
  whatsapp: {
    token:
      process.env.WHATSAPP_TOKEN ||
      "EAAHpeLbQaOEBO9vn8sZApulwDehheW8qLXyu4rcmC4Xz1IHHBvpQVSwGAnT7W44G0qti4RthxX0R7hoxsh2QeJh1thl78frV0frb5WgoDYM2TLAe7wnsPA8gDioO3DNn0wNQQTruXU7ZBylCQHpSlovp7QfWhK0nXgrONNTm9YLHcoockzTgNbfZCCZBSSdmY2nm0gJynMjfU00PcfPcCFEZD",
    apiUrl: process.env.WHATSAPP_API_URL || "https://graph.facebook.com/",
    apiVersion: process.env.WHATSAPP_API_VERSION || "v22.0",
  },
  google: {
    geminiApiKey: process.env.GEMINI_API_KEY || "YOUR_GOOGLE_API_KEY",
  },
};
