import { StudentsIndex } from "./StudentsIndex";
import { StudentsNew } from "./StudentsNew";
import axios from "axios";
import { useState, useEffect } from "react";
import { StudentsShow } from "./StudentsShow";
import { Modal } from "./Modal";

export function StudentsPage() {
  const [students, setStudents] = useState([])
  const [isShowVisible, setIsShowVisible] = useState(false)
  const [currentStudent, setCurrentStudent] = useState({})
  // const [createMessage, setCreateMessage] = useState("")

  const handleIndex = () => {
    axios.get("http://localhost:3000/students.json").then(response => {
      setStudents(response.data);
    })
  }
  const handleShow = (student) => {
    setIsShowVisible(true);
    setCurrentStudent(student)
  }
  const handleCreate = (params, successCallback) => {
    // setCreateMessage("create");
    axios.post("http://localhost:3000/students.json", params).then(response => {
      console.log(response.data);
      setStudents(...students, response.data);
      successCallback();
    })
  }

  const handleUpdate = (params, id, successCallback) => {
    axios.patch(`http://localhost:3000/students/${id}.json`, params).then(response => {
      console.log(response.data);
      setStudents(students.map(student => student.id === id ? response.data : student));
      successCallback();
      handleClose();
    })
  }

  // const handleDelete = () => {
  //   axios.delete("http://localhost:3000/students/3.json").then(response => {
  //     console.log(response.data);
  //   })
  // }

  const handleClose = () => {
    setIsShowVisible(false);
  }
  
  useEffect(handleIndex, []);

  return (
    <main>
      <StudentsNew onCreate={handleCreate}/>
      <StudentsIndex students={students} onShow={handleShow}/>
      <Modal show={isShowVisible} onClose={handleClose}>
        <StudentsShow student={currentStudent} onUpdate={handleUpdate}/>
      </Modal>
    </main>
  );
}
