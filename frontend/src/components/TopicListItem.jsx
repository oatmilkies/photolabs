import React from "react";

import "../styles/TopicListItem.scss";

const sampleDataForTopicListItem = {
  id: "1",
  slug: "topic-1",
  label: "Nature",
};

const TopicListItem = (props) => {
  return (
    <ul className="topic-list__item" key={props.listItem.id}>
      <span className="topic-list__item span">{props.listItem.title}</span>
    </ul>
  );
};

export default TopicListItem;
