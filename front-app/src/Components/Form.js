import React, {useState} from "react";
import { Form, Button} from "react-bootstrap";
import {sendTodo} from "../actions/actions";
import {Link} from "react-router-dom";

const initialState = {
    title: "",
    todo: "",
};

const FormAdd = ({ history }) => {
    const [formData, setFormData] = useState(initialState);
    const OnChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value});
    };
    const OnSubmit = (e) => {
        e.preventDefault();
        sendTodo(formData);
        history.push("/");
    };
    const {title, todo} = formData;
    return (
        <div className="form-add-todo">
            <div className="container">
                <h1 style={{
                    textAlign:"center",
                    marginTop: "2rem",
                    marginBottom: "1rem",
                }}>
                    Todo App для 9ПКС
                </h1>
                <hr/>
                <Form onSubmit={OnSubmit}>
                    <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Укажите заголовок для задачи</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Заголовок задачи"
                        name="title"
                        value={title}
                        onChange={OnChange}
                        />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Укажите описание задачи</Form.Label>
                <Form.Control 
                    as="textarea"
                    rows="2"
                    placeholder="Описание задачи"
                    name="todo"
                    value={todo}
                    onChange={OnChange}
                />
                </Form.Group>
                <div className="text-center mb-2">
                    <Link to="/">
                        <Button type="submit" variant="danger" className="ml-1">
                            Назад
                        </Button>
                    </Link>
                    <Button type="submit" variant="success" className="ml-1">
                        Добавить
                    </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default FormAdd;