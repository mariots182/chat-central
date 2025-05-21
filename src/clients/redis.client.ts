import { createClient } from "redis";

const redis = createClient({
  url: "redis://localhost:6379",
});

redis.on("error", (err) => {
  console.error("⚠️ Redis error:", err);
  console.warn(
    "¿Seguro que Redis está corriendo? Usa: brew services start redis"
  );
});

redis.connect();

export default redis;
