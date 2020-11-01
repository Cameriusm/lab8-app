import React, { Fragment, useEffect, useState} from "react";
import Todos from './Todos'
import { Button} from 'react-bootstrap';
const Main = () => {
    const [isLoaded,setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("/api/todo")
            .then((res) => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },
                (error) => {
                    console.log(error);
                }
            );
    }, []);
    return !isLoaded && items === null ? (
        <Fragment>
            <div className="container text-center my-4">
                <h1>Загрузка...</h1>
            </div>
        </Fragment>
    ) : (
        <Fragment>
            <div className="container">
                <h1 style={{
                    textAlign:"center",
                    marginTop:"2rem",
                    marginBottom:"1rem",
                }}>
                    Todo App для 9ПКС
                </h1>
                <hr/>
                <div className="text-center mb-2">
                    <a href="/create">
                        <Button variant="success" size="lg">
                            Добавить запись
                        </Button>
                    </a>
                </div>
                <h4 className="text-center">Текущие задачи</h4>
                <hr />
                {items.map((el) => (
                    <Todos key ={el.id_todo} todo={el} />
                ))}
            </div>
        </Fragment>
    )
}

export default Main;