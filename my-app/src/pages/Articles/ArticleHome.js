import React from 'react';
import {Link, Route, useMatch, useResolvedPath} from "react-router-dom";

function ArticleHome() {
  return (
    <div className="container">
      <h1>Articles</h1>
        <p>Unit 1</p>
        <Link to="/u1_1">1.1: Hello World</Link>
      <br />
      <Link to="/u1_2">1.2: Python Syntax</Link>
      <br />
        <Link to="/u1_3">1.3: Variables</Link>
      <br />
        <Link to="/u1_4">1.4: Print & Inputs</Link>
      <br />
        <Link to="/u1_5">1.5: Data Types</Link>
      <br />
        <br/>
        <p>Unit 2</p>
        <Link to="/u2_1">2.1: Basic Symbols</Link>
        <br />
        <Link to="/u2_2">2.2: Order of Operations</Link>
        <br />
        <Link to="/u2_3">2.3: Modules</Link>
        <br />
        <p>Unit 3</p>
        <Link to="/u3_1">3.1: If-Else Statements</Link>
        <br />
        <Link to="/u3_2">3.2: Else-If Statements</Link>
        <br />
         <p>Unit 4</p>
        <Link to="/u4_1">4.1: While Loops</Link>
        <br />
        <Link to="/u4_2">4.2: For Loops</Link>
        <br />
        <p>Unit 5</p>
        <Link to="/u5_1">5.1: Functions</Link>
                <Link to="/u5_2">5.2: Parameters</Link>

        <br />
        <p>Unit 6</p>
        <Link to="/u6_1">6.1: Lists</Link>
        <br />
        <Link to="/u6_2">6.2: List Functions</Link>
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