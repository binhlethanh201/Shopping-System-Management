import { useEffect, useState } from "react";
import { Container, Row, Table } from "react-bootstrap";

function Order() {
  const [order, setOrder] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:9999/orders`)
      .then((response) => response.json())
      .then((result) => setOrder(result))
      .catch((error) => console.error(error));
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB");
  };
  return (
    <Container>
      <Row>
        <h1>Order History</h1>
      </Row>
      <Row>
        <Table hover bordered>
          <thead>
            <tr>
              <th>OrderId</th>
              <th>OrderDate</th>
              <th>ShipAddress</th>
              <th>ProductList</th>
              <th>TotalPrice($)</th>
            </tr>
          </thead>
          <tbody>
            {order?.map((o) => (
              <tr key={o?.id}>
                <td>{o?.id}</td>
                <td>{formatDate(o?.orderDate)}</td>
                <td>{o?.shipAddress}</td>
                <td>
                  <Table size="sm" hover>
                    <tbody>
                      {o?.products?.map((p, index) => (
                        <tr key={index}>
                          <td>{p.id}</td>
                          <td>{p.name}</td>
                          <td>${p.price.toFixed(2)}</td>
                          <td>{p.quantity}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </td>
                <td>
                  {o?.products
                    ?.reduce((total, p) => total + p.price * p.quantity, 0)
                    .toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <></>
      </Row>
    </Container>
  );
}
export default Order;
