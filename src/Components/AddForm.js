import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { categories } from "../utils/Dummy";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../ItemReducer";

const AddForm = (props) => {
  const [category, setCategory] = useState("");
  const [buttonBg, setButtonBg] = useState("#3880bc");
  const [buttonColor, setButtonColor] = useState("#fff");
  const [buttonBorder, setButtonBorder] = useState("3px solid #fff");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const items = useSelector((state) => state.items);
  console.log(items);
  const dispatch = useDispatch();
  const setFormValue = (event) => {
    setCategory(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      addItem({
        id: items[items.length - 1].id + 1,
        name,
        description,
        category,
      })
    );
    setName("");
    setCategory("");
    setDescription("");
  };
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
            <Form.Control
              type="text"
              placeholder="Enter Item Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group
            className="mb-3 d-flex w-100 align-items-start justify-content-between mx-5 flex-column flex-md-row align-items-md-center justify-content-md-between"
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Label className="w-50 text-white fs-5 fw-bolder">
              Description :&nbsp;&nbsp;
            </Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
          {/* <Form.Group
            className="mb-3 d-flex w-100 align-items-start justify-content-between mx-5 flex-column flex-md-row align-items-md-center justify-content-md-start"
            controlId="exampleForm.ControlDropdown1"
          >
            <Form.Label className="w-50 text-white fs-5 fw-bolder">
              Category :
            </Form.Label>
            <Form.Select onChange={setFormValue} value={category}>
              <option value="">Select Category of Item</option>
              {categories.map((cat, idx) => (
                <option key={idx} value={cat}>
                  {cat}
                </option>
              ))}
            </Form.Select>
          </Form.Group> */}
          <Button
            style={{
              background: buttonBg,
              color: buttonColor,
              border: buttonBorder,
            }}
            onMouseEnter={hover}
            onMouseLeave={hoverEnd}
            className="fs-5 fw-bolder rounded-4"
            onClick={handleSubmit}
          >
            Add Item
          </Button>
        </Form>
      </div>
    </div>
  );
};
export default AddForm;
//#3880bc
