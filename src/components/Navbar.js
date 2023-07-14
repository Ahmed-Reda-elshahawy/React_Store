import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaStoreAlt } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FetchProductsInCategory, fetchProducts } from '../rtk/slices/ProductsSlice';


export function NavbarSection() {
    const cards = useSelector(state => state.Cards);
    const dispatch = useDispatch();

    return (
        <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
            <Container>
                <Link to="/" className='navbar-brand'>
                    <FaStoreAlt className='fs-2 me-2 text-white-50' />
                    store
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Link to="/" className='nav-link'>Home</Link>
                        <Link to="products" className='nav-link'>Orders</Link>
                        <NavDropdown title="Filter" id="basic-nav-dropdown">
                            <NavDropdown.Item onClick={() => dispatch(fetchProducts())}>
                                All Products
                            </NavDropdown.Item>
                            <NavDropdown.Item onClick={() => dispatch(FetchProductsInCategory("electronics"))}>
                                electronics
                            </NavDropdown.Item>
                            <NavDropdown.Item onClick={() => dispatch(FetchProductsInCategory("jewelery"))}>
                                jewelery
                            </NavDropdown.Item>
                            <NavDropdown.Item onClick={() => dispatch(FetchProductsInCategory("men's clothing"))}>
                                men's clothing
                            </NavDropdown.Item>
                            <NavDropdown.Item onClick={() => dispatch(FetchProductsInCategory("women's clothing"))}>
                                women's clothing
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Navbar.Text className='ms-3'>
                        <MdAddShoppingCart className='fs-4' />
                        <span className='text-warning'>{cards.length}</span>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}