import React from "react";

const ContactCard = ({ svg, username, title, link }) => {
  return (
    <a href={link} target="_blank" className="contact-card">
      <div className="circle">
        <img src={svg} alt={title} />
      </div>

      <h3>{title}</h3>
      <p>@{username}</p>
    </a>
  );
};

export default ContactCard;
