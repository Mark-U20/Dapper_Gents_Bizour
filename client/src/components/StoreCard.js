

function StoreCard(props) {

    return (
        <div className="store_card" onClick={props.link}>
            <img src={props.image_url} alt={props.placeholder}/>
            <h3>{props.store_title}</h3>
            <p>{props.synopsis}</p>
        </div>
    )

}

export default StoreCard