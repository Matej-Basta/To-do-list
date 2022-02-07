import { Toggle } from "./Toggle";

export const TodoItem = (props) => {
  //returning a text and toggle
  return (
    <>
      <p>{props.task}</p>
      <Toggle />
    </>
  );
};
