import React from "react";
import "./ProductCard.css";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { BsCartPlus } from "react-icons/bs";
import { addItem } from "../store/slices/cartSlice";

const ProductCard = (props) => {
  const { product } = props;
  let { image, price, title, id } = product;
  const dispatch = useDispatch();

  return (
    <Card
      style={{ width: "18rem", height: "auto" }}
      className="bg-light text-black text-center p-2 overflow-hidden shadow mx-auto mb-3"
    >
      <Link to={`/details/${id}`}>
        <div className="cardImg">
          <div style={{ width: "10rem" }}>
            <Card.Img variant="top" src={image} className="img-fluid" />
          </div>
        </div>
      </Link>
      <Card.Body>
        <Card.Title className="cardTitle">{title}</Card.Title>
        <Card.Title>
          $ <span className="h4">{price.toFixed(2)}</span>
        </Card.Title>
        <Button
          onClick={() => dispatch(addItem(product))}
          className="bg-light-primary d-flex align-item-center m-auto border-0"
        >
          <BsCartPlus size="1.8rem" />
          Add to cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
