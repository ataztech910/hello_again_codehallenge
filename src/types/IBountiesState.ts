import { IBountiesItem } from "./IBountiesItem";

export interface IBountiesState {
  bounties: Array<IBountiesItem>;
  collected: Array<IBountiesItem>;
  currentItem: number | null;
  reward: number;
}
