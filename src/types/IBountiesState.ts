import { IBountiesItem } from "./IBountiesItem";

export interface IBountiesState {
  bounties: Array<IBountiesItem>;
  reward: number;
}
