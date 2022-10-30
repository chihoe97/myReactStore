import { Container, Form, Tabs, Tab, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";

const Checkout = () => {
  const [checkOutFrom, setCheckOutFrom] = useState({
    fname: "",
    lname: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    email: "",
    phoneNo: "",
    payment: "1"
  });
  const [key, setKey] = useState("creditCard");
  const handleFromData = (e) => {
    let name = e.target.name;
    setCheckOutFrom((state) => {
      return {
        ...state,
        [name]: e.target.value
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ checkOutFrom });
  };

  return (
    <Container className="py-5 mt-5">
      <Form onSubmit={handleSubmit}>
        <h3>Shopping Information</h3>
        <br />
        <Form.Group>
          <Form.Label>First name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            onChange={handleFromData}
            name="fname"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Last name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            onChange={handleFromData}
            name="lname"
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter address"
            onChange={handleFromData}
            name="address"
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter city"
            onChange={handleFromData}
            name="city"
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>State</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter state"
            onChange={handleFromData}
            name="state"
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Postal Code</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter postal code"
            onChange={handleFromData}
            name="zip"
          />
        </Form.Group>
        <br />
        <h4>Contact Information</h4>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={handleFromData}
            name="email"
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter phone no."
            onChange={handleFromData}
            name="phoneNo"
          />
        </Form.Group>
        <br />
        <h4>Payment Option</h4>
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3"
        >
          <Tab eventKey="creditCard" title="Credit Card">
            <Form.Group>
              <Form.Label>Full name (on the card)</Form.Label>
              <Form.Control type="text" placeholder="Enter name" required />
              <br />
              <Form.Label>Card number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter card number"
                required
              />
            </Form.Group>
            <br />
            <Row xs={2} md={4} lg={6}>
              <Col>
                <Form.Label>Expiration</Form.Label>
                <Form.Control type="text" placeholder="MM" required />
              </Col>
              <Col>
                <Form.Label>
                  {" "}
                  <br />{" "}
                </Form.Label>
                <Form.Control type="text" placeholder="YY" required />
              </Col>
              <Col>
                <Form.Label>CVV</Form.Label>
                <Form.Control type="text" required />
              </Col>
            </Row>
          </Tab>
          <Tab eventKey="paypal" title="Paypal"></Tab>
          <Tab eventKey="bank" title="Bank"></Tab>
        </Tabs>
        <br />
        <Button type="submit" color="success" className="bg-light-primary">
          Confirm
        </Button>
      </Form>
    </Container>
  );
};

export default Checkout;
