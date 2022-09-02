import ProductReviews from "./ProductReviews";

function Product(product) {
    return (
        <>
            <h2>{product.title}</h2>
            <img src={product.image_url} alt={product.title} />
            <p>{product.description}</p>
            <p>{product.quantity}</p>
            <p>{product.price}</p>
            {/* <p>{product.rating}</p> */}
            <ProductReviews />
        </>
    )
}

export default Product;