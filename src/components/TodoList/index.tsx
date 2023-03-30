import { Col, Row } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import AddTodo from "../AddTodo";
import Todo from "../Todo";

export default function TodoList() {
  const todoList = useSelector(
    (state: RootState) => state.todoListReducer.todoList
  );

  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {todoList.map((todo) => (
          <Todo
            id={todo.id}
            key={todo.id}
            name={todo.name}
            priority={todo.priority}
            checked={todo.checked}
          ></Todo>
        ))}
      </Col>
      <AddTodo />
    </Row>
  );
}
