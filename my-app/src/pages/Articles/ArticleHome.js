import React from 'react';
import {Link, Route, useMatch, useResolvedPath} from "react-router-dom";

function ArticleHome() {
  return (
    <div className="container">
      <h1>Articles</h1>
        <p>Unit 1</p>
        <Link to="/u1_1">1.1</Link>
      <br />
      <Link to="/u1_2">1.2</Link>
      <br />
        <Link to="/u1_3">1.3</Link>
      <br />
        <Link to="/u1_4">1.4</Link>
      <br />
        <Link to="/u1_5">1.5</Link>
      <br />
        <br/>
        <p>Unit 2</p>

    </div>
  );
}


function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
export default ArticleHome;