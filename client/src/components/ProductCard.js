
function ProductCard(product) {

    return (
        <div className="product_card" style={{backgroundImage: `url(${product.image_url})`, backgroundSize: "20vw", backgroundRepeat: "no-repeat", height: "300px", width: "20vw", minWidth: "20vw", minHeight: "200px"}} alt={product.placeholder}>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <div>{product.rating}</div>
        </div>
    )

}

export default ProductCard