import React from "react";
import { Text, View, Image } from "react-native";
import { CompactMapInfo } from "../../../components/restaurant/compact-restaurant-info.js";
import { Spacer } from "../../../components/spacer/spacer.component";

export const MapCallout = ({ restaurant }) => (
  <CompactMapInfo restaurant={restaurant} isMap />
);
