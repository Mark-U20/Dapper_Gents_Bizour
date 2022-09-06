import {Card, Image} from 'semantic-ui-react';


const StoreCard = (props) => {

    return (
        <Card>
            <Image src={props.image} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{props.store_title}</Card.Header>
                <Card.Description>{props.synopsis}</Card.Description>
            </Card.Content>
        </Card>
    )

}

export default StoreCard