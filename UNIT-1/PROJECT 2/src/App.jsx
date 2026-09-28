import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");
  const [marks, setMarks] = useState("");
  const [show, setShow] = useState(false);

  const displayProfile = () => {
    setShow(true);
  };

  let grade = "";

  if (marks >= 90)
    grade = "A+";
  else if (marks >= 80)
    grade = "A";
  else if (marks >= 70)
    grade = "B";
  else if (marks >= 60)
    grade = "C";
  else if (marks >= 50)
    grade = "D";
  else
    grade = "F";

  return (
    <div className="container">
      <div className="form">
        <h2>Student Details</h2>

        <input
          type="text"
          placeholder="Enter Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter Roll Number"
          value={roll}
          onChange={(e) => setRoll(e.target.value)}
        />

        <input
          type="number"
          placeholder="Enter Marks"
          value={marks}
          onChange={(e) => setMarks(e.target.value)}
        />

        <br /><br />

        <button onClick={displayProfile}>
          Display Profile
        </button>
      </div>

      {show && (
        <div className="card">
          <h2>Student Profile</h2>

          <p><strong>Name:</strong> {name}</p>
          <p><strong>Roll No:</strong> {roll}</p>
          <p><strong>Marks:</strong> {marks}</p>
          <p><strong>Grade:</strong> {grade}</p>
        </div>
      )}
    </div>
  );
}

export default App;