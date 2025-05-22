export interface CustomerSessionModel {
  id: number;
  customerId: number;
  sessionId: string;
  wamId: string;
  lastAccess: Date;
  lastMessage: string;
  lastMessageDate: Date;
  lastMessageType: string;
  lastMessageStatus: string;
  previousState: string;
  state: string;
  deviceId: string;
  expiresAt: Date;
  createdAt: Date;
  ipAddress: string;
  updatedAt: Date;
}

export interface RedisSessionContext {
  customerId: number;
  sessionId: string;
  wamId: string;
  conversation: conversation[];
  state: string;
  data: Record<string, any>;
  expiresAt: string;
}

export interface conversation {
  role: "user" | "model";
  parts: conversationParts[];
}

export interface conversationParts {
  text: string;
}

export const sessionFlowMap = {
  // 1. WELCOME_FLOW
  WELCOME_FLOW: ["SHOW_GREETING", "SHOW_CAMPAIGN", "SHOW_MAIN_MENU"],

  // 2. REGISTRATION_FLOW
  REGISTRATION_FLOW: [
    "REQUIRE_REGISTRATION",
    "ASK_LOCATION_OR_MANUAL",
    "AUTO_LOCATION_CHECK",
    "SHOW_AUTO_ADDRESS",
    "CONFIRM_AUTO_ADDRESS",
    "MANUAL_ADDRESS_ENTRY",
    "CONFIRM_MANUAL_ADDRESS",
    "COVERAGE_RECHECK",
  ],

  // 3. CUSTOMER_DETAILS_FLOW
  CUSTOMER_DETAILS_FLOW: [
    "ASK_LAST_NAME_PATERNO",
    "ASK_LAST_NAME_MATERNO",
    "ASK_FIRST_NAME",
    "ASK_EMAIL",
    "ASK_CONFIRM_OR_CANCEL",
  ],

  // 4. ERROR_HANDLING_FLOW
  ERROR_HANDLING_FLOW: ["SHOW_ERROR_AND_TRANSFER", "HUMAN_TRANSFER"],

  // 5. HUMAN_SERVICE_FLOW
  HUMAN_SERVICE_FLOW: [
    "WAIT_FOR_AGENT",
    "AGENT_CONNECTED",
    "HUMAN_INTERACTION",
    "FINAL_ADDRESS_CONFIRMATION",
    "FINAL_ORDER_CAPTURE",
    "HUMAN_END_SESSION",
  ],

  // 6. ORDER_FLOW
  ORDER_FLOW: [
    "SHOW_SAVED_ADDRESSES",
    "SELECT_DELIVERY_DATE",
    "SHOW_CATALOGUE",
    "COLLECT_CART_ITEMS",
    "ASK_ADD_MORE",
    "SHOW_ORDER_SUMMARY",
    "ASK_ORDER_CONFIRM",
  ],

  // 7. REPEAT_ORDER_FLOW
  REPEAT_ORDER_FLOW: ["SHOW_LAST_ORDER_SUMMARY", "ASK_REPEAT_OR_MAIN_MENU"],

  // 8. PRICE_QUERY_FLOW
  PRICE_QUERY_FLOW: ["SHOW_PRICE_MENU", "PROCESS_PRICE_REQUEST", "SHOW_PRICES"],

  // 9. COVERAGE_CHECK_FLOW
  COVERAGE_CHECK_FLOW: [
    "ASK_LOCATION",
    "VALIDATE_COVERAGE",
    "SHOW_COVERAGE_RESULT",
  ],

  // 10. HELP_FLOW
  HELP_FLOW: ["SHOW_HELP_OPTIONS", "PROCESS_HELP_SELECTION"],

  // 11. SURVEY_FLOW
  SURVEY_FLOW: [
    "ASK_SURVEY_CONSENT",
    "ASK_SATISFACTION_RATING",
    "ASK_PROBLEM_RESOLVED",
    "THANK_AND_CLOSE",
  ],

  // 12. EXIT_FLOW
  EXIT_FLOW: ["CLOSE_SESSION", "END_CHAT"],
} as const;

// Tipos
export type SessionFlow = keyof typeof sessionFlowMap;
export type SessionSubState<F extends SessionFlow> =
  (typeof sessionFlowMap)[F][number];

/**
 * Estado completo: una tupla de flujo y subestado
 */
export type SessionState = {
  flow: SessionFlow;
  subState: SessionSubState<SessionFlow>;
};
