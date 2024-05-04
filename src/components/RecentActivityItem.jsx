import React, { useState, useEffect } from "react";

function RecentActivityItem({ item }) {
  const [content, setContent] = useState("");
  const [highlight, setHighlight] = useState("");
  const [highlightedContent, setHighlightedContent] = useState("");
  const [restContent, setRestContent] = useState("");

  useEffect(() => {
    setContent(item.content);
    setHighlight(item.highlight);

    const highlightedIndex = item.content.indexOf(item.highlight);
    if (highlightedIndex !== -1) {
      const highlightedPart = item.content.slice(
        highlightedIndex,
        highlightedIndex + item.highlight.length
      );
      const restPart = item.content.slice(
        highlightedIndex + item.highlight.length
      );

      setHighlightedContent(highlightedPart);
      setRestContent(restPart);
    } else {
      setHighlightedContent("");
      setRestContent(item.content);
    }
  }, [item.content, item.highlight]);

  return (
    <div className="activity-item d-flex">
      <div className="activity-label">{item.time}</div>
      <i
        className={`bi bi-circle-fill activity-badge ${item.color} align-self-start`}
      ></i>
      {item.highlight === "" ? (
        <div className="activity-content">{item.content}</div>
      ) : (
        <div className="activity-content">
          {content.slice(0, content.indexOf(highlight))}
          <a href="#" className="fw-bold text-dark">
            {highlightedContent}
          </a>
          {restContent}
        </div>
      )}
    </div>
  );
}

export default RecentActivityItem;
