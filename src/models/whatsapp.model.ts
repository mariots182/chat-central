export interface WhatsAppMessageDetails {
  from: string;
  text: string;
  phoneNumberId: string;
  displayPhoneNumber: string;
  type: string;
  timestamp: string;
  id: string;
  location?: {
    latitude: number;
    longitude: number;
    name?: string;
    address?: string;
  };
  statuses?: {
    id: string;
    status: string;
    timestamp: string;
  };
  messageBody?: {
    text: string;
    type: string;
  };
}

export interface WhatsAppMessage {
  to: string;
  phoneNumberId: string;
  message: string;
  interactive?: {
    type: string;
    body: {
      text: string;
    };
    action: {
      buttons: IButtonInteractive[];
    };
  };
}

export interface IButtonInteractive {
  type: string;
  reply: {
    id: string;
    title: string;
  };
}
