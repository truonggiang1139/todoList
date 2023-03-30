import { Row, Tag, Checkbox } from "antd";
import { useDispatch } from "react-redux";
import { typeTodo } from "../../types/todo.type";
import { deleteTodo } from "../TodoList/todoList.slice";

const priorityColorMapping = {
  High: "red",
  Medium: "blue",
  Low: "gray",
};

export default function Todo({ id, name, priority, checked }: typeTodo) {
  // const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();
  // const toggleCheckbox = () => {
  //   setChecked(!checked);
  // };
  const handleDelete = () => {
    dispatch(deleteTodo(id));
  };
  return (
    <Row
      justify="space-between"
      style={{
        marginBottom: 3,
        ...(checked ? { opacity: 0.5, textDecoration: "line-through" } : {}),
      }}
    >
      <Checkbox checked={checked} onClick={handleDelete}>
        {name}
      </Checkbox>
      <Tag color={priorityColorMapping[priority]} style={{ margin: 0 }}>
        {priority}
      </Tag>
    </Row>
  );
}
