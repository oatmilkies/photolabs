import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

//Display list of topics
const TopicList = (props) => {
  const topicItems = props.topics.map((item) =>
    <TopicListItem key={item.id} listItem={item} photosByTopic={props.photosByTopic} handleTopicClick={props.handleTopicClick} />
  );

  return (
    <div className="top-nav-bar__topic-list">
      {topicItems}
    </div>
  );
};

export default TopicList;
