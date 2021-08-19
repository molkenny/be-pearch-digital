const express = require("express");
const app = express();
const _ = require('underscore');

//Middlewares
const { Auth } = require('./middleware/auth');

//Controllers
const SpreadSheetController = require('../controllers/SpreadSheetController');

//  Rutas
app.prefix('/api/v1/spreadsheet', async function(router) {

    //List spreadsheet
    router.get("/", [Auth], async function(req, res) {
        try {
            let result = await SpreadSheetController.list(req.user.id);

            res.json({
                success: true,
                data: result
            });
        } catch (error) {
            res.status(500).send({
                success: false,
                err: {
                    message: error.message || error.data.err.message || "Error al listar spreadsheet"
                }
            });
        }
    });

    //Get spreadsheet
    router.get("/:id", [Auth], async function(req, res) {
        try {
            let id_spreadsheet = req.params.id || 0;

            let result = await SpreadSheetController.get(req.user.id, id_spreadsheet);

            res.json({
                success: true,
                data: result
            });
        } catch (error) {
            res.status(500).send({
                success: false,
                err: {
                    message: error.message || error.data.err.message || "Error al obtener spreadsheet"
                }
            });
        }
    });

    //add spreadsheet
    router.post("/", [Auth], async function(req, res) {
        try {

            let body = _.pick(req.body, [
                "name",
            ]);

            if (!body.name || body.name == '') throw new Error('Debe enviar un nombre');

            let result = await SpreadSheetController.add(req.user.id, body.name);

            res.json({
                success: true,
                data: result
            });
        } catch (error) {
            res.status(500).send({
                success: false,
                err: {
                    message: error.message || error.data.err.message || "Error al crear spreadsheet"
                }
            });
        }
    });

    //Delete spreadsheet
    router.delete("/:id", [Auth], async function(req, res) {
        try {

            let id_spreadsheet = req.params.id || 0;

            let body = _.pick(req.body, [
                "data",
            ]);

            let result = await SpreadSheetController.del(req.user.id, id_spreadsheet);

            res.json({
                success: true,
                data: result
            });
        } catch (error) {
            res.status(500).send({
                success: false,
                err: {
                    message: error.message || error.data.err.message || "Error al borrar spreadsheet"
                }
            });
        }
    });

    //Edit spreadsheet
    router.put("/:id", [Auth], async function(req, res) {
        try {

            let id_spreadsheet = req.params.id || 0;

            let body = _.pick(req.body, [
                "name",
                "data",
            ]);

            let result = false;

            if (typeof body.name !== 'undefined') { result = await SpreadSheetController.edit(req.user.id, id_spreadsheet, body.name); }
            if (typeof body.data !== 'undefined') { result = await SpreadSheetController.editData(req.user.id, body.data, id_spreadsheet); }


            res.json({
                success: true,
                data: result
            });
        } catch (error) {
            res.status(500).send({
                success: false,
                err: {
                    message: error.message || error.data.err.message || "Error al editar/crear spreadsheet"
                }
            });
        }
    });

});
module.exports = app;