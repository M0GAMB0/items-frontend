import {
  Button,
  Container,
  Dropdown,
  DropdownButton,
  Form,
} from "react-bootstrap";

const Create = () => {
  return (
    <Container>
      <div className="d-flex justify-content-center align-items-center w-100 vh-100">
        <div
          className="w-0 border p-2 p-md-5 rounded-4 shadow-lg"
          style={{ background: "#003459" }}
        >
          <Form
            className="d-flex flex-column align-items-center justify-content-center p-1 w-100"
            style={{ border: "2px solid green" }}
          >
            <Form.Group
              className="mb-3 d-flex w-100 justify-content-between align-items-start mx-5 flex-column flex-md-row"
              controlId="exampleForm.ControlInput1"
              style={{ border: "2px solid red" }}
            >
              <Form.Label className="w-50 text-te fs-6 fs-md-2 fw-bolder">
                Item name :&nbsp;
              </Form.Label>
              <Form.Control type="text" placeholder="Enter Item Name" />
            </Form.Group>
            <Form.Group
              className="mb-3 d-flex w-100 align-items-start justify-content-between mx-5 flex-column flex-md-row align-items-md-center justify-content-between"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label className="w-50 text-white fs-6 fw-bolder">
                Description :&nbsp;&nbsp;
              </Form.Label>
              whi
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Group
              className="mb-3 d-flex w-100 align-items-center mx-5"
              controlId="exampleForm.ControlDropdown1"
            >
              <Form.Label
                className="w-50 text-white"
                style={{ fontWeight: "700px" }}
              ></Form.Label>
            </Form.Group>
          </Form>
        </div>
      </div>
    </Container>
  );
};
export default Create;
