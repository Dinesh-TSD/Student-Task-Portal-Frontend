import React from 'react'

const TaskCard = ({task}) => {

// Convert the ISO date string to a Date object
const date = new Date(task.createdAt);

// Options for formatting the date
const options = {
  year: 'numeric',
  month: 'numeric', 
  day: 'numeric',

  timeZone: 'Asia/Kolkata', // Set the time zone to India Standard Time
};

// Format the date using toLocaleString
const formattedDate = date.toLocaleString('en-IN', options);

console.log(formattedDate);



  return (
    <>
        <div className="task-cards shadow mb-4 mt-3">
          <div className="row">
            <div className="col-xl-8">
                <h5> {task.name} </h5>
                <p>{task.description}</p>
            </div>
            <div className="col-xl-4">
                <span className='date'>Submited on {formattedDate}</span>
                <div className='marks-bg'>
                  <span className='marks'>10</span>
                  <span className='marks'>Task</span>
                </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default TaskCard