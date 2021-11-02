import React, { useEffect } from "react";
import { SafeAreaView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setBounties } from "./redux/effects/Bounties";
import { DefaultDivider } from "./components/DefaultDivider";
import { DefaultItem } from "./components/DefaultItem";
import { StyledReward } from "./components/styled/StyledReward";
import { StyledFlatList } from "./components/styled/StyledFlatList";
import { IBountiesItem } from "./types/IBountiesItem";

const App = () => {
  const dispatch = useDispatch();
  const bounties = useSelector(
    (state: Partial<any>) => state.bounties.bounties,
  );
  const reward = useSelector((state: Partial<any>) => state.bounties.reward);
  useEffect(() => {
    dispatch(setBounties());
  }, [dispatch]);

  return (
    <SafeAreaView>
      <StyledReward>Current reward is: {reward}</StyledReward>
      <StyledFlatList
        ItemSeparatorComponent={DefaultDivider}
        data={bounties}
        renderItem={({ item }: { item: IBountiesItem }) => (
          <DefaultItem item={item} dispatch={dispatch} />
        )}
      />
    </SafeAreaView>
  );
};

export default App;
