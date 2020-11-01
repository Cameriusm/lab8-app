const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const connectDB = require('../config/db');

router.get("/get-todo/:id", async (req, res) => {
    let sql = `SELECT * FROM Todos WHERE id_todo=${req.params.id} LIMIT 1`;
    await connectDB.query(sql, (err, result) => {
        if (err) {
            res.status(500).send("Ошибка сервера");
            throw err;
        } else res.json(result[0]);
    })
})

router.delete("/:id", async (req,res) => {
        let id = req.params.id;
        let sql = `DELETE FROM Todos WHERE id_todo =${id}`;
        await connectDB.query(sql, (err) => {
            if (err) {
                res.status(500).send("Ошибка сервера");
                throw err;
            } else res.send("Запись удалена");
        })
    }
)

// router.delete(
//     "/",
//     [ check("id_todo", "Вы не выбрали задачу!")],
//     async (req,res) => {
//         const errors = validationResult(req);
//         if (!errors.isEmpty()) {
//             return res.status(400).json({ errors: errors.array()});
//         }
//         const { id_todo } = req.body;
//         let sql = `DELETE FROM Todos WHERE id_todo =${id_todo}`;
//         await connectDB.query(sql, (err) => {
//             if (err) {
//                 res.status(500).send("Ошибка сервера");
//                 throw err;
//             } else res.send("Запись удалена");
//         })
//     }
// )


router.put(
    "/",
    [
        check("id_todo", "Вы не выбрали задачу"),
        check("title", "Укажите заголовок задачи"),
        check("todo", "Укажите задачу"),
    ],
    async (req,res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        }
        const {id_todo, title, todo} =req.body;
        let sql = `UPDATE Todos SET title = "${title}", todo = "${todo}" WHERE id_todo = "${id_todo}"`;

        connectDB.query(sql, (err) => {
            if (err) {
                res.status(500).send("Ошибка сервера");
                throw err;
            } else res.send("Задача обновлена!");
        })
    }
)

router.post(
    "/",
    [
        check("title", "Укажите названия задачи").not().isEmpty(),
        check("todo", "Укажите задачу!").not().isEmpty(),
    ],
    async (req,res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array()});
        }

        const { title, todo } = req.body;
        let data = { title, todo};
        let sql = "INSERT INTO Todos SET ?";

        connectDB.query(sql, data, (err, result) => {
            if (err) {
                res.status(500).send("Ошибка сервера");
                throw err;
            } else res.send("Задача добавлена");
        })
    } 
)

router.get('/', async (req,res) => {
    let sql = "SELECT * FROM Todos";
    connectDB.query(sql, (err, result) => {
        if(err) throw err;
        res.json(result);
    });
});

module.exports = router;