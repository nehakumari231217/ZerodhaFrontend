import React from "react";

function Universal({ imageURL, ProductName, ProductDesription, learnMore }) {
  return (
    <div className="container mt-5">
      <div className="row  text-center">
          <h1> Want to know more about our </h1>
          <p>
            Want to know more about our technology stack? Check out the{" "}
            <a href=""> Zerodha.tech</a> blog.{" "}
          </p>
        
        <div className="col-4 p-3 mt-5">
          <img src="media/images/smallcase-logo.png" />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/smallcase-logo.png"  />
          <p className="text-small text-muted">Algo & strategy platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/smallcase-logo.png"  />
          <p className="text-small text-muted">Options trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/smallcase-logo.png" />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/smallcase-logo.png"  />
          <p className="text-small text-muted">Algo & strategy platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/smallcase-logo.png"  />
          <p className="text-small text-muted">Options trading platform</p>
        </div>
    </div>
      </div>

  );
}
export default Universal;
