import React from "react";
import { Container, Table } from "react-bootstrap";
import { useSelector } from "react-redux";

const View = () => {
  const items = useSelector((state) => state.items);
  return (
    <Container>
      <div className="vh-100 w-100">
        <h2 className="mt-4">All Items</h2>
        <br />
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, idx) => (
              <tr key={idx}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.description}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export default View;
