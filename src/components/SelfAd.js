import React from "react";

const SelfAd = ({ blog }) => {
  let coverName;
  let coverURL;
  if (blog) {
    coverName = "https://jskim1215.github.io/" + blog.name;
    coverURL = blog.URL;
  }
  console.log(coverName);
  return (
    <div>
      <a href={coverName}>
        <img src={coverURL} />
      </a>
    </div>
  );
};

export default SelfAd;
