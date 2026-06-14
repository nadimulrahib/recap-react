export default function Todo({ item, done }) {
  return (
    <>
      {done===true ? <p>Todo item: {item}</p> : <p>Do work: {item}</p>}
    </>
  );
}
