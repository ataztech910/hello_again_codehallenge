import { IBountiesItem } from "../../types/IBountiesItem";
import {
  BOUNTIES_ACTION_NAMES,
  IBountiesActions,
} from "../../types/IBountiesActions";

export const setBountiesAction = (
  bounties: Array<IBountiesItem>,
): IBountiesActions => {
  return {
    type: BOUNTIES_ACTION_NAMES.SET_BOUNTIES,
    payload: bounties,
  };
};

export const collectRewardAction = (item: IBountiesItem): IBountiesActions => {
  return {
    type: BOUNTIES_ACTION_NAMES.COLLECT_REWARD,
    payload: item,
  };
};

export const calculateRewardAction = (reward: number): IBountiesActions => {
  return {
    type: BOUNTIES_ACTION_NAMES.CALCULATE_REWARD,
    payload: reward,
  };
};
