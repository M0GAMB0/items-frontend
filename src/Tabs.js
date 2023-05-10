const Tabs = () => {
  return (
    <div className="container">
      <div className="bloc-tabs">
        <div className="tabs active-tabs">Add Items</div>
        <div className="tabs">View Items</div>
        <div className="tabs">Search Items</div>
      </div>
      <div className="content-tabs">
        <div className="content active-content">
          <h2>Add Items</h2>
          <hr />
          <p>lorem ipsum dolor sit</p>
        </div>
        <div className="content active-content">
          <h2>View Items</h2>
          <hr />
          <p>lorem ipsum dolor sit</p>
        </div>
        <div className="content active-content">
          <h2>Search Items</h2>
          <hr />
          <p>lorem ipsum dolor sit</p>
        </div>
      </div>
    </div>
  );
};
export default Tabs;
