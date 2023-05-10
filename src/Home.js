const Home = () => {
  return (
    <div className="container">
      <h2 className="my-3">HostBuddy Assignment</h2>
      <div className="d-flex flex-column">
        <button
          type="button"
          className="btn btn-outline-success btn-lg gap-2 col-6 mx-auto my-5"
        >
          Add Items
        </button>
        <button
          type="button"
          className="btn btn-outline-primary btn-lg gap-2 col-6 mx-auto my-5"
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
