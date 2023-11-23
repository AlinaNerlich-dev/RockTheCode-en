const ToDo = (props) => {
  return (
    <li>
      {props.children}, {props.dueDate}
    </li>
  );
};

export default ToDo;
