const express = require("express");
const app = express();
const _ = require('underscore');

//Middlewares
const { Auth, Admin } = require('./middleware/auth');

//Controllers
const UserController = require('../controllers/UserController');

//  Rutas
app.prefix('/api/v1/user', async function(router) {

    //List Users
    router.get("/", [Auth, Admin], async function(req, res) {
        try {

            //  Pagination
            const page = req.query.page || 1;
            const limit = req.query.limit || 10;
            const offset = (page - 1) * limit;

            let result = await UserController.list(limit, offset);

            res.json({
                success: true,
                data: result
            });
        } catch (error) {
            res.status(500).send({
                success: false,
                err: {
                    message: error.message || error.data.err.message || "Error al traer lista de usuarios"
                }
            });
        }
    });

    //Cambiar Password Usuario
    router.put("/password", [Auth], async function(req, res) {
        try {
            let body = _.pick(req.body, [
                "password",
                "password_anterior",
            ]);

            let result = await UserController.resetPassword(req.user.id, body.password_anterior, body.password);

            res.json({
                success: true,
                data: result
            });
        } catch (error) {
            let message = error.message || error.data.err.message || "Error al cambiar password usuario";
            res.status(500).send({
                success: false,
                err: {
                    message
                }
            });
        }
    });

    //Edit User
    router.put("/:id", [Auth, Admin], async function(req, res) {
        try {

            let id_user = req.params.id || null;

            let body = _.pick(req.body, [
                "name",
                "mail",
                "password",
                "id_group",
                "status"
            ]);

            let result = await UserController.edit(id_user, body.name, body.mail, body.password, body.id_group, body.status);

            res.json({
                success: true,
                data: result
            });
        } catch (error) {
            res.status(500).send({
                success: false,
                err: {
                    message: error.message || error.data.err.message || "Error al editar usuario"
                }
            });
        }
    });

    //Add User
    router.post("/", [Auth, Admin], async function(req, res) {
        try {

            let body = _.pick(req.body, [
                "name",
                "mail",
                "password",
                "id_group"
            ]);

            let result = await UserController.add(body.name, body.mail, body.password, body.id_group);

            res.json({
                success: true,
                data: result
            });
        } catch (error) {
            res.status(500).send({
                success: false,
                err: {
                    message: error.message || error.data.err.message || "Error al agregar usuario"
                }
            });
        }
    });

    //Delete User
    router.delete("/:id", [Auth, Admin], async function(req, res) {
        try {

            let id_user = req.params.id || null;

            let result = await UserController.destroy(id_user);

            res.json({
                success: true,
                data: result
            });
        } catch (error) {
            res.status(500).send({
                success: false,
                err: {
                    message: error.message || error.data.err.message || "Error al borrar usuario"
                }
            });
        }
    });
});
module.exports = app;