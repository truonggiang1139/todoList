import React, { useState } from "react";
import { Col, Input, Button, Select, Tag, Space } from "antd";
import { typePriority, typeTodo } from "../../types/todo.type";
import { useDispatch } from "react-redux";
import { addTodo } from "../TodoList/todoList.slice";
import { nanoid } from "@reduxjs/toolkit";
const initialState: typeTodo = {
  id: nanoid(),
  name: "",
  priority: "Medium",
  checked: false,
};
export default function AddTodo() {
  const [form, setForm] = useState(initialState);
  const dispatch = useDispatch();
  const handleChangePriority = (value: typePriority) => {
    setForm((prev) => ({ ...prev, priority: value }));
  };
  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, name: event.target.value }));
  };
  const handleSubmit = () => {
    dispatch(addTodo(form));
    setForm(initialState);
  };
  return (
    <Col span={24}>
      <Space style={{ display: "flex" }}>
        <Input value={form.name} onChange={handleChangeInput} />
        <Select
          value={form.priority}
          optionLabelProp="children"
          onChange={handleChangePriority}
        >
          <Select.Option value="High" label="High">
            <Tag color="red">High</Tag>
          </Select.Option>
          <Select.Option value="Medium" label="Medium">
            <Tag color="blue">Medium</Tag>
          </Select.Option>
          <Select.Option value="Low" label="Low">
            <Tag color="gray">Low</Tag>
          </Select.Option>
        </Select>
        <Button type="primary" onClick={handleSubmit}>
          Add
        </Button>
      </Space>
    </Col>
  );
}
