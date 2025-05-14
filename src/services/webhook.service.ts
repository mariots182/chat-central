import {
  centralPrisma,
  getTenantPrisma,
} from "../database/prismaClientFactory";
import { findCompanyByPhone } from "../utils/company";
import { createCustomer, findCustomerByPhone } from "../utils/customer";
import { extractMessageDetails } from "../utils/messages";
import {
  createNewSession,
  getSessionByCustomerId,
  handleSessionState,
} from "../utils/sessions";

export const processIncomingMessage = async (body: any) => {
  const messageDetails = extractMessageDetails(body);
  const { from, text, phoneNumberId, displayPhoneNumber, type, id } =
    messageDetails;

  if (
    (messageDetails.statuses !== undefined &&
      messageDetails.statuses.status === "sent") ||
    (messageDetails.statuses !== undefined &&
      messageDetails.statuses.status === "delivered")
  ) {
    console.warn(
      "[webhookService][processIncomingMessage] Message already sent or delivered"
    );

    return;
  }

  if (!from || !text || !displayPhoneNumber) {
    console.warn(
      "[webhookService][processIncomingMessage] Incomplete payload received"
    );

    return;
  }

  const company = await findCompanyByPhone(displayPhoneNumber);

  if (!company) {
    console.error(
      `[webhookService][processIncomingMessage] Company not found for ${displayPhoneNumber}`
    );
    return;
  }

  const tenantDB = getTenantPrisma(`tenant_${company.database}`);

  let customer = await findCustomerByPhone(from, tenantDB);

  if (!customer) {
    customer = await createCustomer(from, tenantDB);
  }

  let session = await getSessionByCustomerId(customer.id, tenantDB);

  if (!session) {
    session = await createNewSession(customer.id, phoneNumberId, tenantDB);
  }

  await handleSessionState(session, from, phoneNumberId, tenantDB, customer);
};

// async function findCompanyByPhone(displayPhoneNumber: string) {
//   return await centralPrisma.company.findFirst({
//     where: { phoneWhatsapp: displayPhoneNumber },
//   });
// }
