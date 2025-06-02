export interface Company {
  id: number;
  name: string;
  database: string;
  active: boolean;
  activeCampaign: boolean;
  phoneWhatsapp: string;
  promptInfo: string;
  catalog?: CompanyProduct[];
  createdAt: Date;
  updatedAt: Date;
}

export interface CompanyProduct {
  id: number;
  name: string;
  price: number;
  stock: number;
  description: string;
  imageUrl: string;
  category: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export enum CompanySubscriptionType {
  BASIC = "BASIC",
  PREMIUM = "PREMIUM",
  ENTERPRISE = "ENTERPRISE",
}

export interface CompanyLog {
  id: number;
  companyId: number;
  action: string;
  description: string;
  createdAt: Date;
}

export interface CompanyLegalInformation {
  id: number;
  ownerName?: string;
  ownerPhone?: string;
  ownerEmail?: string;
  contactName?: string;
  contactPhone?: string;
  contactEmail?: string;
  address?: string;
  rfc?: string;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
  companyId: number;
}

export interface CompanySubscription {
  id: number;
  companyId: number;
  subscriptionType: CompanySubscriptionType;
  startDate: Date;
  endDate?: Date;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}
