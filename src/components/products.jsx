import { Container, Row, Col, Table, Button, Card } from 'react-bootstrap';
import { useEffect, useState } from 'react';

function Product() {
    const [product, setProduct] = useState([]);
    const [order, setOrder] = useState([]);
    const [selectedCatId, setSelectedCatId] = useState(0);
    const [categories, setCategories] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:9999/products`)
            .then(response => response.json())
            .then(result => {
                const updatedProducts = totalRate(result);
                setCategories([...new Set(result.map(p => p.category))]); 
                if (selectedCatId === 0) {
                    setProduct(updatedProducts);
                } else {
                    setProduct(updatedProducts.filter(p => p.category === selectedCatId));
                }
            })
            .catch(error => console.error(error));

        fetch(`http://localhost:9999/orders`)
            .then(response => response.json())
            .then(result => setOrder(result))
            .catch(error => console.error(error));
    }, [selectedCatId]);

    const totalRate = (products) => {
        return products.map(p => {
            const totalRating = p.reviews?.reduce((total, review) => total + review.rating, 0) || 0;
            const avgRating = p.reviews?.length > 0 ? (totalRating / p.reviews.length).toFixed(2) : "No Ratings";
            return { ...p, avgRating };
        });
    };

    return (
        <Container>
            <Row style={{ marginBottom: '40px' }}>
                <h1 style={{ textAlign: 'center', fontWeight: 'bold' }}>Shopping System</h1>
            </Row>
            <Row style={{ marginBottom: '20px' }}>
                <Col md={2}>
                    <select onChange={(e) => setSelectedCatId(e.target.value === "0" ? 0 : e.target.value)}>
                        <option value="0"> --- Select all Category ---</option>
                        {categories.map((cat, index) => (
                            <option key={index} value={cat}>{cat}</option>
                        ))}
                    </select>
                </Col>
                <Col md={8}></Col>
                <Col md={2}>
                    <a href="/orders" className="btn btn-success">
                        Orders History
                    </a>
                </Col>
            </Row>
            <Row>
                <Col md={9}>
                    {product.length === 0 ? (
                        <p>No Product</p>
                    ) : (
                        <Table className='table table-hover table-striped table-bordered'>
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Category</th>
                                    <th>Price</th>
                                    <th>Rate</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {product.map(p => (
                                    <tr key={p.id}>
                                        <td>{p.title}</td>
                                        <td>{p.category}</td>
                                        <td>${p.price}</td>
                                        <td>{p.avgRating}</td>
                                        <td>
                                            <Button className='btn btn-primary'>Add To Cart</Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    )}
                </Col>
                <Col md={3}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Cart</Card.Title>
                            {cart.length === 0 ? (
                                <Card.Text>Your Cart is Empty!</Card.Text>
                            ) : (
                                <Table>
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Name</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cart.map((item, index) => (
                                            <tr key={index}>
                                                <td>{item.id}</td>
                                                <td>{item.title}</td>
                                                <td>${item.price}</td>
                                                <td>{item.quantity}</td>
                                                <td>
                                                    <Button className='btn btn-danger'>Remove</Button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            )}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Product;
