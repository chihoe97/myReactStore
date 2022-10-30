import React, { useEffect, useState } from "react";
import { Container, Row, Col, InputGroup, FormControl } from "react-bootstrap";
import { BiSearch } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import SearchFilter from "react-filter-search";
import ProductCard from "../../components/ProductCard";
import { getItemsAsync } from "../../store/slices/productSlice";

const Dashboard = () => {
  const [searchInput, setSearchInput] = useState("");
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.product.productItems);

  function getProductItems() {
    dispatch(getItemsAsync());
  }

  useEffect(() => {
    getProductItems();
  }, []);

  return (
    <Container className="py-4">
      <Row className="justify-content-center">
        <Col xs={10} md={7} lg={6} xl={10} className="mb-3 mx-auto text-center">
          <h1 className={"text-black my-5"}>Search products</h1>
          <InputGroup className="mb-3">
            <InputGroup.Text className={"bg-light text-light-primary"}>
              <BiSearch size="1rem" />
            </InputGroup.Text>
            <FormControl
              placeholder="Search"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className={"bg-light text-black"}
            />
          </InputGroup>
        </Col>
        <SearchFilter
          value={searchInput}
          data={productList}
          renderResults={(results) => (
            <Row className="justify-content-center">
              {results.map((item, i) => (
                <ProductCard product={item} key={i} />
              ))}
            </Row>
          )}
        />
      </Row>
    </Container>
  );
};

export default Dashboard;
