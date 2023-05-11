import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const items = useSelector((state) => state.items);
  console.log(items);
  const navigate = useNavigate();
  return (
    <div className="container">
      <h2 className="my-3 text-center">HostBuddy Inc Assignment</h2>
      <div className="d-flex flex-column">
        <button
          type="button"
          className="btn btn-outline-success btn-lg gap-2 col-6 mx-auto my-5"
          onClick={() => navigate("/create")}
        >
          Add Items
        </button>
        <button
          type="button"
          className="btn btn-outline-primary btn-lg gap-2 col-6 mx-auto my-5"
          onClick={() => navigate("/view")}
        >
          View Items
        </button>
        <button
          type="button"
          className="btn btn-outline-info btn-lg gap-2 col-6 mx-auto my-5"
        >
          Search Items
        </button>
        <button
          type="button"
          className="btn btn-outline-danger btn-lg gap-2 col-6 mx-auto my-5"
        >
          Delete Items
        </button>
      </div>
    </div>
  );
};
export default Home;
