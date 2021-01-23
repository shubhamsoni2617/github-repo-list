import React from "react";
import { formatDate } from "../../utils";
import ShowLessMore from "../show-less-more";
import "./style.css";
const Card = ({ item = {} }) => {
  const {
    full_name,
    html_url,
    description,
    stargazers_count,
    updated_at,
    owner: { login, avatar_url } = {},
  } = item;

  return (
    <div className="card">
      <img src={avatar_url} alt={`${login}-profile-pic`} />
      <div className="content">
        <div>
          <p>Repository Name</p>
          <a href={html_url} target="_blank" rel="noreferrer">
            {full_name}
          </a>
        </div>
        <div>
          <p>Description</p>
          <span className="description">{ShowLessMore(description)}</span>
        </div>
        <div>
          <p>Stars</p>
          <span>{stargazers_count}</span>
        </div>
        <div>
          <p>Username</p>
          <span>{login}</span>
        </div>
        <div>
          <p>Updated At</p>
          <span>{formatDate(updated_at)}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
