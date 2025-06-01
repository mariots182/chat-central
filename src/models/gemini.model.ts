export interface GeminiResponse {
  json: GeminiResponseJson;
  text: string;
}

export interface GeminiResponseJson {
  wa_type_message?: string;
  update_bd?: boolean;
  intent?: string;
  db_operation?: string;
  customer_info?: any;
  [key: string]: any;
}
