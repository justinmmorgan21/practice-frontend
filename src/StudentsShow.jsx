export function StudentsShow(props) {
  return (
    <>
      <h1>{props.student.name}</h1>
      <p>{props.student.dob}</p>
      <h3>{props.student.email}</h3>
    </>
  );
}
