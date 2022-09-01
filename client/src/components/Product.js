import ProductReviews from "./ProductReviews";

function Product(product) {
    return (
        <>
            <h2>{product.name}</h2>
            <img src={product.image_url} alt={product.image_alt} />
            <p>{product.description}</p>
            <p>{product.inventory}</p>
            <p>{product.price}</p>
            <p>{product.rating}</p>
            <ProductReviews />
        </>
    )
}

export default Product;