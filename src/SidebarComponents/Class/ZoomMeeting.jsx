import React from "react";
import { Button, Container, Form } from "react-bootstrap";

const ZoomMeeting = ({ number }) => {
  return (
    <>
      <div className="col-xl-8 col-lg-7">
        <div class="cards shadow mb-4 mt-3">
          <div class="card-header py-3 ps-3">
            <h2 class="class-tittle">Join the class on time {number}</h2>
          </div>

          <div class="card-body">
            <h3 className="title">title</h3>
            <h4>Content</h4>
            <ul>
              <li>HTML Headings</li>
              <li>HTML Images</li>
              <li>HTML Elements</li>
            </ul>
          </div>

          <div className="refer">
            <h5>Reference links</h5>
            <div>
              <a className="links" href="https://www.w3schools.com/html/">
                https://www.w3schools.com/html/
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
              https://docs.google.com/document/d/1g8kIKFOJ5Wsre9-334Qd2CTh42hPaE-4K65uZEMfVR0/edit
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ZoomMeeting;
