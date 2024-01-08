import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navigation() {
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
        <CustomLink to="/PostTest">PostTest</CustomLink>

      </ul>
    </nav>
  )
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