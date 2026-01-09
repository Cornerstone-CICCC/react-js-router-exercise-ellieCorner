import { Link } from "react-router-dom";

const MENU = [
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact-us" },
  { name: "Products", path: "/products" },
];

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>React Router Exercise</p>
      <nav>
        <ul>
          {MENU.map((item) => (
            <li key={item.path}>
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Home;
