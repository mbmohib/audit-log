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

export const createSite = (
  req: RestRequest,
  res: ResponseComposition,
  ctx: RestContext,
) => {
  res(ctx.status(201), ctx.json(req.body));
};

export const updateSite = (
  req: RestRequest,
  res: ResponseComposition,
  ctx: RestContext,
) => {
  res(ctx.status(200), ctx.json(req.body));
};
