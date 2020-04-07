import React from 'react';

const Article = ({ details, postion })=> (
  <li>
  <article>
  <h1><a href={details.url}>{details.title}</a></h1>
  <p>Posted by {details.by}.</p>
  </article>
  </li>
);


export default Article;
