import contactData from "@/data/contact.json";

export type ContactInfo = {
  company: string;
  phones: string[];
  phoneFormatted: string[];
  email: string;
  address: string;
  workingHours: string;
  social: {
    linkedin: string;
    facebook: string;
    twitter: string;
  };
};

export function getContactInfo(): ContactInfo {
  return contactData as ContactInfo;
}

export function getPrimaryPhone(): string {
  return contactData.phoneFormatted[0];
}

export function getPhoneLink(): string {
  return `tel:${contactData.phones[0].replace(/\s/g, "")}`;
}
