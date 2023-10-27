import React from 'react';
import {Link, Route, useMatch, useResolvedPath} from "react-router-dom";

function ArticleHome() {
  return (
    <div className="container">
      <h1>Article!</h1>
        <Link to="/u1_1">1.1</Link>
      <br />
      <Link to="/u1_3">1.3</Link>
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