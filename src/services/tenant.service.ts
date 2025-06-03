class TenantService {
  getTenantUrl(tenant: string): string {
    if (!/^[a-zA-Z0-9_]+$/.test(tenant)) {
      throw new Error("Tenant inválido.");
    }

    return `postgresql://postgres:M4r10182@localhost:5432/${tenant}`;
  }
}
export default TenantService;
