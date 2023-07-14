import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchProducts } from '../rtk/slices/ProductsSlice';
import { ProductCard } from './Card';


export function ProductsList() {
    const products = useSelector((state) => state.Products);
    console.log(products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch])


    return (
        <Container className='mt-5 mb-5'>
            <Row>
                {products.map((product) => {
                    return (
                        <Col key={product.id} className='mb-3'>
                            <ProductCard product={product} />
                        </Col>
                    )
                })}
            </Row>
        </Container>
    )
}