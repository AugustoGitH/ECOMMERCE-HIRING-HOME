export interface LaborLinks {
  linkedin: string;
  portfolio: string;
}
export interface Labor {
  createdAt: string;
  updatedAt: string;
  description: string;
  languageLevel: string;
  id: string;
  localization: string;
  links: LaborLinks;
  personOrCompany: string;
  hourlyRate: number;
  title: string;
  training: string;
  typeOfPayment: string;
}
