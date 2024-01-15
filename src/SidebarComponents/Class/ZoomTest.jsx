import React from "react";

const ZoomTest = () => {
  return (
    <>
      <div className="col-xl-8 col-lg-7">
        <div className="cards shadow mb-4 mt-3">
          <div className="card-header py-3 ps-3">
            <h2 className="class-tittle">Join the class on time </h2>
          </div>

          <div className="card-body zoom-test-body">
            <h3 className="title">No Session title available</h3>
            <h4>class schedule not updated</h4>
          </div>

          <div className="refer">
            <h5>Reference links not available</h5>
            <div>
              <a className="links" href="https://www.w3schools.com/html/">
                https://www123.com/html/
              </a>
            </div>
            <div>
              <a
                className="links"
                href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics"
              >
                https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics
              </a>
            </div>
          </div>

          <div className="task-link">
            <h3>Task not assigned</h3>
            <a href="https://docs.google.com/document/d/1g8kIKFOJ5Wsre9-334Qd2CTh42hPaE-4K65uZEMfVR0/edit">
              Be Prepared
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ZoomTest;
