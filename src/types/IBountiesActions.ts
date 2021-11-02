import { IBountiesItem } from "./IBountiesItem";

export enum BOUNTIES_ACTION_NAMES {
  SET_BOUNTIES = "SET_BOUNTIES",
  COLLECT_REWARD = "COLLECT_REWARD",
  CALCULATE_REWARD = "CALCULATE_REWARD",
}

export interface IBountiesActions {
  type: keyof typeof BOUNTIES_ACTION_NAMES;
  payload: Array<IBountiesItem> | IBountiesItem | number;
}
