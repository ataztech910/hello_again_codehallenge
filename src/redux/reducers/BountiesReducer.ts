import { IBountiesState } from "../../types/IBountiesState";
import { initBountiesState } from "../store/initBountiesState";
import {
  BOUNTIES_ACTION_NAMES,
  IBountiesActions,
} from "../../types/IBountiesActions";
import { IBountiesItem } from "../../types/IBountiesItem";

const initialBounties: IBountiesState = initBountiesState();

export const bountiesReducer = (
  state = initialBounties,
  action: IBountiesActions,
) => {
  switch (action.type) {
    case BOUNTIES_ACTION_NAMES.SET_BOUNTIES:
      return {
        ...state,
        bounties: action.payload,
      };
    case BOUNTIES_ACTION_NAMES.COLLECT_REWARD:
      const currentItem = state.bounties.findIndex(
        (item: IBountiesItem) =>
          item.id === (action.payload as IBountiesItem).id,
      );
      state.bounties[currentItem].reward_is_collected = true;
      const newBounties = [...state.bounties];
      return {
        ...state,
        bounties: newBounties,
      };
    case BOUNTIES_ACTION_NAMES.CALCULATE_REWARD:
      return {
        ...state,
        reward: Number(state.reward + (action.payload as number)),
      };
    default:
      return state;
  }
};
