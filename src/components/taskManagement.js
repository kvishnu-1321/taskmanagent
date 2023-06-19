import React from "react";
import "./taskManagement.css";

const TaskManagement = () => {
  const list = [
    { id: 1, name: "vish" },
    { id: 2, name: "karthik" },
    { id: 3, name: "dizil" },
  ];

  return (
    <div className="tms">
      <h1 className="tms-app">Task Management App</h1>
      <div className="task-head">
        <div className="task-box">
          <p>Total tasks</p>
          <h2>005</h2>
        </div>
        <div className="task-box">
          <p>Total Days</p>
          <h2>009</h2>
        </div>
        <div className="task-box">
          <p>Total hours</p>
          <h2>072</h2>
        </div>
      </div>
      <div className="task-form">
        <form>
          <div className="tms-form">
            <div className="tms-form-text">
              <label htmlFor="myInput">Task Title</label>
              <input type="text" id="myInput" value={""} />
            </div>
            <div className="tms-form-text">
              <label htmlFor="numberInput">Time Required(in Hrs)</label>
              <input type="number" id="numberInput" value={""} />
            </div>
            <button type="submit" className="tms-button">
              Add
            </button>
          </div>
        </form>
      </div>
      <div className="tms-table">
        <table>
          <thead>
            <tr>
              <th>Task Title</th>
              <th>Time Required(in Hrs)</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {list.map((item, index) => {
              return (
                <tr key={index}>
                  <td>hi</td>
                  <td>hello</td>
                  <td>delete</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TaskManagement;
