import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const PRODUCT_API_URL = "https://dummyjson.com/products/";
const PRODUCT_INFO = [
  "brand",
  "category",
  "price",
  "discountPercentage",
  "rating",
  "stock",
  "description",
  "warrantyInformation",
  "shippingInformation",
];

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${PRODUCT_API_URL}${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p>Loading product details...</p>;
  }

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto" }}>
      <Link to="/products">← Back to Products</Link>
      <h2>{product.title}</h2>
      <div style={{ marginTop: "20px" }}>
        {product.images && product.images.length > 0 && (
          <div
            style={{
              display: "flex",
              gap: "10px",
              marginBottom: "20px",
            }}
          >
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${product.title} ${index + 1}`}
                style={{
                  width: "100%",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
            ))}
          </div>
        )}

        {PRODUCT_INFO.map((info) => (
          <p>
            <strong>{info.charAt(0).toUpperCase() + info.slice(1)}:</strong>{" "}
            {product[info]}
          </p>
        ))}

        {product.warrantyInformation && (
          <p>
            <strong>Warranty:</strong> {product.warrantyInformation}
          </p>
        )}
        {product.shippingInformation && (
          <p>
            <strong>Shipping:</strong> {product.shippingInformation}
          </p>
        )}
      </div>
    </div>
  );
}

export default ProductDetail;
