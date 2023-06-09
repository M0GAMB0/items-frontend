import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="d-flex flex-column">
      {/* all buttons of home page.. */}
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
          onClick={() => navigate("/search")}
        >
          Search Items
        </button>
      </div>
    </div>
  );
};
export default Home;
