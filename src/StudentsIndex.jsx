export function StudentsIndex(props) {
  return (
    <div id="all-students">
      <h3>All Students</h3>
      <div className="cards">
      { props.students.map(student => (
        <div key={student.id}>
          <h2>{student.name}</h2>
          <p>{student.dob}</p>
          <p>{student.email}</p>
          <button onClick={() => props.onShow(student)}>More info</button>
        </div>
      ))}
      </div>
    </div>
  );
}
