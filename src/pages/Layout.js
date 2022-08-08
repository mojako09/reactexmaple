import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Click">Exercise 1</Link>
          </li>
          <li>
            <Link to="/BtnThree">Exercise 2</Link>
          </li>
          <li>
            <Link to="/TimeCou">Exercise 3</Link>
          </li>
          <li>
            <Link to="/ListItem">Exercise 4</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;