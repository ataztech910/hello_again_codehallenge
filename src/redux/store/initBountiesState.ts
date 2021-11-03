import { IBountiesState } from "../../types/IBountiesState";

export const initBountiesState = (): IBountiesState => {
  return {
    bounties: [],
    reward: 0,
  };
};
