import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is a React Router exercise project.</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default About;
