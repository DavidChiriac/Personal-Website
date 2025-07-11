export interface ISystemDuplicate {
  id: string;
  origin: string;
  retrievedOn: string;
  retrievedBy: string;
  vendorCustomerCode: string;
  country: string;
  name1: string;
  name2: string;
  city: string;
  district: string;
  poBox: string;
  postalCode: string;
  region: string;
  searchTerm: string;
  street: string;
  title: string;
  language: string;
  taxNumber1: string;
  telephone1: string;
  faxNumber: string;
  vatRegistrationNumber: string;
  url: string;
  tradingPartner: string;
  category: string;
  cfinCode: number;
  vendor: boolean;
  customer: boolean;
  oneTimeAcc: boolean;
  accountGroup: string;
  bpGrouping: string;
}

export interface ISystemDuplicatesRequestParams {
  [key: string]: any;

  pageSize?: number;
  pageNumber?: number;
  globalSearchInput?: string;
  origins?: string[];
  vendorCodes?: string[];
  customerCodes?: string[];
  oneTimeAccounts?: string[];
  categories?: string[];
  accountGroups?: string[];
  bpGroupings?: string[];
  vendorCustomerCode?: string;
  cfinCode?: string;
  name1?: string;
  name2?: string;
  searchTerm?: string;
  country?: string;
  city?: string;
  district?: string;
  poBox?: string;
  postalCode?: string;
  region?: string;
  street?: string;
  title?: string;
  language?: string;
  taxNumber1?: string;
  telephone1?: string;
  faxNumber?: string;
  vatRegistrationNumber?: string;
  url?: string;
  tradingPartner?: string;
  retrievedOn?: string;
  retrievedBy?: string;
  fieldToSort?: string;
  sortDirection?: string;
}

export interface ISystemDuplicatesFilters {
  vendorCustomerCode: string;
  cfinCode: string;
  name1: string;
  name2: string;
  searchTerm: string;
  country: string;
  city: string;
  district: string;
  poBox: string;
  postalCode: string;
  region: string;
  street: string;
  title: string;
  language: string;
  taxNumber1: string;
  telephone1: string;
  faxNumber: string;
  vatRegistrationNumber: string;
  url: string;
  tradingPartner: string;
  comment: string;
  retrievedOn: string;
  retrievedBy: string;
  origins: string[];
  vendorCodes: string[];
  customerCodes: string[];
  oneTimeAccounts: string[];
  categories: string[];
  accountGroups: string[];
  bpGroupings: string[];
}
