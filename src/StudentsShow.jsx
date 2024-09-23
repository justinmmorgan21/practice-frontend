export function StudentsShow(props) {

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdate(params, props.student.id, () => event.target.reset())
  }

  return (
    <>
      <h1>{props.student.name}</h1>
      <p>{props.student.dob}</p>
      <h3>{props.student.email}</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input type="text" id="name-input" name="name" defaultValue={props.student.name}></input><br />
        <label htmlFor="dob">Date of Birth: </label>
        <input type="text" id="dob-input" name="dob" defaultValue={props.student.dob}></input><br />
        <label htmlFor="email">Email: </label>
        <input type="text" id="email-input" name="email" defaultValue={props.student.email}></input><br />
        <button type="submit">Update</button>
      </form>
    </>
  );
}
