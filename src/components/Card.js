import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { addToCard } from '../rtk/slices/CardSlice';
import './css/products.css'


export function ProductCard(props) {
    const dispatch = useDispatch();


    return (
        <Card style={{ minWidth: '20rem', maxWidth: '23rem', padding: '15px' }} className='card'>
            <Card.Img variant="top" src={props.product.image} style={{ height: '19rem' }} />
            <Card.Body>
                <Card.Title>{props.product.title}</Card.Title>
                <Card.Text>
                    {props.product.description.slice(0, 200)}
                </Card.Text>
                <Card.Text>
                    ${props.product.price}
                </Card.Text>
                <Button variant="primary" onClick={() => dispatch(addToCard(props.product))}>Add to Card</Button>
            </Card.Body>
        </Card>
    )
}