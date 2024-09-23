export function StudentsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreate(params, () => event.target.reset())
  }

  return (
    <div id="new-student">
      <h3>New Student</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input type="text" id="name-input" name="name"></input><br />
        <label htmlFor="dob">Date of Birth: </label>
        <input type="text" id="dob-input" name="dob"></input><br />
        <label htmlFor="email">Email: </label>
        <input type="text" id="email-input" name="email"></input><br />
        <button type="submit">Submit</button>
      </form>
      <br />
    </div>
  );
}
