import React from "react";
import { useDispatch } from "react-redux";
import { StyledView } from "./styled/StyledView";
import { IBountiesItem } from "../types/IBountiesItem";
import Icon from "react-native-vector-icons/FontAwesome";
import { StyledItemName } from "./styled/StyledItemName";
import { StyledCollectButton } from "./styled/StyledCollectButton";
import {
  calculateRewardAction,
  collectRewardAction,
} from "../redux/actions/BountiesActions";
import { Avatar, Badge, Text } from "react-native-elements";
import { ActivityIndicator, View } from "react-native";
import { DefaultBadge } from "./DefaultBadge";
Icon.loadFont();

export const DefaultItem = ({
  item,
  dispatch,
}: {
  item: IBountiesItem;
  dispatch: any;
}) => {
  const collect = (currentItem: IBountiesItem) => {
    dispatch(collectRewardAction(item));
    dispatch(calculateRewardAction(currentItem.needed_points));
  };

  const makeImage = (currentItem: IBountiesItem) => {
    return currentItem.image !== ""
      ? currentItem.image
      : "https://picsum.photos/200?id=" + item.id;
  };

  return (
    <StyledView key={item.id}>
      <View>
        <Avatar
          overlayContainerStyle={{ backgroundColor: "blue" }}
          rounded
          source={{
            uri: makeImage(item),
          }}
          size="medium"
          renderPlaceholderContent={<ActivityIndicator />}
        />
        <Badge
          containerStyle={{ position: "absolute", top: 4, right: -4 }}
          value={item.needed_points}
          status={item.needed_points > 0 ? "success" : "error"}
        />
        <DefaultBadge
          count={item.needed_points}
          reward_is_collected={item.reward_is_collected}
        />
      </View>
      <StyledItemName>{item.name}</StyledItemName>
      {item.needed_points > 0 && !item.reward_is_collected && (
        <StyledCollectButton onPress={() => collect(item)}>
          <Icon name={"money"} size={20} color="#6A9F41" />
        </StyledCollectButton>
      )}
    </StyledView>
  );
};
