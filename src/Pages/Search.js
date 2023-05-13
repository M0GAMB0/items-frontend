import React, { useState } from "react";
import { Button, Col, Container, Form, Row, Table } from "react-bootstrap";
import { searchItems } from "../services/item-service";

const Search = () => {
  const [buttonBg, setButtonBg] = useState("#3880bc");
  const [buttonColor, setButtonColor] = useState("#fff");
  const [buttonBorder, setButtonBorder] = useState("3px solid #fff");
  const [itemList, setItemList] = useState([]);
  const [name, setName] = useState("");
  const hover = () => {
    setButtonBg("#fff");
    setButtonColor("#3880bc");
    setButtonBorder("3px solid #3880bc");
  };
  const hoverEnd = () => {
    setButtonBg("#3880bc");
    setButtonColor("#fff");
    setButtonBorder("3px solid #fff");
  };
  const handleSearchChange = (event) => {
    setName(event.target.value);
  };
  const handleSearch = () => {
    // event.preventDefault();
    searchItems(name)
      .then((response) => {
        console.log(response);
        setItemList(response);
      })
      .catch((error) => {
        console.log(error);
        console.log("error");
      });
  };
  return (
    <Container className="mt-5">
      <Row className="d-flex justify-content-center">
        <Col sm={6}>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 rounded-pill"
              aria-label="Search"
              value={name}
              onChange={handleSearchChange}
            />
            <Button
              style={{
                background: buttonBg,
                color: buttonColor,
                border: buttonBorder,
              }}
              onMouseEnter={hover}
              onMouseLeave={hoverEnd}
              className="fs-6 w-50 fw-bold rounded-4 mx-3"
              onClick={handleSearch}
            >
              Search
            </Button>
          </Form>
        </Col>
      </Row>
      <br />
      <Table striped bordered hover>
        <thead style={{ background: "#003459", color: "#fff" }}>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {itemList.map((item, idx) => (
            <tr key={idx}>
              <td>{idx + 1}</td>
              <td>{item.name}</td>
              <td>{item.description}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Search;
