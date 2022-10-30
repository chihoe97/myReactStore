import React from "react";
import { Button, Container, Col, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BsCartCheck, BsCartX } from "react-icons/bs";
import {
  addItem,
  removeItem,
  deleteItem,
  emptyCart
} from "../../store/slices/cartSlice";
import "./Cart.css";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const grandQuantity = () => {
    return cartItems.reduce((a, b) => a + b.quantity, 0);
  };

  const grandTotal = () => {
    return cartItems.reduce((a, b) => a + b.totalPrice, 0)?.toFixed(2);
  };

  return (
    <Container className="py-4 mt-5">
      {cartItems.length > 0 ? (
        <Row className="justify-content-center">
          <Table responsive="sm" className="styled-table mb-5">
            <thead>
              <td>No.</td>
              <td></td>
              <td>Item</td>
              <td>Price</td>
              <td>Quantity</td>
              <td></td>
            </thead>
            <tbody>
              {cartItems &&
                cartItems.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{++index}</td>
                      <td>
                        <div className="table-image">
                          <div style={{ padding: ".5rem" }}>
                            <img
                              src={item.image}
                              style={{ width: "4rem" }}
                              alt={item.title}
                            />
                          </div>
                        </div>
                      </td>
                      <td>
                        <h6 className="item-name">{item.title}</h6>
                      </td>
                      <td>$ {item.price.toFixed(2)} </td>
                      <td> {item.quantity} </td>
                      <td>
                        <Button
                          onClick={() => dispatch(removeItem(item))}
                          className="ms-2"
                        >
                          -
                        </Button>
                        <Button
                          onClick={() => dispatch(addItem(item))}
                          className="ms-2"
                        >
                          +
                        </Button>
                        <Button
                          variant="danger"
                          onClick={() => dispatch(deleteItem(item))}
                          className="ms-2"
                        >
                          Remove Item
                        </Button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
          {
            <Row
              style={{ position: "fixed", bottom: 0 }}
              className="bg-light text-black justify-content-center w-100"
            >
              <Col className="py-2">
                <h4>Total Price: $ {grandTotal()}</h4>
              </Col>
              <Col className="py-2">
                <h4>Total Quantity: {grandQuantity()}</h4>
              </Col>
              <Col className="p-0" md={4}>
                <Button
                  variant="danger"
                  className="m-2"
                  onClick={() => dispatch(emptyCart())}
                >
                  <BsCartX size="1.7rem" />
                  Clear Cart
                </Button>
                <Link
                  to="/checkout"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  <Button variant="success" className="m-2">
                    <BsCartCheck size="1.7rem" />
                    Checkout
                  </Button>
                </Link>
              </Col>
            </Row>
          }
        </Row>
      ) : (
        <Row>
          <h4
            style={{
              display: "flex",
              justifyContent: "center"
            }}
          >
            Your Cart is empty !
          </h4>
        </Row>
      )}
    </Container>
  );
}
