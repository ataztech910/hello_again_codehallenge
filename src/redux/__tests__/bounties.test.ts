import { IBountiesState } from "../../types/IBountiesState";
import { initBountiesState } from "../store/initBountiesState";
import { mockData } from "../../mock/mockData";
import { IBountiesItem } from "../../types/IBountiesItem";
import { BOUNTIES_ACTION_NAMES } from "../../types/IBountiesActions";
import { bountiesReducer } from "../reducers/BountiesReducer";

let initialBounties: IBountiesState;
let mockArray: Array<IBountiesItem> = [];

beforeEach(() => {
  initialBounties = initBountiesState();
  mockArray = mockData;
});

test("should fill the bounties array", () => {
  const action = {
    type: BOUNTIES_ACTION_NAMES.SET_BOUNTIES,
    payload: mockArray,
  };
  expect(bountiesReducer(initialBounties, action)).toEqual({
    bounties: mockArray,
    reward: 0,
  });
});

test("should calculate reward", () => {
  const action = {
    type: BOUNTIES_ACTION_NAMES.CALCULATE_REWARD,
    payload: 10,
  };
  expect(bountiesReducer(initialBounties, action)).toEqual({
    bounties: [],
    reward: 10,
  });
});

test("should collect reward", () => {
  const mockState = {
    bounties: mockData,
    reward: 10,
  };
  const action = {
    type: BOUNTIES_ACTION_NAMES.COLLECT_REWARD,
    payload: { id: "daa30241-7df2-4d5b-8f02-f43cbb2b8188" } as IBountiesItem,
  };

  const currentItem = mockData.findIndex(
    (item: IBountiesItem) => item.id === (action.payload as IBountiesItem).id,
  );
  mockData[currentItem].reward_is_collected = true;

  expect(bountiesReducer(mockState, action)).toEqual({
    bounties: mockData,
    reward: 10,
  });
});
