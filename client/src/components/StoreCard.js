
function StoreCard(props) {

    return (
        <div className="store_card" style={{backgroundImage: `url(${props.image_url})`, backgroundSize: "20vw", backgroundRepeat: "no-repeat", height: "300px", width: "20vw", minWidth: "20vw", minHeight: "200px"}} alt={props.placeholder}>
            {/* <img src={props.image_url} alt={props.placeholder} height="100vh" width="200vw" /> */}
            <h3>{props.store_title}</h3>
            <p>{props.synopsis}</p>
        </div>
    )

}

export default StoreCard