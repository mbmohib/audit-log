import { ResponseComposition, RestContext, RestRequest } from 'msw';

import { sites } from '../db';

export const getSites = (
  req: RestRequest,
  res: ResponseComposition,
  ctx: RestContext,
) => res(ctx.status(200), ctx.json(sites));

export const getSite = (
  req: RestRequest,
  res: ResponseComposition,
  ctx: RestContext,
) => {
  const { id } = req.params;

  res(ctx.status(200), ctx.json(sites.find(site => site.siteId === id)));
};
