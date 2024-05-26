import React from "react";

import "../styles/TopicListItem.scss";

//Display a single topic
const TopicListItem = (props) => {
  return (
    <ul className="topic-list__item" key={props.listItem.id} onClick={() => props.handleTopicClick(props.listItem.id)}>
      <span className="topic-list__item span" >{props.listItem.title}</span>
    </ul>
  );
};

export default TopicListItem;
