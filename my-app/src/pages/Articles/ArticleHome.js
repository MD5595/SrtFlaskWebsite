import React from 'react';
import {Link, Route, useMatch, useResolvedPath} from "react-router-dom";

function ArticleHome() {
  return (
    <div className="container">
      <h1>Article!</h1>
      <CustomLink to="/u1_5">u1_5</CustomLink>
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