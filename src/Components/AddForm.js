import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../ItemReducer";
import { add_Item, getItems } from "../services/item-service";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddForm = (props) => {
  const [item, setItem] = useState({
    name: "",
    description: "",
  });
  const [buttonBg, setButtonBg] = useState("#3880bc");
  const [buttonColor, setButtonColor] = useState("#fff");
  const [backButtonBg, setBackButtonBg] = useState("#3880bc");
  const [backButtonColor, setBackButtonColor] = useState("#fff");
  const [buttonBorder, setButtonBorder] = useState("3px solid #fff");
  const [backButtonBorder, setBackButtonBorder] = useState("3px solid #fff");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const items = useSelector((state) => state.items);
  // console.log(items);
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    if (name === "") {
      toast.error("Please enter name");
    } else if (description === "") {
      toast.error("Please enter description");
    } else {
      add_Item(item)
        .then((response) => {
          console.log(response);
          console.log("success log");
          toast.success("Item added sucessfully");
        })
        .catch((error) => {
          console.log(error);
          console.log("Error log");
        });
      // getItems()
      //   .then((response) => {
      //     console.log(response);
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //     console.log("error");
      //   });
      setName("");
      setDescription("");
      setItem({
        name: "",
        description: "",
      });
    }
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
  const hoverback = () => {
    setBackButtonBg("#fff");
    setBackButtonColor("#3880bc");
    setBackButtonBorder("3px solid #3880bc");
  };
  const hoverbackEnd = () => {
    setBackButtonBg("#3880bc");
    setBackButtonColor("#fff");
    setBackButtonBorder("3px solid #fff");
  };
  const handleChangeName = (event) => {
    setItem({ ...item, name: event.target.value });
    setName(event.target.value);
  };
  const handleChangeDescription = (event) => {
    setItem({ ...item, description: event.target.value });
    setDescription(event.target.value);
  };
  return (
    <div className="d-flex justify-content-center align-items-center w-100 my-5">
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
              onChange={handleChangeName}
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
              onChange={handleChangeDescription}
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
          <div className="d-flex justify-content-end w-100">
            <Button
              style={{
                background: buttonBg,
                color: buttonColor,
                border: buttonBorder,
              }}
              onMouseEnter={hover}
              onMouseLeave={hoverEnd}
              className="fs-5 fw-bolder rounded-4 mx-3"
              onClick={handleSubmit}
            >
              Add Item
            </Button>
            <Button
              style={{
                background: backButtonBg,
                color: backButtonColor,
                border: backButtonBorder,
              }}
              onMouseEnter={hoverback}
              onMouseLeave={hoverbackEnd}
              className="fs-5 fw-bolder rounded-4"
              onClick={(e) => navigate("/")}
            >
              Back to Home
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};
export default AddForm;
//#3880bc
