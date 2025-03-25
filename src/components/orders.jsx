import { useEffect, useState } from 'react';
import {Container, Row, Table} from 'react-bootstrap';

function Order(){
    const [order, setOrder] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:9999/orders`)
        .then(response => response.json())
        .then(result => setOrder(result))
        .catch(error => console.error(error))
    },[])
    return(
        <Container>
                <Row><h1>Order History</h1></Row>
                <Row>
                    <Table>
                        <thead>
                            <tr>
                                <th>OrderId</th>
                                <th>OrderDate</th>
                                <th>ShipAddress</th>
                                <th>ProductList</th>
                                <th>TotalPrice ($)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                order?.map(o => (
                                    <tr key={o?.id}>
                                    <td>{o?.id}</td>
                                    <td>{o?.orderDate}</td>
                                    <td>{o?.shipAddress}</td>
                                    <td>{o?.products}</td>
                                    <td>price</td>
                                </tr>
                                ))
                            }
                           
                        </tbody>
                    </Table>
                </Row>
        </Container>
    )
}
export default Order;