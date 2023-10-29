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
        <Link to="/u2_1">2.1</Link>
        <br />
        <Link to="/u2_2">2.2</Link>
        <br />
        <Link to="/u2_3">2.3</Link>
        <br />
        <p>Unit 3</p>
        <Link to="/u3_1">3.1</Link>
        <br />
        <Link to="/u3_2">3.2</Link>
        <br />
         <p>Unit 4</p>
        <Link to="/u4_1">4.1</Link>
        <br />
        <Link to="/u4_2">4.2</Link>
        <br />
        <p>Unit 5</p>
        <Link to="/u5_1">5.1</Link>
        <br />
        <p>Unit 6</p>
        <Link to="/u6_1">6.1</Link>
        <br />
        <Link to="/u6_2">6.2</Link>
        <br />
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