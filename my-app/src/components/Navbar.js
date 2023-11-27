import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navigation() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        SRT 4
      </Link>
      <ul>
        <CustomLink to="/Syllabus">Syllabus</CustomLink>
        <CustomLink to="/ArticleHome">Articles</CustomLink>
        <CustomLink to="/Flashcards">Flashcards</CustomLink>

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