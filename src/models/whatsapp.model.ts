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
