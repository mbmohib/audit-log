type Site = {
  siteId: string;
  createdBy: string;
  lastUpdatedBy: string;
  name: string;
  address: string;
  description: string;
  latitude: string;
  longitude: string;
  createdAt: Date;
  updatedAt: Date;
};

type SiteForm = Omit<
  Site,
  | 'siteId'
  | 'createdBy'
  | 'lastUpdatedBy'
  | 'createdAt'
  | 'updatedAt'
  | 'userName'
>;
