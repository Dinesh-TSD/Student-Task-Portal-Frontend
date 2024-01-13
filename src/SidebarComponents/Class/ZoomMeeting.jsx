import React from "react";

const ZoomMeeting = ({ data }) => {
  return (
    <>
      <div className="col-xl-8 col-lg-7">
        <div className="cards shadow mb-4 mt-3">
          <div className="card-header py-3 ps-3">
            <h2 className="class-tittle">Join the class on time {data.id}</h2>
          </div>

          <div className="card-body">
            <h1 className="title">{data.title}</h1>
            <h4>Content</h4>
            <ul>
              <li>{data.content[0]}</li>
              <li>{data.content[1]}</li>
              <li>{data.content[2]}</li>
            </ul>
          </div>

          <div className="refer">
            <h5>Reference links</h5>
            <div>
              <a className="links" href="https://www.w3schools.com/html/">
                {data.reflink}
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
            <h3>Task</h3>
            <a href="https://docs.google.com/document/d/1g8kIKFOJ5Wsre9-334Qd2CTh42hPaE-4K65uZEMfVR0/edit">
             {data.tasklink}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ZoomMeeting;
