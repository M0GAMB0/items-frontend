import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { getItems } from "../services/item-service";

const View = () => {
  const [itemList, setItemList] = useState([]);
  //useEffect to fetch list from backend as page get load
  useEffect(() => {
    getItems()
      .then((response) => {
        console.log(response);
        setItemList(response);
      })
      .catch((error) => {
        console.log(error);
        console.log("error");
      });
  }, []);

  return (
    <Container>
      <div className="vh-100 w-100">
        <h2 className="mt-4">All Items</h2>
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
      </div>
    </Container>
  );
};

export default View;
