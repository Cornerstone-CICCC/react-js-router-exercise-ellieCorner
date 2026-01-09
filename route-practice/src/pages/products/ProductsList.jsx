import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ProductsList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading products...</p>;
  }

  return (
    <div>
      <h2>Product List</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "15px",
                cursor: "pointer",
                transition: "transform 0.2s",
              }}
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                style={{
                  width: "100%",
                  height: "150px",
                  objectFit: "cover",
                  borderRadius: "4px",
                }}
              />
              <h3>{product.title}</h3>
              <p>{product.brand}</p>
              <p style={{ fontWeight: "bold" }}>${product.price}</p>
              <p style={{ fontSize: "0.9em", color: "#666" }}>
                Rating: {product.rating} ⭐
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductsList;
