import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Lightbox from "react-lightbox-component";
import "react-lightbox-component/build/css/index.css";
import "./ProductDetails.css";
import { BsCartPlus } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { getSingleItemAsync } from "../../store/slices/productSlice";
import { addItem } from "../../store/slices/cartSlice";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const singleItem = useSelector((state) => state.product.singleItem);
  const props = useParams();

  function getSingleItem() {
    dispatch(getSingleItemAsync(props.productId));
  }

  useEffect(() => {
    getSingleItem();
  }, []);

  return (
    <Container className="py-5">
      <Row className="justify-content-center mt-5">
        <Col xs={10} md={7} lg={5} className="p-0">
          <Lightbox
            images={[
              {
                src: singleItem.image,
                title: singleItem.title,
                description: "img 1"
              },
              {
                src: singleItem.image,
                title: singleItem.title,
                description: "img 2"
              },
              {
                src: singleItem.image,
                title: singleItem.title,
                description: "img 3"
              },
              {
                src: singleItem.image,
                title: singleItem.title,
                description: "img 4"
              }
            ]}
          />
        </Col>
        <Col xs={10} md={7} lg={7} className="text-black product-details">
          <h1>{singleItem.title}</h1>
          <Button
            onClick={() => dispatch(addItem(singleItem))}
            className="bg-light-primary"
            style={{ borderRadius: "0", border: 0, marginTop: "2rem" }}
          >
            <BsCartPlus size="1.8rem" />
            Add to cart
          </Button>
          <br />
          <br />
          <b className="text-light-primary h4 mt-3 d-block">
            $ {singleItem.price && singleItem.price.toFixed(2)}
          </b>
          <br />
          <p className="mt-3 h5" style={{ opacity: "0.8", fontWeight: "400" }}>
            {singleItem.description}
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;
