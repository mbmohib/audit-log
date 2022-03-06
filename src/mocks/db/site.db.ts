import { build, fake, sequence } from '@jackfranklin/test-data-bot';

export const siteBuilder = build('Site', {
  fields: {
    siteId: fake(f => f.datatype.uuid()),
    userId: sequence(),
    name: fake(f => f.company.companyName()),
    userName: fake(f => f.name.findName()),
    address: fake(f => `${f.address.streetAddress()}, ${f.address.cityName()}`),
    description: fake(f => f.lorem.lines(3)),
    latitude: fake(f => f.address.latitude()),
    longitude: fake(f => f.address.longitude()),
    createdAt: fake(f => f.time.recent('unix')),
    updatedAt: fake(f => f.time.recent('unix')),
  },
});

export const sites = [
  siteBuilder(),
  siteBuilder(),
  siteBuilder(),
  siteBuilder(),
  siteBuilder(),
] as Site[];
export const site = siteBuilder() as Site;
