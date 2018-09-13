import { ActionType } from 'typesafe-actions';
import * as p from './portfolioActions';

export type PortfolioAction = ActionType<typeof p>;

export type RootAction =
  | PortfolioAction
  | p.PortfolioActionTypes;

export const portfolio = p;
