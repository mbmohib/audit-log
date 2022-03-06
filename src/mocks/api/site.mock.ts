import { ResponseComposition, RestContext, RestRequest } from 'msw';

import { site, sites } from '../db';

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

  const siteData = sites.find(item => item.siteId === id) || site;

  return res(ctx.status(200), ctx.json(siteData));
};

export const createSite = (
  req: RestRequest,
  res: ResponseComposition,
  ctx: RestContext,
) => res(ctx.status(201), ctx.json(req.body));

export const updateSite = (
  req: RestRequest,
  res: ResponseComposition,
  ctx: RestContext,
) => res(ctx.status(200), ctx.json(req.body));
