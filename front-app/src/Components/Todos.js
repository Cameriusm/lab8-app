import React from "react";
import Moment from "react-moment";
import "moment/locale/ru";
import {Card,Button} from "react-bootstrap";
import { Link } from "react-router-dom";

const Todos = ({todo}) => {
    console.log(todo);
    return (
        <Card className="mb-2">
            <Card.Header as="h5">
                Дата создания:{" "}
                <Moment locale="ru" format="ll">
                    {todo.created_at}
                </Moment>
            </Card.Header>
            <Card.Body>
                <Card.Title>{todo.title}</Card.Title>
                <Card.Text>{todo.todo}</Card.Text>
                <Link to={`/edit/${todo.id_todo}`}>
                    <Button variant="success">Редактировать</Button>
                </Link>
                {/* <Button variant="danger" className="ml-1">Удалить</Button> */}
            </Card.Body>
        </Card>
    )
}

export default Todos;