import React from "react";

import "../styles/TopicList.scss";
import topics from "mocks/topics";
import TopicListItem from "./TopicListItem";

//Display list of topics
const TopicList = () => {
  const topicItems = topics.map((item) =>
    <TopicListItem key={item.id} listItem={item} />
  );

  return (
    <div className="top-nav-bar__topic-list">
      {topicItems}
    </div>
  );
};

export default TopicList;
