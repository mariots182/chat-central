import config from "../config";

export function getTenantDatabaseUrl(tenantDbName: string): string {
  const base = process.env.PG_BASE_URL;

  if (!base) throw new Error("PG_BASE_URL not set");

  return `${base}tenant_${tenantDbName}`;
}

export async function handleGeocodingAddress(location: any) {
  const geoUrl = `${config.google.geocodingURL}json?latlng=${location.latitude},${location.longitude}&key=${config.google.geocodingApiKey}`;
  let nearbyAddresses: string[] = [];
  let responseJson;
  let messageAddresses;

  try {
    const response = await fetch(geoUrl);
    if (!response.ok) throw new Error("Failed to fetch geocoding data");

    const data = await response.json();

    if (data.status === "OK" && Array.isArray(data.results)) {
      nearbyAddresses = data.results.map(
        (result: any) => result.formatted_address
      );
    }

    messageAddresses = `${nearbyAddresses[0]}`;

    return messageAddresses;
  } catch (error) {
    console.error(
      "[BotService][getBotResponse] Error al procesar la ubicación:",
      error
    );
    return "";
  }
}
