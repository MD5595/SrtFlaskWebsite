import { Link, useMatch, useResolvedPath,useNavigate } from "react-router-dom"
import axios from "axios";
import {baseURL} from "../config";

export default function Navigation() {
    var navigate = useNavigate();
    const username =localStorage.getItem('username');


    function send_time() {

        var page= "Log out"
    var headers = {
        'Content-Type': 'application/json',
      }

  const response =  axios.post(baseURL + '/sendLocationTime',
        {page: page, username: username },headers=headers);
    console.log("SUCCESS", response);
    navigate('/HomePage');
}



  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        SRT 4
      </Link>
        <p> </p>
        <ul>
            <CustomLink to="/Syllabus">Syllabus</CustomLink>
            <CustomLink to="/ArticleHome">Articles</CustomLink>
            <CustomLink to="/Flashcards">Flashcards</CustomLink>
            <CustomLink to="/DataPage">DataPage</CustomLink>
            <CustomLink to="/PreTest">PreTest</CustomLink>
            <CustomLink to="/KeyPage">PostTest</CustomLink>
            <CustomLink to="/PracticeCoding">Practice Coding</CustomLink>
            <button onClick={send_time}>Log out</button>
            <div className="circle">{username}</div>
        </ul>
    </nav>
  )
}

function CustomLink({to, children, ...props }) {
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