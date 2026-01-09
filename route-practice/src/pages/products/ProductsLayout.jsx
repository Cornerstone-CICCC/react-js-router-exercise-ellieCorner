import { Outlet, Link } from "react-router-dom";

function ProductsLayout() {
  return (
    <div>
      <h1>Products</h1>
      <nav>
        <Link to="/">Back to Home</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default ProductsLayout;
