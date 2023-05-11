import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { categories } from "../utils/Dummy";

const AddForm = () => {
  const [category, setCategory] = useState("");
  const setFormValue = (event) => {
    setCategory(event.target.value);
  };
  return (
    <div className="d-flex justify-content-center align-items-center w-100 vh-100">
      <div
        className="w-0 border p-5 rounded-4 shadow-lg"
        style={{ background: "#003459" }}
      >
        <Form className="d-flex flex-column align-items-center mb-3 justify-content-center p-1 w-100">
          <Form.Group
            className="mb-3 d-flex w-100 justify-content-between align-items-start mx-5 flex-column flex-md-row align-items-md-center justify-content-md-between"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label className="w-50 text-white fs-5 fw-bolder">
              Item name :&nbsp;
            </Form.Label>
            <Form.Control type="text" placeholder="Enter Item Name" />
          </Form.Group>
          <Form.Group
            className="mb-3 d-flex w-100 align-items-start justify-content-between mx-5 flex-column flex-md-row align-items-md-center justify-content-md-between"
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Label className="w-50 text-white fs-5 fw-bolder">
              Description :&nbsp;&nbsp;
            </Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Form.Group
            className="mb-3 d-flex w-100 align-items-start justify-content-between mx-5 flex-column flex-md-row align-items-md-center justify-content-md-start"
            controlId="exampleForm.ControlDropdown1"
          >
            <Form.Label className="w-50 text-white fs-5 fw-bolder">
              Category :
            </Form.Label>
            <Form.Select onChange={setFormValue} value={category}>
              <option value="">Select Category of Item</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};
export default AddForm;
