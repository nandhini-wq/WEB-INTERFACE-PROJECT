import { useState } from "react";
import "./Attendance.css";

function Attendance() {
  const [students, setStudents] = useState([
    { id: 1, name: "Arun", status: "Present" },
    { id: 2, name: "Priya", status: "Absent" },
    { id: 3, name: "Kavin", status: "Present" },
    { id: 4, name: "Divya", status: "Absent" },
    { id: 5, name: "Rahul", status: "Present" },
    { id: 6, name: "Sneha", status: "Absent" },
    { id: 7, name: "Vijay", status: "Present" },
    { id: 8, name: "Anitha", status: "Present" },
    { id: 9, name: "Surya", status: "Present" },
    { id: 10, name: "Keerthana", status: "Absent" },
    { id: 11, name: "Ajay", status: "Present" },
    { id: 12, name: "Harini", status: "Absent" },
    { id: 13, name: "Rohit", status: "Present" },
    { id: 14, name: "Swetha", status: "Absent" },
    { id: 15, name: "Dinesh", status: "Present" },
    { id: 16, name: "Pooja", status: "Absent" },
    { id: 17, name: "Sanjay", status: "Absent" },
    { id: 18, name: "Meena", status: "Present" },
    { id: 19, name: "Naveen", status: "Absent" },
    { id: 20, name: "Lakshmi", status: "Present" },
  ]);

  const markAttendance = (id, status) => {
    setStudents(
      students.map((student) =>
        student.id === id
          ? { ...student, status: status }
          : student
      )
    );
  };

  return (
    <div className="attendance-container">
      <h1>Attendance Tracker</h1>

      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Student Name</th>
            <th>Attendance</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>

              <td>{student.name}</td>

              <td>
                <button
                  className="present-btn"
                  onClick={() =>
                    markAttendance(student.id, "Present")
                  }
                >
                  Present
                </button>

                <button
                  className="absent-btn"
                  onClick={() =>
                    markAttendance(student.id, "Absent")
                  }
                >
                  Absent
                </button>
              </td>

              <td
                className={
                  student.status === "Present"
                    ? "present"
                    : "absent"
                }
              >
                {student.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Attendance;