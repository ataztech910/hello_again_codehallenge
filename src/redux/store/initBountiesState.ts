import { IBountiesState } from "../../types/IBountiesState";

export const initBountiesState = (): IBountiesState => {
  return {
    bounties: [],
    collected: [],
    currentItem: null,
    reward: 0,
  };
};
