import React from 'react';

function ProjectCard({ src, link, h3, p }) {
  return (
    <a href={link} target="_blank">
      <img className="hover" src={src} alt={`${h3} logo`} />
      <h3>{h3}</h3>
      <p style={{ maxWidth: "75%", margin: "0 auto" }}>{p}</p>
    </a>
  );
}

export default ProjectCard;
