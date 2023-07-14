import { Container } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from "react-redux";
import { Clear, removeFromCard } from "../rtk/slices/CardSlice";

export function Products() {

    const Cards = useSelector(state => state.Cards);
    const dispatch = useDispatch();
    let totalPrice = 0;


    return (
        <Container>
            <h1 className="mt-3 mb-5 text-black-50">Your Orders</h1>
            <button className="btn btn-primary mb-3 text-bold" onClick={() => dispatch(Clear())}>Clear</button>
            <Table striped bordered hover className="text-center">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Product Title</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Image</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {Cards.map((card) => {
                        totalPrice += (card.price * card.quantity);
                        return (
                            <tr key={card.id}>
                                <td>{card.id}</td>
                                <td>{card.title}</td>
                                <td>$ {card.price}</td>
                                <td>{card.quantity}</td>
                                <td><img src={card.image} style={{ width: '100px', height: '100px' }} alt="card.title" /></td>
                                <td><button className="btn btn-danger" onClick={() => dispatch(removeFromCard(card))}>Delete</button></td>
                            </tr>
                        );
                    })}
                    <tr>
                        <td className="text-danger text-bold" colSpan={6}>Total Price is : $ {totalPrice.toFixed(2)}</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    )
}