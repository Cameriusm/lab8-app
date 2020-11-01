import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { deleteTodo, updateTodo } from "../actions/actions";

const initialState = {
  title: "",
  todo: "",
};
const Edit = ({ match, history }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [item, setItem] = useState(initialState);
  useEffect(() => {
    fetch(`/api/todo/get-todo/${match.params.id}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItem(result);
        },
        (error) => {
          console.log(error);
        }
      );
  }, [match.params.id]);

  const OnChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };
  const OnClick = (e) => {
    e.preventDefault();
    deleteTodo(id_todo);
    history.push("/");
  };

  const OnSubmit = (e) => {
    e.preventDefault();
    updateTodo(item);
    history.push("/");
  }

  const { title, todo, id_todo } = item;
  return !isLoaded && item === null ? (
    <Fragment>
      <div className="container text-center my-4">
        <h1>Загрузка...</h1>
      </div>
    </Fragment>
  ) : (
    <Fragment>
      <div className="container">
        <h1
          style={{
            textAlign: "center",
            marginTop: "2rem",
            marginBottom: "1rem",
          }}
        >
          Редактировать запись
        </h1>
        <hr />
        <div className="mb-2">
          <Form>
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
                <Button variant="success" className="ml-1">
                  Назад
                </Button>
              </Link>
              <Button variant="primary" className="ml-1" onClick={OnSubmit}>
                Сохранить
              </Button>
              <Button
                id={id_todo}
                variant="danger"
                className="ml-1"
                onClick={OnClick}
              >
                Удалить запись
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </Fragment>
  );
};

export default Edit;
