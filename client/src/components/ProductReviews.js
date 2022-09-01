

function ProductReviews(review) {

    return (
        <>
            <h2>{review.title}</h2>
            <div>{review.rating}</div>
            <p>{review.body}</p>
            <h3>{review.user}</h3>
            <p>{review.date}</p>
        </>
    )
}

export default ProductReviews;