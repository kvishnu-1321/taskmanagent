import React, { useEffect, useState } from "react";
import "./taskManagement.css";

const TaskManagement = () => {
  const list = [
    { name: "task1", time: 5 },
    { name: "task2", time: 6 },
    { name: "task3", time: 7 },
  ];
  const [tname, setTname] = useState(list);
  const [taskName, setTaskName] = useState("");
  const [taskTime, setTaskTime] = useState("");
  const [totalTask, setTotalTask] = useState(0);
  const [totalDays, setDays] = useState(0);
  const [totalHours, setTotalHours] = useState(0);
  const [isFocused, setIsFocused] = useState(false);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName && taskTime) {
      const newTodo = {
        name: taskName,
        time: taskTime,
      };
      setTname([...tname, newTodo]);
      setTaskName("");
      setTaskTime("");
    } else {
      setError("Please fill the TaskTitle  and Hours");
    }
  };
  const taskDelete = (i) => {
    setShowModal(true);
    setTname(
      tname.filter((item, index) => {
        return tname.indexOf(item) !== i;
      })
    );
  };
  const inputStyles = {
    border: isFocused ? "2px solid blue" : "1px solid #008cba",
  };

  useEffect(() => {
    setTotalTask(tname.length.toString().padStart(3, "0"));
    const total = tname.reduce((acc, curr) => {
      const bb = acc + parseInt(curr.time);
      return bb;
    }, 0);
    console.log(total);
    setTotalHours(total.toString().padStart(3, "0"));
    setDays(
      parseInt(total / 8)
        .toString()
        .padStart(3, "0")
    );
  }, [tname]);
  const handleFocus = () => {
    setIsFocused(true);
  };
  const handleBlur = () => {
    setIsFocused(false);
  };
  const closeModal = () => {
    setError("");
  };
  const appreciationModal = () => {
    setShowModal(false);
  };

  return (
    <div className="tms">
      <h2 className="tms-app">Task Management App</h2>
      <div className="task-head">
        <div className="task-box">
          <p>Total tasks</p>
          <h2>{totalTask}</h2>
        </div>
        <div className="task-box">
          <p>Total Days</p>
          <h2>{totalDays}</h2>
        </div>
        <div className="task-box">
          <p>Total hours</p>
          <h2>{totalHours}</h2>
        </div>
      </div>
      <div className="task-form">
        <form onSubmit={handleSubmit}>
          <div className="tms-form">
            <div className="tms-form-text">
              <label htmlFor="myInput">Task Title</label>
              <input
                type="text"
                id="myInput"
                style={inputStyles}
                //className={isFocused ? "focused" : ""}
                onFocus={handleFocus}
                onBlur={handleBlur}
                value={taskName}
                maxLength={128}
                onChange={(e) => {
                  setTaskName(e.target.value);
                }}
              />
            </div>
            <div className="tms-form-text">
              <label htmlFor="numberInput">Time Required(in Hrs)</label>
              <input
                type="number"
                id="numberInput"
                value={taskTime}
                onChange={(e) => {
                  const inputValue = e.target.value;
                  const numericValue = inputValue.replace(/[^0-9]/g, "");
                  if (
                    numericValue === "" ||
                    (Number(numericValue) >= 0 && Number(numericValue) <= 24)
                  ) {
                    setTaskTime(numericValue);
                    setError("");
                  } else {
                    setError("Please enter a numeric value between 0 and 24.");
                  }
                }}
              />
            </div>
            <button type="submit" className="tms-button">
              Add
            </button>
          </div>
          {error && (
            <div className="tms-modal">
              <div className="tms-modal-content">
                <p>{error}</p>
                <button className="tms-modal-delete" onClick={closeModal}>
                  close
                </button>
              </div>
            </div>
          )}
        </form>
      </div>

      {showModal && (
        <div className="tms-appreciatiopn-modal">
          <div className="tms-apreciation-content">
            <h3>
              Great job! You completed the task successfully. Your hard work and
              dedication are truly commendable!
            </h3>
            <p>task has been completed.</p>
            <button className="tms-ok" onClick={appreciationModal}>
              OK
            </button>
          </div>
        </div>
      )}

      <div className="tms-table">
        <h2>Todo list</h2>
        <table>
          <thead>
            <tr>
              <th className="tms-table-header1">Task Title</th>
              <th>Time Required(in Hrs)</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tname.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.time}</td>
                  <td>
                    <span>
                      <button
                        className="deleteButton"
                        onClick={() => {
                          taskDelete(index);
                        }}
                      >
                        Delete
                      </button>
                    </span>
                  </td>
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
