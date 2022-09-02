import {Card, Image} from 'semantic-ui-react';


const StoreCard = (props) => {

    return (
        <Card>
            <Image src={props.image} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{props.store_title}</Card.Header>
                <Card.Description>{props.synopsis}</Card.Description>

            </Card.Content>
            {/* <div className="store_card" style={{backgroundImage: `url(${props.image})`, backgroundSize: "20vw", backgroundRepeat: "no-repeat", height: "300px", width: "20vw", minWidth: "20vw", minHeight: "200px"}} alt={props.placeholder}> */}
                {/* <img src={props.image} alt={props.placeholder} height="100vh" width="200vw" /> */}
                {/* <h3>{props.store_title}</h3>
                <p>{props.synopsis}</p> */}
            {/* </div> */}
        </Card>
    )

}

export default StoreCard