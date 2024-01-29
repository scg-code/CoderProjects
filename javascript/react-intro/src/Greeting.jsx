function Greeting({ name = "None", age = 23 }) {
  // destructuring
  //   console.log(props);
  // //   const { name='None', age=23 } = props; // destructuring

  return (
    <>
      <p>FR: Bonjour, {name}!</p>
      <p>EN: Hello! {age}</p>
      <p>ES: Hola {10 * 9}!</p>
    </>
  );
}

export default Greeting;
