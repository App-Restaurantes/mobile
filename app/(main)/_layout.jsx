/* eslint-disable react/prop-types */
/* global require */
import { Tabs } from "expo-router";
import { Image } from "react-native";



function FeedIcon({ focused }) {
  var source = require("../../assets/feed_icon_unf.png");
  if (focused)
    source = require("../../assets/feed_icon.png");

  return <Image source={source} style={{ height: 20, width: 20 }} />;
}

function ListsIcon({ focused }) {
  var source = require("../../assets/lists_icon_unf.png");
  if (focused)
    source = require("../../assets/lists_icon.png");

  return <Image source={source} style={{ height: 20, width: 20 }} />;
}

function SearchIcon({ focused }) {
  var source = require("../../assets/search_icon_unf.png");
  if (focused)
    source = require("../../assets/search_icon.png");

  return <Image source={source} style={{ height: 20, width: 20 }} />;
}

function ProfileIcon({ focused }) {
  var source = require("../../assets/profile_icon_unf.png");
  if (focused)
    source = require("../../assets/profile_icon.png");

  return <Image source={source} style={{ height: 20, width: 20 }} />;
}

export default function() {
  return (
    <Tabs>
      <Tabs.Screen
        name="feed/index"
        options={{ title: "Feed", tabBarIcon: FeedIcon, tabBarShowLabel: false }}
      />

      <Tabs.Screen
        name="lists"
        options={{ headerShown: false, tabBarIcon: ListsIcon, tabBarShowLabel: false }}
      />

      <Tabs.Screen
        name="restaurants"
        options={{ headerShown: false, tabBarIcon: SearchIcon, tabBarShowLabel: false }}
      />

      <Tabs.Screen
        name="profile"
        options={{ headerShown: false, tabBarIcon: ProfileIcon, tabBarShowLabel: false }}
      />
    </Tabs>
  );
}
