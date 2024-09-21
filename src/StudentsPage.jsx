import { StudentsIndex } from "./StudentsIndex";
import { StudentsNew } from "./StudentsNew";
import axios from "axios";
import { useState, useEffect } from "react";
import { StudentsShow } from "./StudentsShow";
import { Modal } from "./Modal"

export function StudentsPage() {
  const [students, setStudent] = useState([])
  const [isShowVisible, setIsShowVisible] = useState(false)
  const [currentStudent, setCurrentStudent] = useState({})

  const handleIndex = () => {
    axios.get("http://localhost:3000/students.json").then(response => {
      setStudent(response.data);
    })
  }
  const handleShow = (student) => {
    setIsShowVisible(true);
    setCurrentStudent(student)
  }
  const handleCreate = () => {
    axios.post("http://localhost:3000/students.json", {
      name: "Indiana Jones",
      dob: "11/11/2001",
      email: "indiana@k12.org"
    }).then(response => {
      console.log(response.data);
    })
  }
  const handleUpdate = () => {
    axios.patch("http://localhost:3000/students/4.json", {
      dob: "xxxxxxx"
    }).then(response => {
      console.log(response.data);
    })
  }
  const handleDelete = () => {
    axios.delete("http://localhost:3000/students/3.json").then(response => {
      console.log(response.data);
    })
  }

  const handleClose = () => {
    setIsShowVisible(false);
  }
  
  useEffect(handleIndex, []);

  return (
    <main>
      <button onClick={handleCreate}>Create Student</button>
      <button onClick={handleUpdate}>Update Student</button>
      <button onClick={handleDelete}>Delete Student</button>
      <StudentsNew />
      <StudentsIndex students={students} onShow={handleShow}/>
      {console.log(isShowVisible)}
      <Modal show={isShowVisible} onClose={handleClose}>
        <StudentsShow student={currentStudent}/>
      </Modal>
    </main>
  );
}
