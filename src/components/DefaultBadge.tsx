import { Badge } from "react-native-elements";
import React from "react";

export const DefaultBadge = ({
  count,
  reward_is_collected,
}: {
  count: number;
  reward_is_collected?: boolean;
}) => {
  if (!reward_is_collected) {
    return (
      <Badge
        containerStyle={{ position: "absolute", top: 4, right: -4 }}
        value={count}
        status={count > 0 ? "success" : "error"}
      />
    );
  }
  return (
    <Badge
      containerStyle={{ position: "absolute", top: 4, right: -4 }}
      value="done"
      status="warning"
    />
  );
};
