import { IBountiesActions } from "../../types/IBountiesActions";
import { Dispatch } from "redux";
import { setBountiesAction } from "../actions/BountiesActions";

const BOUNTIES_LINK = "https://staging.helloagain.at/api/v1/clients/5189/bounties/";

export const setBounties = () => {
  return async function (dispatch: Dispatch<IBountiesActions>) {
    console.log(BOUNTIES_LINK);
    try {
      await fetch(`${BOUNTIES_LINK}`)
        .then(res => res.json())
        .then(result => {
          if (result && result.length > 0) {
            dispatch(setBountiesAction(result));
          }
        });
    } catch (e) {}
  };
};
